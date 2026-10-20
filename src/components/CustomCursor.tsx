import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInputHovered, setIsInputHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Direct coordinate tracking (bypasses React state overhead for silky 60/120fps updates)
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringPosRef = useRef({ x: -100, y: -100 });
  const lastEmitRef = useRef({ x: -100, y: -100 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number | null>(null);
  const hasMovedOnceRef = useRef(false);

  // Check user preference for reduced motion
  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(reducedMotionQuery.matches);

    const handleReducedMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
    return () => {
      reducedMotionQuery.removeEventListener('change', handleReducedMotionChange);
    };
  }, []);

  // Main Pointer Event Listeners
  useEffect(() => {
    if (isReducedMotion || isTouchDevice) {
      document.body.classList.remove('custom-cursor-active');
      return;
    }

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      // If event came from pure touch input, disable custom cursor and preserve native touch
      if ('pointerType' in e && e.pointerType === 'touch') {
        setIsTouchDevice(true);
        setIsVisible(false);
        document.body.classList.remove('custom-cursor-active');
        return;
      }

      const clientX = e.clientX;
      const clientY = e.clientY;

      mouseRef.current = { x: clientX, y: clientY };

      // On initial entrance, snap the follower ring directly to cursor without cross-screen fly-in
      if (!hasMovedOnceRef.current) {
        ringPosRef.current = { x: clientX, y: clientY };
        lastEmitRef.current = { x: clientX, y: clientY };
        hasMovedOnceRef.current = true;
      }

      setIsVisible(true);
      document.body.classList.add('custom-cursor-active');

      // Particle trail emission during movement
      const dx = clientX - lastEmitRef.current.x;
      const dy = clientY - lastEmitRef.current.y;
      const distSq = dx * dx + dy * dy;

      // Spawn glowing trail particles every ~18px moved, capped to 26 concurrent particles
      if (distSq > 324 && particlesRef.current.length < 26) {
        lastEmitRef.current = { x: clientX, y: clientY };
        const colors = ['#8B5CF6', '#A78BFA', '#38BDF8', '#C084FC'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        particlesRef.current.push({
          id: Math.random(),
          x: clientX + (Math.random() - 0.5) * 4,
          y: clientY + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45 - 0.2, // Delicate upward drift
          alpha: 0.65,
          size: Math.random() * 2 + 1.2,
          color: randomColor,
        });
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove('custom-cursor-active');
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('custom-cursor-active');
    };

    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isText =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.classList.contains('cursor-text');
      setIsInputHovered(isText);

      // Only expand on interactive controls (links, buttons, clickable project cards)
      const interactive = target.closest(
        'a, button, [role="button"], .cursor-pointer, input, textarea, select, summary, [tabindex="0"]'
      );
      setIsHovered(!!interactive && !isText);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handlePointerOver, { passive: true });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handlePointerOver);
    };
  }, [isReducedMotion, isTouchDevice]);

  // High Performance Animation Loop
  useEffect(() => {
    if (isReducedMotion || isTouchDevice) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      if (ctx) {
        ctx.resetTransform?.();
        ctx.scale(dpr, dpr);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const loop = () => {
      const targetX = mouseRef.current.x;
      const targetY = mouseRef.current.y;

      // 1. Follower ring graceful lerp
      ringPosRef.current.x += (targetX - ringPosRef.current.x) * 0.22;
      ringPosRef.current.y += (targetY - ringPosRef.current.y) * 0.22;

      // 2. Direct transform on dot and ring (zero CSS transition lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      // 3. Render delicate trailing particles on canvas
      if (ctx && canvas) {
        const dpr = window.devicePixelRatio || 1;
        ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

        const currentParticles = particlesRef.current;
        for (let i = currentParticles.length - 1; i >= 0; i--) {
          const p = currentParticles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.024; // Smooth ~450ms fade-out

          if (p.alpha <= 0) {
            currentParticles.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 4;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isReducedMotion, isTouchDevice]);

  if (isReducedMotion || isTouchDevice) return null;

  return (
    <>
      {/* Delicate Particle Trail Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* Trailing Follower Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          opacity: isVisible && !isInputHovered ? 1 : 0,
          transition: 'width 0.22s ease-out, height 0.22s ease-out, background-color 0.22s ease-out, border-color 0.22s ease-out, opacity 0.15s ease-out',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full will-change-transform flex items-center justify-center select-none ${
          isHovered
            ? 'w-10 h-10 border border-accent-blue/80 bg-accent-blue/15 shadow-[0_0_16px_rgba(56,189,248,0.35)]'
            : isClicking
            ? 'w-5 h-5 border border-accent-purple bg-accent-purple/25'
            : 'w-7 h-7 border border-accent-purple/50 bg-accent-purple/5 shadow-[0_0_10px_rgba(139,92,246,0.2)]'
        }`}
      />

      {/* Main Cursor Dot (Zero-Latency Hardware Pointer Sync) */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          opacity: isVisible && !isInputHovered ? 1 : 0,
          transition: 'width 0.15s ease-out, height 0.15s ease-out, background-color 0.15s ease-out, opacity 0.15s ease-out',
        }}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full will-change-transform select-none ${
          isHovered
            ? 'w-2 h-2 bg-accent-blue shadow-[0_0_8px_#38BDF8]'
            : isClicking
            ? 'w-1.5 h-1.5 bg-white'
            : 'w-2 h-2 bg-accent-purple shadow-[0_0_8px_#8B5CF6]'
        }`}
      />
    </>
  );
};


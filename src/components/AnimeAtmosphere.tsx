import React, { useEffect, useRef } from 'react';

interface AmbientParticle {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
  speedY: number;
  speedX: number;
  swaySpeed: number;
  color: string;
}

export const AnimeAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Track mouse for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current.targetX = (e.clientX / width - 0.5) * 20;
      mousePosRef.current.targetY = (e.clientY / height - 0.5) * 20;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize 30 delicate floating particles
    const particleCount = 32;
    const colors = [
      'rgba(167, 139, 250, ', // violet/lavender
      'rgba(139, 92, 246, ',  // primary purple
      'rgba(56, 189, 248, ',  // light blue
      'rgba(192, 132, 252, ', // soft magenta
      'rgba(226, 232, 240, ', // starlight silver
    ];

    const particles: AmbientParticle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.35 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.7,
        baseAlpha,
        alpha: baseAlpha,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulsePhase: Math.random() * Math.PI * 2,
        speedY: -(Math.random() * 0.28 + 0.12), // gentle upward float
        speedX: (Math.random() - 0.5) * 0.15,
        swaySpeed: Math.random() * 0.015 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let step = 0;
    const loop = () => {
      if (isTabVisible && ctx && canvas) {
        // Smoothly lerp mouse parallax
        mousePosRef.current.x += (mousePosRef.current.targetX - mousePosRef.current.x) * 0.05;
        mousePosRef.current.y += (mousePosRef.current.targetY - mousePosRef.current.y) * 0.05;

        ctx.clearRect(0, 0, width, height);
        step += 0.02;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Move
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(step * p.swaySpeed * 60 + p.pulsePhase) * 0.22;

          // Wrap edges
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Pulse alpha gently
          p.pulsePhase += p.pulseSpeed;
          p.alpha = p.baseAlpha + Math.sin(p.pulsePhase) * (p.baseAlpha * 0.4);

          // Apply gentle parallax
          const renderX = p.x + mousePosRef.current.x * (p.radius * 0.6);
          const renderY = p.y + mousePosRef.current.y * (p.radius * 0.6);

          ctx.save();
          ctx.beginPath();
          ctx.arc(renderX, renderY, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.max(0, Math.min(1, p.alpha))})`;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `${p.color}0.8)`;
          ctx.fill();
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Delicate floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
      />

      {/* Atmospheric Soft Light Effects */}
      <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-accent-purple/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-accent-blue/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-950/[0.12] rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Anime Cyber Grid Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)',
        }}
      />
    </div>
  );
};

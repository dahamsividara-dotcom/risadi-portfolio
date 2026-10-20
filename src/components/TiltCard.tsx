import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isFlagship?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  isFlagship = false,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glowPos, setGlowPos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchOrReduced, setIsTouchOrReduced] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchOrReduced(prefersReducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchOrReduced || !cardRef.current) return;
    if (e.nativeEvent instanceof PointerEvent && e.nativeEvent.pointerType === 'touch') return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Gentle restrained angles to preserve absolute text legibility and prevent layout shift
    const maxAngle = isFlagship ? 3.5 : 4.5;
    const rotateX = -y * maxAngle;
    const rotateY = x * maxAngle;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(0)`
    );
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    if (!isTouchOrReduced) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)');
    setGlowPos(null);
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
        willChange: isHovered ? 'transform' : 'auto',
      }}
      className={`relative rounded-2xl ${className}`}
    >
      {/* Subtle dynamic mouse-following glow overlay */}
      {!isTouchOrReduced && isHovered && glowPos && (
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: isFlagship
              ? `radial-gradient(420px circle at ${glowPos.x}px ${glowPos.y}px, rgba(139, 92, 246, 0.16), rgba(56, 189, 248, 0.08) 45%, transparent 75%)`
              : `radial-gradient(320px circle at ${glowPos.x}px ${glowPos.y}px, rgba(139, 92, 246, 0.13), rgba(56, 189, 248, 0.05) 50%, transparent 75%)`,
          }}
        />
      )}

      {/* Flagship border glow accent */}
      {isFlagship && isHovered && !isTouchOrReduced && (
        <div
          aria-hidden="true"
          className="absolute -inset-[1px] rounded-[inherit] pointer-events-none border border-accent-purple/40 shadow-[0_0_24px_rgba(139,92,246,0.22)] z-10 transition-opacity duration-300"
        />
      )}

      {children}
    </div>
  );
};

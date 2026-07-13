import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile / touch devices for performance and responsiveness
    const mobileCheck = window.matchMedia('(pointer: coarse)');
    if (mobileCheck.matches) {
      setIsMobile(true);
      return;
    }
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;

    let dotScale = 1;
    let ringScale = 1;

    let isPointer = false;
    let isMouseDown = false;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
        if (glowRef.current) glowRef.current.style.opacity = '1';
      }

      // High-performance pointer check: avoids getComputedStyle (no layout thrashing)
      const target = e.target as HTMLElement | null;
      if (target) {
        isPointer =
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.closest('.cursor-pointer') !== null ||
          target.getAttribute('role') === 'button';
      } else {
        isPointer = false;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
    };

    let animationFrameId: number;
    const tick = () => {
      // Coordinate interpolation
      dotX += (mouseX - dotX) * 0.45;
      dotY += (mouseY - dotY) * 0.45;

      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      // Scale interpolation
      const targetDotScale = isPointer ? 0 : 1;
      const targetRingScale = isPointer ? 2.5 : isMouseDown ? 0.8 : 1;

      dotScale += (targetDotScale - dotScale) * 0.25;
      ringScale += (targetRingScale - ringScale) * 0.25;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0) scale(${dotScale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 24}px, ${ringY - 24}px, 0) scale(${ringScale})`;
        ringRef.current.style.backgroundColor = isPointer ? 'rgba(255, 215, 0, 0.15)' : 'transparent';
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 64}px, ${glowY - 64}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Premium Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-taxi-yellow rounded-full pointer-events-none z-[10000] shadow-[0_0_15px_rgba(255,215,0,0.8)] opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Outer Luxury Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-12 h-12 border border-taxi-yellow/40 rounded-full pointer-events-none z-[9999] backdrop-blur-[2px] opacity-0 transition-opacity duration-300"
        style={{
          transition: 'background-color 0.2s ease, opacity 0.3s ease',
          willChange: 'transform, background-color'
        }}
      />

      {/* Trailing Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-32 h-32 bg-taxi-yellow/5 rounded-full pointer-events-none z-[9998] blur-3xl opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;

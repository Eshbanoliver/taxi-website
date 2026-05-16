import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Premium Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-taxi-yellow rounded-full pointer-events-none z-[10000] shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${isPointer ? 0 : 1})`,
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Outer Luxury Ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border border-taxi-yellow/40 rounded-full pointer-events-none z-[9999] backdrop-blur-[2px]"
        style={{
          transform: `translate3d(${position.x - 24}px, ${position.y - 24}px, 0) scale(${isPointer ? 2.5 : isMouseDown ? 0.8 : 1})`,
          backgroundColor: isPointer ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
          transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s ease',
        }}
      />
      
      {/* Trailing Glow */}
      <div
        className="fixed top-0 left-0 w-32 h-32 bg-taxi-yellow/5 rounded-full pointer-events-none z-[9998] blur-3xl"
        style={{
          transform: `translate3d(${position.x - 64}px, ${position.y - 64}px, 0)`,
          transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      />
    </>
  );
};

export default CustomCursor;

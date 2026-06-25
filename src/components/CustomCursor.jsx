import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect mobile/touch device
    const checkDevice = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                      'ontouchstart' in window || 
                      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isTouch || isMobileUA);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over interactive elements
      const target = e.target;
      if (target) {
        const isInteractive = target.closest('button, a, select, input, textarea, [role="button"], .cursor-pointer, [onClick]');
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.document.body.addEventListener('mouseleave', handleMouseLeave);
    window.document.body.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.document.body.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Smooth trail interpolation
  useEffect(() => {
    if (isMobile) return;
    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        const ease = 0.15; // Speed of tracking
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Global CSS override to hide native cursor on desktop */}
      <style>{`
        @media (pointer: fine) {
          body, button, a, select, input, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand dark:bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Outer tracking ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-brand/50 dark:border-white/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
          backgroundColor: isHovered ? 'rgba(153, 27, 27, 0.08)' : 'transparent',
          borderColor: isHovered ? '#991B1B' : undefined,
        }}
      />
    </>
  );
};

export default CustomCursor;

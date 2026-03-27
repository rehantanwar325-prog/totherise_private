import { useEffect, useRef, useCallback } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);
  const isVisibleRef = useRef(false);
  const frameRef = useRef(null);

  const animate = useCallback(() => {
    trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.12;
    trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.12;

    if (dotRef.current) {
      dotRef.current.style.left = `${posRef.current.x}px`;
      dotRef.current.style.top = `${posRef.current.y}px`;
      dotRef.current.style.opacity = isVisibleRef.current ? '1' : '0';

      if (isHoveringRef.current) {
        dotRef.current.style.width = '45px';
        dotRef.current.style.height = '45px';
        dotRef.current.style.background = 'transparent';
        dotRef.current.style.border = '2.5px solid white';
        dotRef.current.style.boxShadow = '0 0 25px rgba(255,255,255,0.8), 0 0 15px var(--purple)';
      } else {
        dotRef.current.style.width = '12px';
        dotRef.current.style.height = '12px';
        dotRef.current.style.background = 'white';
        dotRef.current.style.border = 'none';
        dotRef.current.style.boxShadow = '0 0 20px 5px rgba(255,255,255,0.4), 0 0 40px var(--purple)';
      }
    }

    frameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      isVisibleRef.current = true;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      isHoveringRef.current = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(frameRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        width: '12px',
        height: '12px',
        background: 'white',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 2147483647,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.2s, border 0.2s, opacity 0.3s',
        opacity: 0,
      }}
    />
  );
};

export default CustomCursor;

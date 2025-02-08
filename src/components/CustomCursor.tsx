import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;

    // Initial setup
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });

    // Mouse move animation
    const moveCircle = (e: MouseEvent) => {
      // Animate outer circle with slight delay
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out"
      });
      
      // Animate inner dot faster
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none"
      });
    };

    // Hover effect on interactive elements
    const handleLinkHover = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: "power3.out"
      });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power3.out"
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCircle);

    // Add hover effects to interactive elements
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', moveCircle);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className=" cursor-circle fixed pointer-events-none w-8 h-8 border-2 border-cyan-300  hidden sm:block rounded-full z-[999] mix-blend-difference"
      />
      <div 
        ref={cursorDotRef}
        className="cursor-dot fixed pointer-events-none w-1 h-1 bg-cyan-300 rounded-full z-[999]  hidden sm:block"
      />
    </>
  );
};

export default CustomCursor;

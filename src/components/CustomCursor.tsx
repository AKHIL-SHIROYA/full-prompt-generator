
import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        setIsVisible(true);
      }
    };
    
    const onMouseLeave = () => {
      setIsVisible(false);
    };
    
    const onMouseEnter = () => {
      setIsVisible(true);
    };
    
    // Track hoverable elements
    const handleMouseEnterHoverable = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeaveHoverable = () => {
      setIsHovering(false);
    };
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    
    // Find all hoverable elements (buttons, links, etc.)
    const hoverableElements = document.querySelectorAll('button, a, .hoverable');
    
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnterHoverable);
      element.addEventListener('mouseleave', handleMouseLeaveHoverable);
    });
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnterHoverable);
        element.removeEventListener('mouseleave', handleMouseLeaveHoverable);
      });
    };
  }, []);
  
  return (
    <div 
      ref={cursorRef} 
      className={`custom-cursor ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'hovering' : ''}`}
      style={{ 
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}
    />
  );
};

export default CustomCursor;

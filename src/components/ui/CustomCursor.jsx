import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border: '2px solid rgba(139, 92, 246, 0.5)',
      height: 32,
      width: 32,
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.1
      }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      border: '2px solid rgba(6, 182, 212, 0.8)',
      transition: {
        type: 'tween',
        ease: 'backOut',
        duration: 0.1
      }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    }
  };

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] mix-blend-screen"
        variants={variants}
        animate={isHovering ? 'hover' : 'default'}
      />
      <motion.div
        className="fixed top-0 left-0 bg-primary h-2 w-2 rounded-full pointer-events-none z-[100]"
        variants={dotVariants}
        animate="default"
        transition={{
            type: 'tween',
            ease: 'backOut',
            duration: 0.05
        }}
      />
    </>
  );
};

export default CustomCursor;


import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollValue = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Background shapes animation
  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.8, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background decorative shapes */}
      <motion.div 
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-400/10 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={shapeVariants}
        ref={parallaxRef}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-red-500/20 to-red-400/10 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={shapeVariants}
        custom={1}
      />

      {/* Main content with task-themed styling */}
      <div className="max-w-5xl w-full z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 bg-red-600 text-white font-bold rounded-lg mb-2">
            PORTFOLIO WEBSITE
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 task-heading"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          ADVANCED <span className="text-red-600">ANIMATIONS</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          A showcase of immersive, interactive web experiences with smooth transitions and 
          captivating effects built with modern animation libraries.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.button 
            className="apple-button bg-red-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
          
          <motion.button 
            className="apple-button bg-blue-600 text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      
      {/* Task-themed decorative elements */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="flex justify-center space-x-3">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (i * 0.1), duration: 0.5 }}
              className="w-6 h-6 bg-blue-500 rounded"
            />
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V22M8 22L14 16M8 22L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;

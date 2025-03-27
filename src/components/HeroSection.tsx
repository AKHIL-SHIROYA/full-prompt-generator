
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
        className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/10 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={shapeVariants}
        ref={parallaxRef}
      />
      
      <motion.div 
        className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-gradient-to-tr from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10 blur-3xl"
        initial="hidden"
        animate="visible"
        variants={shapeVariants}
        custom={1}
      />

      {/* Main content */}
      <div className="max-w-5xl w-full z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hero-text-gradient"
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Crafting Digital Experiences
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-600 dark:text-gray-300"
          initial="hidden"
          animate="visible"
          variants={subtitleVariants}
        >
          A portfolio of immersive, interactive design and development work with a focus on
          smooth animations and exceptional user experiences.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
        >
          <motion.button 
            className="apple-button bg-black text-white dark:bg-white dark:text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.button>
          
          <motion.button 
            className="apple-button bg-white border border-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative gradient line */}
      <div className="absolute bottom-12 w-full">
        <div className="hero-gradient mx-auto max-w-sm" />
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

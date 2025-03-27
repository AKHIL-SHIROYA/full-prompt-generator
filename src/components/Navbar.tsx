
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type NavbarProps = {
  transparent?: boolean;
};

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 * custom }
    })
  };

  return (
    <motion.header
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled || !transparent
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-red-600 dark:bg-red-500 rounded-lg flex items-center justify-center"
          >
            <span className="text-white font-bold">CT</span>
          </motion.div>
          <span className="font-medium text-lg">CODTECH</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {['Home', 'Projects', 'About', 'Contact'].map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apple-button bg-red-600 text-white dark:bg-red-500"
          >
            Start Task
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;

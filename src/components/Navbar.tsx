
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type NavbarProps = {
  transparent?: boolean;
};

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
            className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center"
          >
            <span className="text-white dark:text-black font-bold">P</span>
          </motion.div>
          <span className="font-medium text-lg">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { name: 'Home', href: '/' },
            { name: 'Projects', href: '#projects' },
            { name: 'About', href: '#about' },
            { name: 'Contact', href: '#contact' }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apple-button bg-black text-white dark:bg-white dark:text-black"
          >
            Hire Me
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 py-4 px-6"
        >
          <nav className="flex flex-col space-y-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'Projects', href: '#projects' },
              { name: 'About', href: '#about' },
              { name: 'Contact', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="apple-button bg-black text-white dark:bg-white dark:text-black mt-2"
            >
              Hire Me
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;

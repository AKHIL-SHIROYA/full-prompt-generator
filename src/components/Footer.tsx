
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-16 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-black font-bold">P</span>
              </div>
              <span className="font-medium text-lg">Portfolio</span>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Creating exceptional digital experiences with advanced animations and intuitive interfaces.
            </p>
            
            <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V9h2v8z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links columns */}
          {[
            {
              title: "Pages",
              links: [
                { label: "Home", url: "/" },
                { label: "Projects", url: "/projects" },
                { label: "About", url: "/about" },
                { label: "Contact", url: "/contact" }
              ]
            },
            {
              title: "Services",
              links: [
                { label: "Web Development", url: "#" },
                { label: "Animation Design", url: "#" },
                { label: "Interactive Media", url: "#" },
                { label: "UI/UX Design", url: "#" }
              ]
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", url: "#" },
                { label: "Terms of Service", url: "#" },
                { label: "Cookie Policy", url: "#" },
                { label: "Sitemap", url: "#" }
              ]
            }
          ].map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.url}
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link 
              to="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

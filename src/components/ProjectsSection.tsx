
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Project card type
type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
};

// Sample projects data
const projects: Project[] = [
  {
    id: 1,
    title: "Immersive 3D Product Viewer",
    description: "Interactive 3D product visualization with advanced lighting and animation effects.",
    category: "Three.js / WebGL",
    imageSrc: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "E-Commerce Animation Suite",
    description: "Smooth micro-interactions and page transitions for a premium shopping experience.",
    category: "GSAP / React",
    imageSrc: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Interactive Data Visualization",
    description: "Dynamic, animated data charts and graphs with user interaction capabilities.",
    category: "D3.js / SVG Animation",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Portfolio Website Template",
    description: "Elegant, animated portfolio design with scroll-based reveals and transitions.",
    category: "CSS Animation / React",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
  }
];

const ProjectsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  // Animation variants for section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  // Animation variants for projects
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore a selection of my most recent work showcasing advanced animations
            and interactive experiences.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover-lift hover-glow"
            >
              <div className="image-card aspect-video overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mb-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                
                <div className="mt-6 flex items-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    View Project
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="apple-button bg-white border border-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

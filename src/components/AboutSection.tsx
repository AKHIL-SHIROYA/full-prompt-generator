
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  // Skills data
  const skills = [
    { name: "Three.js / WebGL", value: 90 },
    { name: "GSAP Animations", value: 85 },
    { name: "React Development", value: 95 },
    { name: "UI/UX Design", value: 80 },
    { name: "CSS Animations", value: 88 }
  ];

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
          {/* About content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-6 py-2 bg-red-600 text-white font-bold rounded-lg mb-4"
            >
              INSTRUCTIONS
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Creating visually appealing websites with modern animations
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-gray-600 dark:text-gray-300"
            >
              <ul className="task-checklist space-y-4">
                <li>
                  <p className="font-medium">
                    Create a personal portfolio website using modern CSS animations and libraries
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Implement advanced animations using GSAP and Three.js
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Design a visually appealing interface with smooth transitions
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Ensure responsive design across all devices
                  </p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-button bg-red-600 text-white"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Skills visualization */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="code-block bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Animation Skills
            </motion.h3>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (index * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-4 bg-gray-800 text-gray-200 rounded-lg font-mono text-sm code-block"
            >
              <pre>{`
// Animation example
gsap.to(element, {
  duration: 1,
  x: 100,
  y: 50,
  rotation: 360,
  ease: "power2.inOut",
  stagger: 0.1
});
              `}</pre>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

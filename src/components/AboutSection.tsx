
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
    { name: "3D Animation", value: 90 },
    { name: "Interactive Design", value: 85 },
    { name: "React Development", value: 95 },
    { name: "UI/UX Design", value: 80 },
    { name: "WebGL & Three.js", value: 75 }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900">
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
              className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Creating seamless digital experiences with advanced animations
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="space-y-4 text-gray-600 dark:text-gray-300"
            >
              <p>
                I'm a front-end developer and animation specialist focused on creating 
                immersive, interactive experiences that push the boundaries of what's 
                possible on the web.
              </p>
              <p>
                With expertise in modern animation libraries and frameworks, I build 
                websites and applications that not only look beautiful but feel alive 
                through thoughtful motion design and micro-interactions.
              </p>
              <p>
                My approach combines technical precision with creative vision to deliver 
                projects that engage users and elevate brands through movement and interaction.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="apple-button bg-black text-white dark:bg-white dark:text-black"
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
            className="glass dark:glass-dark rounded-3xl p-8 shadow-lg"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold mb-6"
            >
              Skills & Expertise
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
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

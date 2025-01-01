import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    'Systems Engineer',
    'Advanced Machine Learning Engineer',
    'Data Analyst',
    'Full Stack Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to('.animate-role', {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: 'power2.inOut',
      delay: 0.5,
    });
  }, [currentRoleIndex]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-white py-32 px-6"
    >
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-12 md:mb-0">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-4xl md:text-6xl font-bold text-primary-text mb-4"
            >
              Ratan Lal Bunkar
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-3xl text-secondary-text mb-4 animate-role opacity-0"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base md:text-lg mb-8 text-secondary-text"
            >
              I am a Systems Engineer with a proven track record in medical device development, advanced machine learning, and scalable web solutions. My focus is on delivering patient-centric, sustainable, and innovative technologies.
            </motion.p>
            <div className="flex justify-center md:justify-start">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#33E1FF', color: '#121212' }}
                whileTap={{ scale: 0.95 }}
                className="bg-electric-blue text-primary-dark font-bold py-3 px-6 rounded-md mr-4"
              >
                Explore My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#33E1FF', color: '#33E1FF' }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-electric-blue text-electric-blue font-bold py-3 px-6 rounded-md"
              >
                Download Resume
              </motion.button>
            </div>
          </div>
          <div className="md:ml-12">
            {/* Placeholder for professional photo or 3D avatar */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
              className="w-64 h-64 bg-gray-300 rounded-full overflow-hidden"
            >
              {/* Replace this with an actual image or 3D model */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

import { motion } from 'framer-motion';

const About = () => {
  const primarySkills = [
    'Requirement Gathering',
    'Systems Design',
    'Regulatory Compliance',
    'MBSE and FMEA',
    'Test Specification Development',
  ];

  const secondarySkills = [
    'Generative AI',
    'Natural Language Processing',
    'Web Development',
    'Data Visualization',
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 px-6 relative"
      style={{ background: 'linear-gradient(to bottom, #121212, #1E1E1E)' }}
    >
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-bold text-primary-text mb-4 text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
            className="inline-block"
          >
            About Me
          </motion.span>
        </motion.h2>
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
            className="text-secondary-text mb-6 mx-auto md:w-3/4"
          >
            Hello, I’m Ratanlal Bunkar, a Systems Engineer dedicated to transforming ideas into reality through precision engineering, regulatory compliance, and cutting-edge technology. My mission is to deliver innovative, user-centric, and sustainable solutions for complex challenges. Beyond engineering, I harness the power of machine learning, data analysis, and web development to drive progress in healthcare and technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
            className="mt-8"
          >
            <p className="text-xl font-bold text-primary-text mb-4">
              Blending precision engineering with cutting-edge technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-bold text-primary-text mb-2">Primary Expertise</h4>
                <ul className="flex flex-wrap justify-center gap-4">
                  {primarySkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="bg-gradient-to-r from-electric-blue to-neon-purple text-white px-6 py-3 rounded-lg shadow-lg w-48 text-center"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-text mb-2">Secondary Expertise</h4>
                <ul className="flex flex-wrap justify-center gap-4">
                  {secondarySkills.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: 'easeOut' }}
                      whileHover={{ scale: 1.1, rotate: -3 }}
                      className="bg-gradient-to-r from-teal-green to-magenta-pink text-white px-6 py-3 rounded-lg shadow-lg w-48 text-center"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Interactive Background Animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
            className="w-32 h-32 border-4 border-dashed border-electric-blue rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

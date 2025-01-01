import { motion } from 'framer-motion';
import { FaCheckCircle, FaCog, FaBrain, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const WhatIDo = () => {
  const primarySkills = [
    {
      title: 'Requirement Gathering',
      description: 'Proficient in collaborating with cross-functional teams to define precise system and device requirements that align with user needs and regulatory standards.',
      icon: <FaCheckCircle className="text-electric-blue text-2xl mb-2" />,
    },
    {
      title: 'Systems Design',
      description: 'Comprehensive knowledge in designing scalable, maintainable systems. My work ensures seamless integration and compatibility between system components.',
      icon: <FaCog className="text-electric-blue text-2xl mb-2" />,
    },
    {
      title: 'Risk Management',
      description: 'Experienced in identifying, assessing, and mitigating risks using Failure Mode and Effects Analysis (FMEA).',
      icon: <FaChartLine className="text-electric-blue text-2xl mb-2" />,
    },
    {
      title: 'Regulatory Compliance (ISO 13485)',
      description: 'In-depth understanding of medical device standards and global regulatory requirements, ensuring that all projects adhere to the highest industry benchmarks.',
      icon: <FaCheckCircle className="text-electric-blue text-2xl mb-2" />,
    },
    {
      title: 'MBSE and FMEA',
      description: 'Skilled in using Model-Based Systems Engineering (MBSE) methodologies and tools to manage complex engineering projects efficiently.',
      icon: <FaCog className="text-electric-blue text-2xl mb-2" />,
    },
    {
      title: 'Test Specification Development',
      description: 'Expert in creating detailed test protocols and developing custom jigs to validate device functionality, reliability, and compliance.',
      icon: <FaCheckCircle className="text-electric-blue text-2xl mb-2" />,
    },
  ];

  const secondarySkills = [
    {
      title: 'Generative AI',
      description: 'Developed generative AI models (GANs) for synthetic data generation, medical imaging enhancement, and creative AI applications.',
      icon: <FaBrain className="text-teal-green text-2xl mb-2" />,
    },
    {
      title: 'NLP',
      description: 'Leveraged transformer architectures (e.g., BERT, GPT) for advanced tasks such as text generation, language translation, and sentiment analysis.',
      icon: <FaBrain className="text-teal-green text-2xl mb-2" />,
    },
    {
      title: 'Web Development',
      description: 'Built dynamic, scalable web applications using Next.js, React.js, and Tailwind CSS. Focused on responsive design and performance optimization.',
      icon: <FaLaptopCode className="text-teal-green text-2xl mb-2" />,
    },
    {
      title: 'Data Visualization',
      description: 'Proficient in data preprocessing, statistical modeling, and creating actionable insights using tools like Python, Matplotlib, Seaborn, and Tableau.',
      icon: <FaChartLine className="text-teal-green text-2xl mb-2" />,
    },
  ];

  const technicalSkills = [
    { name: 'Systems Engineering', proficiency: 95 },
    { name: 'Regulatory Compliance', proficiency: 90 },
    { name: 'Machine Learning', proficiency: 85 },
    { name: 'Data Analysis', proficiency: 80 },
    { name: 'Web Development', proficiency: 75 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-16 px-6 relative"
      style={{ background: 'linear-gradient(to bottom, #1E1E1E, #121212)' }}
    >
      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl font-bold text-primary-text mb-8 text-center"
        >
          <span className="animate-typewriter">What I Do</span>
        </motion.h2>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-text mb-4">Primary Expertise</h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-secondary-text mb-6 text-center"
          >
            As a Systems Engineer, I specialize in optimizing workflows, designing scalable systems, and ensuring compliance with global standards. My focus lies in delivering reliable and innovative solutions that enhance efficiency and user experience.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primarySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-section-dark rounded-lg shadow-md flex flex-col items-center justify-between"
              >
                {skill.icon}
                <h4 className="font-bold text-primary-text mb-2 text-center">{skill.title}</h4>
                <p className="text-secondary-text text-center">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary-text mb-4">Secondary Expertise</h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="text-secondary-text mb-6 text-center"
          >
            Complementing my engineering expertise, I bring advanced capabilities in machine learning, data visualization, and web development. These skills empower me to deliver data-driven insights and create innovative solutions that bridge traditional systems and modern technology.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondarySkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-section-dark rounded-lg shadow-md flex flex-col items-center justify-between"
              >
                {skill.icon}
                <h4 className="font-bold text-primary-text mb-2 text-center">{skill.title}</h4>
                <p className="text-secondary-text text-center">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary-text mb-4 text-center">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ scale: 1.1 }}
                className="w-48 p-4 bg-section-dark rounded-lg shadow-md"
              >
                <div className="relative pt-1">
                  <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-400">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                      style={{ width: `${skill.proficiency}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-electric-blue"
                    ></motion.div>
                  </div>
                  <div className="text-center text-secondary-text">{skill.proficiency}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Background Enhancements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
            className="w-48 h-48 border-2 border-dashed border-electric-blue rounded-full"
          ></motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhatIDo;

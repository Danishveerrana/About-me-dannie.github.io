import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950 text-white p-6">
      <motion.header
        initial="hidden"
        animate="visible"
        custom={1}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-blue-400 mb-3">Hi, I'm Dannie</h1>
        <p className="text-xl text-slate-300">Creative Coder | UI Designer | Explorer</p>
      </motion.header>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.section
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">About Me</h2>
          <p className="text-slate-300 leading-relaxed">
            I build things that live on the internet. I'm passionate about front-end design, interactive UI/UX, and smart development practices.
          </p>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeInUp}
          className="bg-white/5 backdrop-blur rounded-2xl p-8 hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-300">Skills</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>React.js, Tailwind CSS, Vite</li>
            <li>Python, Flask, Firebase</li>
            <li>Figma, GitHub, REST APIs</li>
          </ul>
        </motion.section>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        custom={4}
        variants={fadeInUp}
        className="text-center mt-16"
      >
        <p className="text-slate-400 mb-4 text-lg">Let's connect and create something amazing!</p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-400"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
          <a href="mailto:example@example.com" className="hover:text-pink-400"><FaEnvelope /></a>
        </div>
      </motion.div>
    </div>
  );
};

export default App;

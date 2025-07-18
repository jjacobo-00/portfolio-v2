import React from 'react';
import profile from '../assets/images/jjacobo-1.webp';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative font-mono min-h-[calc(100vh-64px)] flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-6 md:px-16 py-10"
    >
      {/* Left content */}
      <motion.div
        className="w-full md:w-2/3 md:pr-6 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-lg sm:text-xl md:text-2xl mb-2">Hi, my name is</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1261A0] mb-4">
          Jefferson Jacobo
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl flex items-center justify-center md:justify-start gap-2 mb-6">
          <span
            id="typewritter"
            className="bg-[linear-gradient(to_right,_black_0%,_#1261A0_70%,_#1261A0_100%)] bg-clip-text text-transparent"
          >
            <Typewriter
              words={[
                'A full-stack developer.',
                'Growth-Oriented Developer.',
                'Minimalist Coder.',
                'Code with Passion.',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h3>

        <p className="text-sm sm:text-base mb-4 leading-relaxed">
          I'm a Full-Stack Developer based in the Philippines. I have developed
          many types of websites and software — from mobile apps to booking
          systems to eCommerce platforms.
        </p>
        <p className="text-sm sm:text-base leading-relaxed">
          I have experience maintaining systems, building APIs, integrating
          features, and turning ideas into functional apps. I’ve worked with
          desktop (.NET/C#), mobile (Angular), and web (CodeIgniter 4)
          applications — and I’m always eager to learn new technologies to build
          scalable, modern solutions.
        </p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="px-5 py-2 rounded-lg bg-[#1261A0] text-white hover:bg-[#0e4d80] transform transition-transform duration-200 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg border border-[#1261A0] text-[#1261A0] hover:bg-gray-100 dark:hover:bg-white hover:text-black dark:hover:text-black inline-flex items-center gap-2 transform transition-transform duration-200 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
          <a
            onClick={() =>
              (window.location.href = 'mailto:jacobojhay13@gmail.com')
            }
            className="px-5 py-2 rounded-lg border bg-transparent border-gray-400 hover:bg-gray-100 dark:hover:bg-white hover:text-black dark:hover:text-black transform transition-transform duration-200 hover:scale-105"
          >
            Say Hello
          </a>
        </motion.div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="w-full max-w-[240px] sm:max-w-[280px] md:w-1/4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <img
          src={profile}
          alt="Jefferson Jacobo"
          className="rounded-xl shadow-lg object-cover w-full h-auto"
        />
      </motion.div>

      {/* Scroll-down indicator */}
      <a
        href="#experience"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="hidden sm:block w-6 h-6 animate-bounce text-[#1261A0] cursor-pointer" />
      </a>
    </section>
  );
};

export default About;

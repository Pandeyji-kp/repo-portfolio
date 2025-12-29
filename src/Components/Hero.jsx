import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left">
        
        {/* Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1 text-sm rounded-full border border-blue-500/40 text-blue-400"
        >
          Software Developer @ Arleven Studios
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Karan Pandey
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-lg text-gray-300 max-w-xl"
        >
          I’m a <span className="text-white font-semibold">Software Developer</span>{" "}
          currently working at <span className="text-blue-400">Arleven Studios</span>,
          specializing in building secure, scalable back-end systems, REST APIs,
          and real-world production applications.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="/cv"
            className="px-7 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            View Resume
          </a>

          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-2xl bg-blue-500/30"></div>
          <img
            src={profileImg}
            alt="Karan Pandey"
            className="relative w-52 sm:w-60 md:w-72 rounded-full object-cover border-4 border-blue-500/30 shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

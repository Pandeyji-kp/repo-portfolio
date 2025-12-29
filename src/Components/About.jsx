import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-800 text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-10"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="space-y-6 text-lg leading-relaxed text-gray-300"
        >
          <p>
            Hi, I’m <span className="text-white font-semibold">Karan Pandey</span>,
            a <span className="text-blue-400 font-semibold">Software Developer</span>{" "}
            currently working at{" "}
            <span className="text-blue-400 font-semibold">Arleven Studios</span>.
            I specialize in building reliable, scalable, and performance-driven
            web applications with a strong focus on backend architecture and
            clean system design.
          </p>

          <p>
            I have hands-on experience working with the{" "}
            <span className="text-white font-semibold">MERN stack</span>, where I
            build REST APIs, authentication systems, real-time features, and
            modern front-end interfaces using React and Tailwind CSS. I enjoy
            solving complex problems and transforming business requirements into
            efficient technical solutions.
          </p>

          <p>
            Alongside my development career, I am pursuing a{" "}
            <span className="text-white font-semibold">B.Com from IGNOU</span>,
            which gives me a strong understanding of business logic, workflows,
            and real-world use cases. This combination helps me think beyond just
            code and build products that actually create value.
          </p>

          <p>
            I’m continuously learning new technologies, improving system
            performance, and writing clean, maintainable code. My goal is to
            grow as a full-stack engineer who can design, build, and scale
            production-ready applications from scratch.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500">Backend</h3>
            <p className="mt-2 text-gray-400">
              Node.js, Express, MongoDB, Firebase, API Design
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500">Frontend</h3>
            <p className="mt-2 text-gray-400">
              React, Tailwind CSS, Animations, Responsive UI
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500">Mindset</h3>
            <p className="mt-2 text-gray-400">
              Clean Code, Scalability, Performance, Business Value
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

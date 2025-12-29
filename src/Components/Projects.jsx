import { motion } from "framer-motion";

const projects = [
  {
    title: "SabjiKing – Online Vegetable Store",
    desc: "Production-ready e-commerce platform for ordering fresh vegetables with clean UI and fast performance.",
    link: "https://sabjiking.in/vegetables",
    image: "public/sabjiking.webp",
  },
  {
    title: "Rewrite AI – Writing Keyboard (iOS)",
    desc: "AI-powered iOS writing keyboard app designed to rewrite and improve text in real time.",
    link: "https://apps.apple.com/in/app/rewrite-ai-writing-keyboard/id6737822095",
    image: "public/WhatsApp Image 2025-12-25 at 10.50.13 AM.jpeg",
  },
  {
    title: "IdeaTown Investments",
    desc: "Corporate investment website built with modern UI, responsiveness, and performance optimization.",
    link: "https://www.ideatowninvestments.com/",
    image: "public/Screenshot 2025-12-25 105402.png",
  },
  {
    title: "GTA San Andreas Cheat Codes Portal",
    desc: "High-traffic SEO-focused website providing categorized cheat codes for PC, PlayStation, Android & Xbox.",
    link: "https://www.gtasanandreascheatcodes.com/gta-san-andreas-cheats-for-pc-playstation-android-microsoft-console",
    image: "public/poster1.jpg",
  },
  {
    title: "E-Commerce Website",
    desc: "Full-featured React & Firebase e-commerce app with authentication and real-time database.",
    link: "https://ecommerce-web-k7qc.vercel.app",
    image: "public/Screenshot 2025-12-25 110115.png",
  },
  {
    title: "Quiz Application",
    desc: "Interactive quiz app with dynamic questions and scoring logic.",
    link: "https://github.com/Pandeyji-kp/Quiz-App",
    image: "https://raw.githubusercontent.com/Pandeyji-kp/Quiz-App/main/public/preview.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
            >
              {/* Image */}
              <div className="h-44 bg-black overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {proj.desc}
                </p>

                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

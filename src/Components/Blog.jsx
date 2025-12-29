import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Getting Started with React",
    date: "April 2025",
    desc: "A beginner-friendly guide to understanding React fundamentals, components, and project structure.",
    tags: ["React", "Frontend"],
    link: "/blog/getting-started-with-react",
    image:
      "public/WhatsApp Image 2025-12-25 at 11.17.39 AM.jpeg",
  },
  {
    title: "How I Build Scalable Backend APIs",
    date: "May 2025",
    desc: "My real-world approach to designing scalable APIs using Node.js, Express, and MongoDB.",
    tags: ["Backend", "Node.js"],
    link: "/blog/scalable-backend-apis",
    image:
      "public/WhatsApp Image 2025-12-25 at 11.17.59 AM.jpeg",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center mb-14"
        >
          Blog & <span className="text-blue-500">Articles</span>
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
            >
              {/* Cover Image */}
              <div className="h-48 bg-black overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <p className="text-sm text-gray-400">{post.date}</p>

                <h3 className="mt-2 text-xl font-semibold">
                  {post.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {post.desc}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={post.link}
                  className="inline-block mt-5 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Read Article →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 mt-12">
          More articles coming soon 🚀
        </p>
      </div>
    </section>
  );
};

export default Blog;

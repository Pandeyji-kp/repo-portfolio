import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-4"
        >
          Let’s <span className="text-blue-500">Connect</span>
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-14">
          Have a project idea, a question, or just want to say hello?
          I’m always open to discussing new opportunities and collaborations.
        </p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl max-w-3xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-8 text-left">

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:karanpandey1727@gmail.com"
                  className="text-lg font-semibold hover:text-blue-400 transition"
                >
                  karanpandey1727@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a
                  href="tel:7412871727"
                  className="text-lg font-semibold hover:text-blue-400 transition"
                >
                  +91 74128 71727
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8"></div>

          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/karan-pandey-kp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin className="text-blue-400" />
            </a>

            <a
              href="https://github.com/Pandeyji-kp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Github className="text-blue-400" />
            </a>

            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Twitter className="text-blue-400" />
            </a>
          </div>

          {/* CTA */}
          <a
            href="mailto:karanpandey1727@gmail.com"
            className="inline-block mt-10 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

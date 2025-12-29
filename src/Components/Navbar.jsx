import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Blog", id: "blog" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-white/20 dark:border-white/10 rounded-2xl px-6 py-3 shadow-xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.h1
            className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Karan.dev
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative font-medium transition ${
                  active === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.name}
                {active === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-blue-500 rounded"
                  />
                )}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 backdrop-blur-xl bg-white/80 dark:bg-black/70 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold hover:text-blue-500 transition"
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={() => {
                  setDark(!dark);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded-lg"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                Toggle Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = ({ theme }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center gap-3"
    >
      <p
        className={`text-sm ${
          theme === "light" ? "text-black/70" : "text-white/70"
        }`}
      >
        Let’s build something awesome together.
      </p>

      {/* <button
        className="px-5 py-2 rounded-full text-sm font-medium 
          bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:scale-105 transition"
      >
        Get in Touch
      </button> */}

      <Link
        to="/contact"
        className="inline-flex px-5 py-2 rounded-full text-sm font-medium bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:scale-105 transition"
      >
        Get in Touch
      </Link>
    </motion.section>
  );
};

export default CTA;

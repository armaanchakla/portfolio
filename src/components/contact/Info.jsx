import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolioData } from "../../configs/data";

const Info = ({ theme }) => {
  const ContactInfo = portfolioData.contact;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`p-4 sm:p-5 md:p-6 rounded-xl border backdrop-blur-md ${
          theme === "light"
            ? "bg-white/10 border-black/10"
            : "bg-white/5 border-white/10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3">Get in Touch 👋</h2>

        <p
          className={`text-sm mb-6 ${
            theme === "light" ? "text-black/60" : "text-white/60"
          }`}
        >
          I’m always open to discussing new projects, ideas or opportunities.
          Drop a message and I’ll reply soon.
        </p>

        <div className="flex flex-col gap-2 sm:gap-3">
          <a
            href={ContactInfo.email}
            className="flex items-center gap-2 text-xs sm:text-sm hover:underline"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href={ContactInfo.github}
            target="_blank"
            className="flex items-center gap-2 text-xs sm:text-sm hover:underline"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href={ContactInfo.linkedin}
            target="_blank"
            className="flex items-center gap-2 text-xs sm:text-sm hover:underline"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Info;

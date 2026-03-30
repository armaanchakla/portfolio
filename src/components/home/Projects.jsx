import { motion } from "framer-motion";
import { portfolioData } from "../../configs/data";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = ({ theme, isHome }) => {
  const [expanded, setExpanded] = useState({});

  const ProjectInfo = portfolioData.projects;

  const ProjectList = [...ProjectInfo].sort((a, b) => a.order - b.order);
  const displayedProjects = isHome ? ProjectList.slice(0, 3) : ProjectList;
  const charLenght = 80;

  const toggleReadMore = (id) => {
    setExpanded((prev) => (prev[id] ? {} : { [id]: true }));
  };

  return (
    <section className="flex flex-col gap-1 sm:gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl font-semibold">
          {isHome ? "Featured Projects" : "My Projects"}
        </h2>

        {isHome && (
          <motion.div
            className="hidden sm:block" // hide on mobile
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/project"
              className={`inline-flex items-center justify-center px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium border rounded-full transition hover:scale-105 ${
                theme === "light"
                  ? "border-black/20 text-black/80 hover:bg-black/5"
                  : "border-white/20 text-white/80 hover:bg-white/10"
              }`}
            >
              View All
              <FaArrowRight className="ml-1 sm:ml-2 text-xs sm:text-sm" />
            </Link>
          </motion.div>
        )}
      </div>

      {/* Project Box */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 relative">
        {displayedProjects.map((project, i) => (
          <motion.div
            key={project.id}
            layout="position"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.3, delay: i * 0.1 },
              layout: { duration: 0.25, ease: "easeInOut" },
            }}
            className={`break-inside-avoid mb-4 p-4 rounded-xl border backdrop-blur-md transition relative z-10 ${
              expanded[project.id] ? "z-50" : "z-10"
            } hover:scale-[1.02] ${
              theme === "light"
                ? "bg-white/10 border-black/10"
                : "bg-white/5 border-white/10"
            }`}
          >
            <h3 className="font-medium mb-1">{project.title}</h3>

            {/* DESCRIPTION */}
            <p
              className={`text-xs ${
                theme === "light" ? "text-black/60" : "text-white/60"
              }`}
            >
              {expanded[project.id]
                ? project.description
                : `${project.description.slice(0, charLenght)}${
                    project.description.length > charLenght ? "..." : ""
                  }`}
            </p>

            {/* READ MORE BUTTON */}
            {!isHome && project.description.length > charLenght && (
              <button
                onClick={() => toggleReadMore(project.id)}
                className={`text-[10px] mt-2 font-medium ${
                  theme === "light"
                    ? "text-black-600 hover:underline"
                    : "text-purple-400 hover:underline"
                }`}
              >
                {expanded[project.id] ? "Show Less" : "Read More"}
              </button>
            )}

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.tech.length !== 0 &&
                project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-[10px] px-2 py-1 rounded-full bg-linear-to-r font-bold from-yellow-500/20 via-purple-500/20 to-red-500/20"
                  >
                    {tech}
                  </span>
                ))}
            </div>

            {/* EXTERNAL LINKS */}
            <div className="flex gap-2 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-[11px] px-3 py-1 rounded-full border transition hover:scale-105 ${
                    theme === "light"
                      ? "border-black/20 text-black/80 hover:bg-black/5"
                      : "border-white/20 text-white/80 hover:bg-white/10"
                  }`}
                >
                  <FaGithub size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] px-3 py-1 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md hover:scale-105 transition"
                >
                  <FaExternalLinkAlt className="mt-0.5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All for Mobile Display */}
      {isHome && (
        <div className="flex justify-center sm:hidden">
          <Link
            to="/project"
            className={`inline-flex items-center justify-center px-3 py-1.5 text-xs font-medium border rounded-full transition hover:scale-105 ${
              theme === "light"
                ? "border-black/20 text-black/80 hover:bg-black/5"
                : "border-white/20 text-white/80 hover:bg-white/10"
            }`}
          >
            View All
            <FaArrowRight className="ml-1 text-xs" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;

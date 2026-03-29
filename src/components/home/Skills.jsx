import { motion } from "framer-motion";
import { portfolioData } from "../../configs/data";

const Skills = ({ theme }) => {
  const SkillInfo = portfolioData.skills;

  const getSkillColor = (skill) => {
    const map = {
      React: "from-cyan-400 via-blue-500 to-indigo-500",
      Node: "from-green-400 via-emerald-500 to-teal-500",
      MongoDB: "from-green-500 via-lime-500 to-emerald-600",
      Tailwind: "from-sky-400 via-cyan-500 to-blue-500",
      Default: "from-pink-400 via-purple-500 to-indigo-500",
    };

    return map[skill] || map.Default;
  };

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-lg md:text-xl font-semibold">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {SkillInfo.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`text-sm px-3 py-1 rounded-full shadow-md hover:scale-105 transition bg-linear-to-r ${getSkillColor(skill)} ${
              theme === "light"
                ? "text-black font-bold [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]"
                : "text-white font-bold [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]"
            }`}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Skills;

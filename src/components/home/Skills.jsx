import { motion } from "framer-motion";
import { portfolioData } from "../../configs/data";

const Skills = ({ theme }) => {
  const SkillInfo = portfolioData.skills;

  const gradients = [
    "from-cyan-400 via-blue-500 to-indigo-500",
    "from-green-400 via-emerald-500 to-teal-500",
    "from-pink-400 via-rose-500 to-red-500",
    "from-purple-400 via-fuchsia-500 to-pink-500",
    "from-yellow-400 via-amber-500 to-orange-500",
    "from-sky-400 via-cyan-500 to-blue-500",
    "from-lime-400 via-green-500 to-emerald-600",
    "from-indigo-400 via-blue-500 to-purple-500",
    "from-red-400 via-rose-500 to-pink-500",
    "from-teal-400 via-cyan-500 to-sky-500",
    "from-orange-400 via-red-500 to-pink-500",
    "from-fuchsia-400 via-purple-500 to-indigo-500",
    "from-emerald-400 via-teal-500 to-cyan-500",
    "from-amber-400 via-orange-500 to-red-500",
    "from-blue-400 via-indigo-500 to-purple-600",
    "from-rose-400 via-pink-500 to-fuchsia-500",
    "from-green-300 via-lime-400 to-green-500",
    "from-violet-400 via-purple-500 to-fuchsia-500",
    "from-cyan-300 via-sky-400 to-blue-500",
    "from-yellow-300 via-amber-400 to-orange-500",
  ];

  let lastIndex = -1;

  const getSkillColor = () => {
    let index;
    do {
      index = Math.floor(Math.random() * gradients.length);
    } while (index === lastIndex);

    lastIndex = index;
    return gradients[index];
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
            className={`text-xs sm:text-sm md:text-sm px-2 sm:px-3 md:px-3 py-0.5 sm:py-1 md:py-1 rounded-full shadow-md hover:scale-105 transition bg-linear-to-r ${getSkillColor()} ${
              theme === "light"
                ? "text-black font-semibold [text-shadow:-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white,1px_1px_0_white]"
                : "text-white font-semibold [text-shadow:-1px_-1px_0_black,1px_-1px_0_black,-1px_1px_0_black,1px_1px_0_black]"
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

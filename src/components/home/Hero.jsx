import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { portfolioData } from "../../configs/data";

const Hero = ({ theme }) => {
  const HeroInfo = portfolioData.Home;

  return (
    <section className="flex flex-col justify-center items-center text-center gap-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
      >
        Hi, I'm{" "}
        <span className="bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          {HeroInfo.name}
        </span>
      </motion.h1>

      <p
        className={`max-w-md md:max-w-xl text-sm md:text-base ${
          theme === "light" ? "text-black/70" : "text-white/70"
        }`}
      >
        {HeroInfo.description}
      </p>

      {/* TYPEWRITER */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`max-w-md md:max-w-xl text-sm md:text-base ${
          theme === "light" ? "text-black/70" : "text-white/70"
        }`}
      >
        <Typewriter
          words={[
            `${HeroInfo.punchLine1}`,
            `${HeroInfo.punchLine2}`,
            `${HeroInfo.punchLine3}`,
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex gap-3 mt-4"
      >
        <a
          download="Armaan-Resume.pdf"
          href="/files/Armaan-Resume.pdf"
          className="px-4 py-2 rounded-full text-sm font-medium 
            bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-md hover:scale-105 transition"
        >
          {HeroInfo.cta}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

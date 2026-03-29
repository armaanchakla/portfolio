import Hero from "../components/home/Hero.jsx";
import Projects from "../components/home/Projects.jsx";
import Skills from "../components/home/Skills.jsx";
import CTA from "../components/home/CTA.jsx";

const HomePage = ({ theme }) => {
  return (
    <>
      {/* top bottom margin */}
      <div className="mt-10 md:mt-14 lg:mt-16 mb-10">
        <div className="w-full min-h-full flex flex-col gap-10 md:gap-16">
          <Hero theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} isHome={true} />
          <CTA theme={theme} />
        </div>
      </div>
    </>
  );
};

export default HomePage;

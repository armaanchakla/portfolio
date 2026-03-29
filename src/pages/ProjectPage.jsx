import Projects from "../components/home/Projects";

const ProjectPage = ({ theme }) => {
  return (
    <>
      {/* top bottom margin */}
      <div className="mt-10 md:mt-14 lg:mt-16 mb-10">
        <Projects theme={theme} />
      </div>
    </>
  );
};

export default ProjectPage;

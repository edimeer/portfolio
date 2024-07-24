import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";

const RightSection = () => {
  return (
    <div className="w-full ml-auto pr-10 lg:w-1/2 lg:pr-36">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  )
}
export default RightSection

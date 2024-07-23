import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";

const RightSection = () => {
  return (
    <div className="w-full lg:w-1/2 ml-auto pr-36">
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </div>
  )
}
export default RightSection

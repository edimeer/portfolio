import profile from "../assets/images/profile.png";
import resume from "../assets/files/edi-resume.pdf";

const ProfileSection = () => {
  return (
    <section>
      <div className="flex flex-col mt-10 lg:flex-row">
        <img className="hidden lg:flex lg:w-1/2" src={profile} alt="profile" />
        <div className="ml-2 flex flex-col justify-between lg:mt-10">
          <h4 className="text-3xl font-bold text-cOrange">Edi Edwardson Meer</h4>
          <h5 className="text-lg text-cMustard font-semibold italic">Software Engineer</h5>
          <p className="mt-4 mb-3 text-md text-justify text-gray-700">
            Specializing in <span className="text-cMustard font-semibold">Ruby on Rails</span> for backend development and <span className="text-cMustard font-semibold">Angular</span> and <span className="text-cMustard font-semibold">React</span> for frontend development, I create robust, scalable, and user-friendly web applications.
          </p>
          <a href={resume} download="edi-resume" target="_blank" className="text-cOrange text-sm rounded-full p-2 border border-cOrange hover:bg-cOrange hover:text-white inline-flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}
export default ProfileSection

import carelever from "../assets/images/carelever.jpg";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-10 pl-10 space-y-7">
      <div className="rounded-full bg-cOrange border w-2/3">
        <h2 className="text-1xl text-white p-1 pl-3 text-bold lg:text-2xl">Projects</h2>
      </div>
      <div className="block max-w border border-cMustard rounded-lg shadow">
        <img className="w-max rounded-lg" src={carelever} alt="profile" />
        <div className="p-6 space-y-2">
          <h5 className="text-lg font-bold text-gray-700">
            Carelever
          </h5>
          <p className="mb-3 font-normal text-gray-700">A cloud-based SaaS platform that makes it easier for you to manage your occupational health processes and health data.</p>
        </div>
      </div>
    </section>
  )
}
export default ProjectSection

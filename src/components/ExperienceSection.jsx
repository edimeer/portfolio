const ExperienceSection = () => {
  return (
    <section id="experiences" className="pl-10 space-y-7">
      <div className="rounded-full bg-cOrange border w-2/3">
        <h2 className="text-2xl text-white p-1 pl-3 text-bold">Experiences</h2>
      </div>
      <div className="block space-y-2 max-w p-6 border border-cMustard rounded-lg shadow">
        <h5 className="text-lg font-bold text-gray-700">
          You_Source Inc.
          <span className="ml-2 text-xs text-cOrange italic">2019 - 2024</span>
        </h5>
        <p className="text-cMustard text-sm italic">Full-Stack Software Engineer</p>
        <ul className="ml-4 space-y-2 marker:text-cMustard list-outside list-disc">
          <li className="font-md text-gray-700 text-justify">
            Develop and maintain backend systems using Ruby on Rails, including designing server-side logic and integrating RESTful APIs to support seamless frontend-backend communication.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Implement and maintain user interfaces using Angular, creating responsive and user-friendly experiences that meet client requirements and enhance user satisfaction.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Quickly address and fix urgent production issues to maintain the stability and reliability of the application, minimizing downtime and impact on users.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Oversee and execute deployments to the production environment, ensuring smooth and error-free releases by following best practices and thorough testing.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Conduct thorough code reviews on GitHub to ensure high code quality, security, and performance. Create and manage pull requests, facilitating constructive feedback and collaborative improvement.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Collaborate with teammates by offering help with their tasks when needed, promoting a supportive and cooperative team environment.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Provide guidance and support to junior developers and interns, sharing knowledge and best practices to help them grow their skills and confidence in their roles.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Actively monitor and resolve any blockers that interns and junior developers face, ensuring their progress and productivity are not hindered.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Facilitate daily scrum meetings each morning to discuss progress, identify roadblocks, and plan the day&apos;s work, fostering collaboration and clear communication within the team.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Prioritize and manage daily tasks by organizing Jira tickets, ensuring the team&apos;s focus aligns with project goals and deadlines.
          </li>
          <li className="font-md text-gray-700 text-justify">
            Engage directly with clients to clarify task requirements, gather feedback, and ensure their expectations are met, fostering strong client relationships and delivering high-quality results.
          </li>
        </ul>
      </div>
    </section>
  )
}
export default ExperienceSection

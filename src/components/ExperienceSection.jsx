const ExperienceSection = () => {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Experience</h2>
      <ol className="mt-8 relative border-s border-slate-200 dark:border-slate-800">
        {/* <!-- Item --> */}
        <li className="ms-6 pb-10">
          <span
            className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950"></span>
          <h3 className="font-semibold">Software Engineer · <span className="text-slate-500">Cloudstaff</span></h3>
          <p className="text-sm text-slate-500">2024 — Present</p>
          <p className="my-2">Working as part of a distributed team, I contribute to the development and maintenance of a full-featured property management platform serving agencies and tenants across Australia.</p>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
            <li>
              Delivered end-to-end features using <strong>Ruby on Rails</strong> and <strong>React</strong>,
              supporting complex business processes like payment workflows, and user roles.
              </li>
            <li>
              Collaborated with other engineers, customer service, and product managers to build scalable,
              testable, and maintainable solutions in a <strong>Scrum-based workflow</strong> using <strong>Jira</strong> and <strong>GitHub</strong>
            </li>
            <li>
              Wrote clean, performant code and implemented UI components using <strong>Tailwind CSS</strong>, improving usability across the app.
            </li>
            <li>
              Participated in code reviews, daily standups, sprint planning, and release cycles.
            </li>
          </ul>
        </li>
        <li className="ms-6 pb-10">
          <span
            className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950"></span>
          <h3 className="font-semibold">Software Engineer · <span className="text-slate-500">You_Source Inc.</span></h3>
          <p className="text-sm text-slate-500">2019 — 2024</p>
          <p className="my-2">Developed and maintained a pre-employment medical screening system that evaluates whether workers are medically fit to work. The application served thousands of users and required robust architecture to ensure data security and accuracy.</p>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
            <li>
              Built scalable services using <strong>Ruby on Rails</strong> with a <strong>microservice architecture</strong>,
              delivering core functionality such as health assessments, results evaluation, and report generation.
            </li>
            <li>
              Developed rich frontend interfaces using <strong>Angular</strong>, <strong>TypeScript</strong>, and <strong>Bootstrap</strong>,
              ensuring a responsive, accessible user experience for both admin and clinical users.
            </li>
            <li>
              Designed efficient database schemas using <strong>PostgreSQL</strong>,
              implemented API integrations, and wrote testable code following clean architecture principles.
            </li>
            <li>
              Deployed features via <strong>CircleCI</strong>, worked with <strong>AWS (EC2, ECS, S3, Cloudwatch)</strong>,
              used <strong>Docker</strong> for containerized environments, and followed best practices in CI/CD and version control.
            </li>
            <li>
              Mentored junior developers and interns — supported onboarding, gave regular code reviews,
              and shared domain knowledge to level up the team.
            </li>
            <li>
              Worked in a <strong>Scrum environment</strong>, collaborating daily with product managers, UI/UX, QA, and other developers.
            </li>
          </ul>
        </li>
      </ol>
    </section>
  )
}
export default ExperienceSection

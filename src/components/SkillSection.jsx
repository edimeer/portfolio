const SkillSection = () => {
  return (
    <section id="skills" className="border-y border-slate-900/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Skills & Tools</h2>
        <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">My current stack and what I enjoy working with.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Frontend</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Angular</li>
              <li className="tag">React</li>
              <li className="tag">HTML5</li>
              <li className="tag">CSS3</li>
              <li className="tag">Tailwind</li>
              <li className="tag">Bootstrap</li>
              <li className="tag">JavaScript (ES6+)</li>
              <li className="tag">TypeScript</li>
              <li className="tag">Vite</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Backend</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Ruby</li>
              <li className="tag">Ruby On Rails</li>
              <li className="tag">REST</li>
              <li className="tag">PostgreSQL</li>
              <li className="tag">Rspec</li>
              <li className="tag">Sidekiq</li>
              <li className="tag">ActiveRecord</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">DevOps & Infrastructure</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Heroku</li>
              <li className="tag">AWS</li>
              <li className="tag">Docker (basics)</li>
              <li className="tag">CI/CD (CircleCI)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Tools & Productivity</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Git</li>
              <li className="tag">Github</li>
              <li className="tag">Jira</li>
              <li className="tag">Postman</li>
              <li className="tag">Insomnia</li>
              <li className="tag">TablePlus</li>
              <li className="tag">Slack</li>
              <li className="tag">VSCode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SkillSection

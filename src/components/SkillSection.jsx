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
              <li className="tag">HTML5</li>
              <li className="tag">CSS3</li>
              <li className="tag">Tailwind</li>
              <li className="tag">JavaScript (ES202x)</li>
              <li className="tag">TypeScript</li>
              <li className="tag">React</li>
              <li className="tag">Next.js</li>
              <li className="tag">Vite</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Backend & DevOps</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Node.js</li>
              <li className="tag">Express</li>
              <li className="tag">REST</li>
              <li className="tag">GraphQL</li>
              <li className="tag">PostgreSQL</li>
              <li className="tag">Redis</li>
              <li className="tag">Docker</li>
              <li className="tag">CI/CD</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Testing & Quality</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Jest</li>
              <li className="tag">Testing Library</li>
              <li className="tag">Cypress</li>
              <li className="tag">Playwright</li>
              <li className="tag">ESLint</li>
              <li className="tag">Prettier</li>
              <li className="tag">Lighthouse</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <h3 className="font-semibold">Design</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm">
              <li className="tag">Figma</li>
              <li className="tag">Design Tokens</li>
              <li className="tag">Accessibility (WCAG)</li>
              <li className="tag">Motion</li>
              <li className="tag">Prototyping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SkillSection

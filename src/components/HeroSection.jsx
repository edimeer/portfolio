import resume from "../assets/files/edi-resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 to-transparent dark:from-brand-900/10"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6 animate-fade-up">
            <p
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-200">
              Available for full-time · Remote friendly
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Hi, I’m <span className="text-brand-600 dark:text-brand-400">Edi</span>. I build delightful, performant
              web experiences.
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-prose">
              Frontend-focused software engineer with a knack for design systems, accessible UI, and data-driven apps. I
              turn ideas into shippable products.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 font-semibold text-white shadow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950">
                View Projects
                <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#contact"
                className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">Contact
                Me</a>
              <a href={resume} download="edi-resume" target="_blank"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 font-semibold hover:underline">
                Download Résumé
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-2 text-slate-500">
              <a href="https://github.com/your" className="hover:text-slate-900 dark:hover:text-white" aria-label="GitHub">
                {/* <!-- GitHub icon --> */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.35.73-4.05-1.6-4.05-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.76.08-.75.08-.75 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1 .11-.8.43-1.32.78-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.44.38.83 1.12.83 2.26v3.35c0 .32.22.69.83.57A12 12 0 0012 .5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/your" className="hover:text-slate-900 dark:hover:text-white"
                aria-label="LinkedIn">
                {/* <!-- LinkedIn icon --> */}
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06c.53-1 1.82-2.2 3.75-2.2 4 0 4.74 2.6 4.74 6V24h-4v-6.7c0-1.6 0-3.7-2.2-3.7s-2.5 1.7-2.5 3.6V24H8z" />
                </svg>
              </a>
              <a href="mailto:edison.cmeer@gmail.com" className="hover:text-slate-900 dark:hover:text-white">edison.cmeer@gmail.com</a>
            </div>
          </div>
          <div className="relative">
            <div
              className="mx-auto h-64 w-64 overflow-hidden rounded-2xl ring-1 ring-slate-900/10 shadow-card dark:ring-white/10 md:h-80 md:w-80">
              <img src="https://picsum.photos/800?random=2" alt="Portrait of Edi Edwardson Meer"
                className="h-full w-full object-cover" />
            </div>
            <div
              className="pointer-events-none absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full bg-brand-200/50 blur-2xl dark:bg-brand-700/30">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection

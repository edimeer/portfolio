const TestimonialSection = () => {
  return (
    <section className="border-y border-slate-900/10 dark:border-white/10 bg-slate-50 dark:bg-slate-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What folks say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <figure className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <blockquote className="text-slate-700 dark:text-slate-300">“Delivers pixel-perfect UI and thinks in systems. A
              joy to collaborate with.”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">— Design Lead, TechCorp</figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <blockquote className="text-slate-700 dark:text-slate-300">“Turned our idea into a polished product in weeks.
              Performance is stellar.”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">— CTO, Startup X</figcaption>
          </figure>
          <figure className="rounded-2xl border border-slate-900/10 bg-white p-6 dark:border-white/10 dark:bg-slate-900">
            <blockquote className="text-slate-700 dark:text-slate-300">“Sets a high bar for frontend craft and DX.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">— Eng Manager, Acme Inc.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
export default TestimonialSection

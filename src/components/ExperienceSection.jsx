const ExperienceSection = () => {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Experience</h2>
      <ol className="mt-8 relative border-s border-slate-200 dark:border-slate-800">
        {/* <!-- Item --> */}
        <li className="ms-6 pb-10">
          <span
            className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950">1</span>
          <h3 className="font-semibold">Senior Frontend Engineer · <span className="text-slate-500">TechCorp</span></h3>
          <p className="text-sm text-slate-500">2023 — Present</p>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
            <li>Led migration to <strong>Next.js + App Router</strong>, improving TTFB by 40%.</li>
            <li>Built component library in <strong>React + Tailwind</strong> adopted across 3 squads.</li>
            <li>Owned performance budget, keeping Lighthouse PWA score ≥ 95.</li>
          </ul>
        </li>
        <li className="ms-6 pb-10">
          <span
            className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950">2</span>
          <h3 className="font-semibold">Frontend Engineer · <span className="text-slate-500">Acme Inc.</span></h3>
          <p className="text-sm text-slate-500">2020 — 2023</p>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
            <li>Shipped real-time analytics dashboards with websockets + D3.</li>
            <li>Introduced testing strategy with <strong>Playwright</strong> & <strong>RTL</strong>.</li>
            <li>Mentored juniors; ran monthly UI performance clinics.</li>
          </ul>
        </li>
        <li className="ms-6">
          <span
            className="absolute -start-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-white ring-8 ring-white dark:ring-slate-950">3</span>
          <h3 className="font-semibold">Freelance</h3>
          <p className="text-sm text-slate-500">2017 — 2020</p>
          <ul className="mt-2 list-disc space-y-1 ps-5 text-slate-700 dark:text-slate-300">
            <li>Built marketing sites & stores (Astro, Next, Shopify Hydrogen).</li>
            <li>Delivered accessibility remediations to WCAG AA.</li>
          </ul>
        </li>
      </ol>
    </section>
  )
}
export default ExperienceSection

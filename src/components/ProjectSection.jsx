import React, { useMemo, useState } from 'react';

const PROJECTS = [
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard Kit',
    tags: ['web','ui'],
    tech: ['React','Tailwind'],
    img: 'https://picsum.photos/600/400?random=11',
    live: '#',
    code: '#',
    blurb: 'Beautiful admin UI with charts, role-based access, and theming.',
  },
  {
    id: 'nova-ds',
    title: 'Design System “Nova”',
    tags: ['ui'],
    tech: ['Figma','Accessibility'],
    img: 'https://picsum.photos/600/400?random=12',
    caseStudy: '#',
    blurb: 'Token-based DS powering multiple web apps.',
  },
  {
    id: 'realtime-analytics',
    title: 'Realtime Analytics',
    tags: ['web','data'],
    tech: ['Next.js','D3'],
    img: 'https://picsum.photos/600/400?random=13',
    live: '#',
    code: '#',
    blurb: 'Socket-powered telemetry + custom visualizations.',
  },
  {
    id: 'landing-engine',
    title: 'Landing Page Engine',
    tags: ['web'],
    tech: ['Astro','SEO'],
    img: 'https://picsum.photos/600/400?random=14',
    live: '#',
    blurb: 'CMS-driven marketing sites with A/B testing.',
  },
  {
    id: 'feature-store',
    title: 'ML Feature Store UI',
    tags: ['data'],
    tech: ['Python','FastAPI'],
    img: 'https://picsum.photos/600/400?random=15',
    blurb: 'Manage and explore features across models.',
  },
  {
    id: 'headless-commerce',
    title: 'Headless Commerce',
    tags: ['web','ui'],
    tech: ['Vue','Stripe'],
    img: 'https://picsum.photos/600/400?random=16',
    blurb: 'Composable storefront with lightning-fast UX.',
  },
];

const FILTERS = ['all','web','ui','data'];

const ProjectSection = () => {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Selected Projects</h2>
          <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">A few things I’ve built recently.</p>
        </div>

        {/* Desktop filter buttons */}
        <div className="hidden sm:flex items-center gap-2">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-filter={f}
              className={[
                'rounded-md border px-3 py-1.5 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800',
                filter === f ? 'bg-slate-100 dark:bg-slate-800' : 'border-slate-300 dark:border-slate-700'
              ].join(' ')}
              aria-pressed={filter === f}
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <article
            key={p.id}
            className="group animate-fade-up rounded-2xl border border-slate-900/10 bg-white p-4 shadow-card transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
          >
            <a href={p.live || p.caseStudy || '#'} className="block overflow-hidden rounded-xl ring-1 ring-slate-900/10 dark:ring-white/10">
              <img src={p.img} alt={`${p.title} screenshot`} className="aspect-[16/10] w-full object-cover transition group-hover:scale-105" />
            </a>
            <div className="mt-4 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {p.tech.map(t => (
                  <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold">
                <a href={p.live || p.caseStudy || '#'} className="hover:underline">{p.title}</a>
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>
              <div className="flex items-center gap-4 pt-1 text-sm">
                {p.live && <a href={p.live} className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-300">Live <span aria-hidden>↗</span></a>}
                {p.code && <a href={p.code} className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-300">Code</a>}
                {p.caseStudy && <a href={p.caseStudy} className="inline-flex items-center gap-1 hover:text-brand-600 dark:hover:text-brand-300">Case Study</a>}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile select */}
      <div className="mt-8 sm:hidden">
        <label htmlFor="filterSelect" className="sr-only">Filter projects</label>
        <select
          id="filterSelect"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
        >
          {FILTERS.map(f => <option key={f} value={f}>{f[0].toUpperCase() + f.slice(1)}</option>)}
        </select>
      </div>
    </section>
  )
}
export default ProjectSection

const KeyMetricsSection = () => {
  return (
    <section className="border-y border-slate-900/10 dark:border-white/10 bg-grid">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <dl className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          <div className="space-y-1">
            <dt className="text-sm text-slate-500">Years Experience</dt>
            <dd className="text-3xl font-extrabold">6+</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-slate-500">Projects Shipped</dt>
            <dd className="text-3xl font-extrabold">30+</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-slate-500">Avg Lighthouse</dt>
            <dd className="text-3xl font-extrabold">98</dd>
          </div>
          <div className="space-y-1">
            <dt className="text-sm text-slate-500">Coffee Consumed</dt>
            <dd className="text-3xl font-extrabold">∞</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
export default KeyMetricsSection

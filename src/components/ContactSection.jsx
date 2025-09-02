const ContactSection = () => {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let’s build something</h2>
          <p className="mt-2 max-w-prose text-slate-600 dark:text-slate-300">Open to roles where I can create high-quality
            experiences.</p>
          <div className="mt-6 space-y-2 text-slate-600 dark:text-slate-300">
            <p>📍 Batangas · Remote/Hybrid</p>
            <p>✉️ <a
                className="underline decoration-dashed underline-offset-2 hover:text-brand-600 dark:hover:text-brand-300"
                href="mailto:edison.cmeer@gmail.com">edison.cmeer@gmail.com</a></p>
          </div>
        </div>

        <form id="contactForm"
          className="rounded-2xl border border-slate-900/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
          action="https://formspree.io/f/your-id" method="POST">
          <div className="grid gap-4">
            <div>
              <label for="name" className="mb-1 block text-sm font-medium">Name</label>
              <input id="name" name="name" required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
            </div>
            <div>
              <label for="email" className="mb-1 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
            </div>
            <div>
              <label for="message" className="mb-1 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="5" required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" required className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" />
                <span>Consent to being contacted</span>
              </label>
              <button
                className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-4 py-2 font-semibold text-white shadow hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                Send
                <svg className="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p id="formStatus" className="hidden text-sm"></p>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactSection

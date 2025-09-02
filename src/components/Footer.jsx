const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-900/10 dark:border-white/10">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">© <span id="year"> {year} </span> Edi Edwardson Meer. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#top" className="hover:text-brand-600 dark:hover:text-brand-300">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer

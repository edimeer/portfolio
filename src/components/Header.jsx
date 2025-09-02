import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider.jsx';
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-white/10 dark:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <img className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white" src={logo} alt="logo" />
            <span className="text-lg">Edi</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-brand-600 dark:hover:text-brand-300">Projects</a>
            <a href="#skills" className="hover:text-brand-600 dark:hover:text-brand-300">Skills</a>
            <a href="#experience" className="hover:text-brand-600 dark:hover:text-brand-300">Experience</a>
            <a href="#contact" className="hover:text-brand-600 dark:hover:text-brand-300">Contact</a>

            <button
              onClick={toggle}
              className="ml-2 inline-flex items-center rounded-md border border-slate-300 px-2.5 py-1.5 text-xs font-semibold shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen(o => !o)}
          >
            Menu
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobileMenu" className={`${open ? '' : 'hidden'} border-t border-slate-900/10 bg-white dark:border-white/10 dark:bg-slate-950 md:hidden`}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2 text-sm">
          <a href="#projects" className="py-2">Projects</a>
          <a href="#skills" className="py-2">Skills</a>
          <a href="#experience" className="py-2">Experience</a>
          <a href="#contact" className="py-2">Contact</a>
          <button
            onClick={toggle}
            className="mt-2 inline-flex justify-center rounded-md border border-slate-300 px-3 py-2 font-semibold hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
            aria-label="Toggle theme (mobile)"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}
export default Header

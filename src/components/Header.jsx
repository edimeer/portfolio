import { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeProvider.jsx";
import { PROFILE } from "../data/profile.js";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons.jsx";

const NAV = ["experience", "projects", "skills", "contact"];

// Highlights the nav link for the section currently in view: the last
// section whose top has passed 40% of the viewport height. At the very
// bottom of the page the last section wins, even if it is short.
function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}

const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md border border-line p-2 text-muted transition-colors hover:text-fg"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV);

  const linkClass = (id) =>
    `font-mono text-sm transition-colors hover:text-fg ${
      active === id ? "text-accent" : "text-muted"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="page flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="text-ok">{PROFILE.handle}</span>
          <span className="text-muted">:</span>
          <span className="text-syn-const">~</span>
          <span className="text-muted">$</span>
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" aria-hidden="true" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "true" : undefined}>
              {id}/
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md border border-line p-2 text-muted hover:text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="page grid py-2">
            {NAV.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`block py-3 ${linkClass(id)}`} onClick={() => setOpen(false)}>
                  <span className="text-accent">cd</span> {id}/
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

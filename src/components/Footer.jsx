import { PROFILE } from "../data/profile.js";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="page flex flex-col gap-3 py-8 font-mono text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        &copy; {new Date().getFullYear()} {PROFILE.name}
      </p>
      <a href="#top" className="link">
        cd ~ (back to top)
      </a>
    </div>
  </footer>
);

export default Footer;

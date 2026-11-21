// Small inline SVG icons. They inherit size and color from their className.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const GitHubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2c-3.35.73-4.05-1.6-4.05-1.6-.55-1.4-1.35-1.78-1.35-1.78-1.1-.76.08-.75.08-.75 1.22.08 1.86 1.25 1.86 1.25 1.08 1.86 2.84 1.32 3.53 1 .11-.8.43-1.32.78-1.62-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.64-5.48 5.94.44.38.83 1.12.83 2.26v3.35c0 .32.22.69.83.57A12 12 0 0012 .5z" />
  </svg>
);

export const LinkedInIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.06c.53-1 1.82-2.2 3.75-2.2 4 0 4.74 2.6 4.74 6V24h-4v-6.7c0-1.6 0-3.7-2.2-3.7s-2.5 1.7-2.5 3.6V24H8z" />
  </svg>
);

export const MailIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const DownloadIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} {...stroke}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "h-3.5 w-3.5" }) => (
  <svg className={className} {...stroke}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export const SunIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} {...stroke}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export const MoonIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} {...stroke}>
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </svg>
);

export const MenuIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} {...stroke}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} {...stroke}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

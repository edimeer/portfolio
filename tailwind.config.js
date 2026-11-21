/** @type {import('tailwindcss').Config} */

// Colors point at CSS variables (see src/index.css), so one class like
// `bg-surface` works in both themes and components need no `dark:` variants.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        line: token("line"),
        fg: token("fg"),
        muted: token("muted"),
        accent: token("accent"),
        "accent-fg": token("accent-fg"),
        ok: token("ok"),
        hash: token("hash"),
        syn: {
          kw: token("syn-kw"),
          str: token("syn-str"),
          const: token("syn-const"),
          fn: token("syn-fn"),
          ivar: token("syn-ivar"),
          comment: token("syn-comment"),
        },
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: 1 }, "50%, 100%": { opacity: 0 } },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "fade-up": "fade-up .5s ease-out both",
      },
    },
  },
  plugins: [],
};

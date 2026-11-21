# Edi Meer: portfolio

My portfolio as a Ruby on Rails engineer, live at https://edimeer.github.io/portfolio/.

It is a single-page React app built with Vite and styled with Tailwind CSS. The look borrows from
the tools I use every day: an editor window for the intro, `git log` for experience, a `Gemfile`
for skills and a terminal for contact details.

## Run it locally

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Vite serves it at http://localhost:4200/portfolio/.

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the development server                 |
| `npm run lint`    | Runs ESLint with warnings treated as errors   |
| `npm run build`   | Builds the production site into `dist/`       |
| `npm run preview` | Serves the production build locally           |
| `npm run deploy`  | Builds and publishes `dist/` to GitHub Pages  |
| `npm run og-image`| Re-renders the link preview image (macOS, needs Chrome) |

## Updating the content

All content lives in `src/data/`, so most updates never touch a component:

- `profile.js`: name, role, summary, contact links and education
- `experience.js`: jobs, newest first
- `projects.js`: project cards
- `skills.js`: skill groups shown in the Gemfile block

The resume download is `public/edi-meer-resume.pdf`. Replace that file to update it. Because it
lives in `public/`, it keeps a stable URL: https://edimeer.github.io/portfolio/edi-meer-resume.pdf.

## Link preview image

`public/og-image.png` is the 1200x630 card that LinkedIn, Slack and similar apps show when the
site link is shared. Its source is `scripts/og-image.html`: edit that file, then run
`npm run og-image` to render a new PNG with headless Chrome.

## Theme

Colors are CSS variables defined in `src/index.css` for light and dark mode, and
`tailwind.config.js` maps them to classes like `bg-surface` and `text-muted`. Dark mode is the
default; the toggle saves the choice in local storage.

## Deploy

`npm run deploy` builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages
serves. The `base` in `vite.config.js` is `/portfolio/` to match the repository name.

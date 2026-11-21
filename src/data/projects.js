// Each card links to the live site; the whole card is clickable.
// The address shown on the card is taken from `live`.

export const PROJECTS = [
  {
    title: "Allyson Layog Portfolio",
    language: "JavaScript",
    blurb:
      "Portfolio site for a creative designer and illustrator. The front page is a grid of work categories, each with its own page and a full-screen image viewer, plus an image pipeline that turns 300 MB of originals into small web copies.",
    tech: ["React", "React Router", "Motion", "Tailwind CSS"],
    live: "https://allysonlayog.github.io/portfolio/",
  },
  {
    title: "Plumbline",
    language: "TypeScript",
    blurb:
      "Project and issue tracker for small teams: board view with drag and drop, list view with sorting and grouping, filters, and a project overview. The data layer sits behind one interface so a Rails API can replace local storage.",
    tech: ["React", "TypeScript", "dnd-kit", "Vitest"],
    live: "https://edimeer.github.io/project-and-issue-tracker/",
  },
  {
    title: "Almanac",
    language: "TypeScript",
    blurb:
      "Flashcard app with spaced repetition. Scheduling is a small, documented SM-2 variant, cards support Markdown, and progress shows streaks, recall rate and a 14 day forecast.",
    tech: ["React", "TypeScript", "SM-2", "Vitest"],
    live: "https://edimeer.github.io/almanac/",
  },
  {
    title: "Lamppost",
    language: "TypeScript",
    blurb:
      "Community events board where neighbors find local events, save a spot, and post their own. Data goes through React Query behind a clear boundary for a Rails API.",
    tech: ["React", "TypeScript", "React Query", "Vitest"],
    live: "https://edimeer.github.io/lamppost/",
  },
  {
    title: "Ladle",
    language: "TypeScript",
    blurb:
      "Recipe box, weekly meal planner and grocery list in one. Turns the week's plan into a grocery list sorted by aisle, with matching ingredients added together.",
    tech: ["React", "TypeScript", "Vitest"],
    live: "https://edimeer.github.io/ladle/",
  },
  {
    title: "Tallybook",
    language: "TypeScript",
    blurb:
      "Personal finance dashboard with a monthly overview, spending breakdown, budget vs actual, and a searchable, paginated transaction list with validation.",
    tech: ["React", "TypeScript", "Vitest"],
    live: "https://edimeer.github.io/tallybook/",
  },
];

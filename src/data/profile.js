// Everything personal on the site lives here, so updating the portfolio
// after a job change is an edit to this folder, not to the components.

export const PROFILE = {
  name: "Edi Meer",
  handle: "edi@meer",
  role: "Ruby on Rails Engineer",
  // Employers only appear in experience.js, never in the intro.
  focus: "Rails APIs and data integrations",
  years: 7,
  location: "Philippines, remote",
  summary:
    "Backend-focused Rails engineer with 7 years on healthcare, property management and education products. Most of my work is APIs, data integrations, and tracking down the database problems that only show up in production. I pick up React and Angular work when a feature needs it, and I've mentored junior developers and interns along the way.",
  email: "edison.cmeer@gmail.com",
  links: {
    github: "https://github.com/edimeer",
    linkedin: "https://www.linkedin.com/in/edi-meer",
  },
  // Served from public/, so it has a stable URL you can share directly:
  // https://edimeer.github.io/portfolio/edi-meer-resume.pdf
  resume: {
    url: `${import.meta.env.BASE_URL}edi-meer-resume.pdf`,
    fileName: "edi-meer-resume.pdf",
  },
};

export const EDUCATION = {
  school: "Polytechnic University of the Philippines - Sto. Tomas",
  degree: "B.S. in Information Technology",
  period: "2015 - 2019",
};

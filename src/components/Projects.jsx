import { PROJECTS } from "../data/projects.js";
import { PROFILE } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowUpRightIcon } from "./icons.jsx";

// Same colors GitHub uses for these languages.
const LANGUAGE_COLOR = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
};

// "https://edimeer.github.io/ladle/" -> "edimeer.github.io/ladle"
const displayUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// The whole card is clickable. Only the title is a real link; its ::before
// pseudo-element stretches over the card, so screen readers hear one short
// link (the project name) instead of the whole card's text.
const ProjectCard = ({ project }) => (
  <article className="group relative flex flex-col rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/60 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-accent">
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="truncate font-mono text-xs text-muted">{displayUrl(project.live)}</p>
        <h3 className="mt-1 text-lg font-semibold transition-colors group-hover:text-accent">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 before:rounded-lg before:content-[''] focus-visible:outline-none"
          >
            {project.title}
          </a>
        </h3>
      </div>
      <span className="flex shrink-0 items-center gap-1.5 font-mono text-xs text-muted">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: LANGUAGE_COLOR[project.language] }}
          aria-hidden="true"
        />
        {project.language}
      </span>
    </div>

    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.blurb}</p>

    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
      {project.tech.map((tech) => (
        <li key={tech} className="chip">{tech}</li>
      ))}
    </ul>

    <p
      className="mt-5 flex items-center gap-1 border-t border-line pt-4 font-mono text-sm text-muted transition-colors group-hover:text-accent"
      aria-hidden="true"
    >
      open live site <ArrowUpRightIcon />
    </p>
  </article>
);

const Projects = () => (
  <section id="projects" className="scroll-mt-20 border-y border-line bg-surface/40 py-20" aria-labelledby="projects-title">
    <div className="page">
      <SectionHeading id="projects-title" command="ls ~/projects" title="Projects">
        Things I&apos;ve built outside work. Each card opens the live app.
      </SectionHeading>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.live} project={project} />
        ))}
      </div>

      <p className="mt-10 font-mono text-sm text-muted">
        More on{" "}
        <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="link text-fg">
          github.com/edimeer
        </a>
      </p>
    </div>
  </section>
);

export default Projects;

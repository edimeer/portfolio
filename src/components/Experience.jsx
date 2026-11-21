import { EXPERIENCE } from "../data/experience.js";
import { EDUCATION } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";

// A stable, commit-looking short hash for each entry, so the "git log"
// doesn't change between builds. Decoration only.
function shortHash(text) {
  let h = 5381;
  for (const ch of text) h = ((h << 5) + h + ch.charCodeAt(0)) >>> 0;
  return h.toString(16).padStart(7, "0").slice(0, 7);
}

const CommitLine = ({ hash, refs }) => (
  <p className="font-mono text-sm">
    <span className="text-hash">commit {hash}</span>
    {refs && <span className="text-muted"> ({refs})</span>}
  </p>
);

const Dot = ({ current }) => (
  <span
    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
      current ? "border-accent bg-accent" : "border-muted bg-bg"
    }`}
    aria-hidden="true"
  />
);

const Experience = () => (
  <section id="experience" className="page scroll-mt-20 py-20" aria-labelledby="experience-title">
    <SectionHeading id="experience-title" command='git log --author="Edi"' title="Experience">
      {EXPERIENCE.length} companies across healthcare, property management and education.
    </SectionHeading>

    <ol className="mt-12 border-l border-line">
      {EXPERIENCE.map((job) => (
        <li key={job.company} className="relative pb-12 pl-6 sm:pl-8">
          <Dot current={job.current} />
          <CommitLine
            hash={shortHash(job.company + job.period)}
            refs={job.current ? `HEAD -> ${job.branch}` : job.branch}
          />
          <p className="mt-1 font-mono text-sm text-muted">Date: {job.period}</p>

          <h3 className="mt-4 text-xl font-semibold">
            {job.role} <span className="text-muted">@</span> {job.company}
          </h3>
          <p className="mt-1 text-muted">{job.summary}</p>

          <ul className="mt-4 max-w-3xl space-y-2">
            {job.highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed">
                <span className="select-none font-mono text-ok" aria-hidden="true">+</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Stack at ${job.company}`}>
            {job.stack.map((tech) => (
              <li key={tech} className="chip">{tech}</li>
            ))}
          </ul>
        </li>
      ))}

      <li className="relative pl-6 sm:pl-8">
        <Dot />
        <CommitLine hash="0000000" refs="root" />
        <p className="mt-1 font-mono text-sm text-muted">Date: {EDUCATION.period}</p>
        <h3 className="mt-4 text-xl font-semibold">Initial commit: {EDUCATION.degree}</h3>
        <p className="mt-1 text-muted">{EDUCATION.school}</p>
      </li>
    </ol>
  </section>
);

export default Experience;

import { PROFILE } from "../data/profile.js";
import Window from "./Window.jsx";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons.jsx";

// The editor snippet, one array per line of [token type, text] pairs.
// Token types map to the syntax colors in tailwind.config.js.
const CODE = [
  [["kw", "class "], ["const", "Edi"], ["", " < "], ["const", "SoftwareEngineer"]],
  [["kw", "  def "], ["fn", "initialize"]],
  [["ivar", "    @role       "], ["", "= "], ["str", '"Ruby on Rails engineer"']],
  [["ivar", "    @experience "], ["", "= "], ["const", String(PROFILE.years)], ["", "."], ["fn", "years"]],
  [["ivar", "    @focus      "], ["", "= "], ["str", "%i[apis integrations debugging]"]],
  [["ivar", "    @domains    "], ["", "= "], ["str", "%i[healthcare proptech edtech]"]],
  [["kw", "  end"]],
  [],
  [["kw", "  def "], ["fn", "stack"]],
  [["", "    { "], ["const", "backend:"], ["str", "  %w[Rails PostgreSQL MySQL Redis]"], ["", ","]],
  [["const", "      frontend:"], ["str", " %w[React Angular TypeScript]"], ["", ","]],
  [["const", "      testing:"], ["str", "  %w[RSpec TDD CI/CD]"], ["", " }"]],
  [["kw", "  end"]],
  [],
  [["comment", "  # the bugs I like most"]],
  [["kw", "  def "], ["fn", "favorite_bug"]],
  [["str", '    "the one that only happens in prod"']],
  [["kw", "  end"]],
  [["kw", "end"]],
];

const TOKEN_CLASS = {
  kw: "text-syn-kw",
  const: "text-syn-const",
  str: "text-syn-str",
  fn: "text-syn-fn",
  ivar: "text-syn-ivar",
  comment: "text-syn-comment italic",
  "": "text-fg",
};

const CodeWindow = () => (
  <Window title="edi.rb">
    <pre className="overflow-x-auto py-4 font-mono text-[13px] leading-6">
      <code>
        {CODE.map((tokens, i) => (
          <div key={i} className="flex">
            <span className="w-9 shrink-0 select-none pr-4 text-right text-muted/50" aria-hidden="true">
              {i + 1}
            </span>
            <span className="pr-2">
              {tokens.map(([type, text], j) => (
                <span key={j} className={TOKEN_CLASS[type]}>
                  {text}
                </span>
              ))}
            </span>
          </div>
        ))}
      </code>
    </pre>
  </Window>
);

const FACTS = [
  ["focus", PROFILE.focus],
  ["experience", `${PROFILE.years} years`],
  ["location", PROFILE.location],
];

const Hero = () => (
  <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
    <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
    <div className="page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
      <div className="animate-fade-up">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 id="hero-title" className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {PROFILE.name}
        </h1>
        <p className="mt-3 font-mono text-lg text-accent">{PROFILE.role}</p>
        <p className="mt-6 max-w-xl leading-relaxed text-muted">{PROFILE.summary}</p>

        <dl className="mt-6 grid gap-1 font-mono text-sm">
          {FACTS.map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <dt className="text-syn-const">{key}:</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={PROFILE.resume.url} download={PROFILE.resume.fileName} className="btn-primary">
            <DownloadIcon />
            resume.pdf
          </a>
          <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <GitHubIcon />
            GitHub
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn-ghost">
            <MailIcon />
            Email
          </a>
        </div>
      </div>

      <div className="min-w-0 animate-fade-up [animation-delay:120ms]">
        <CodeWindow />
      </div>
    </div>
  </section>
);

export default Hero;

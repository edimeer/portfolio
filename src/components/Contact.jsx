import { PROFILE } from "../data/profile.js";
import SectionHeading from "./SectionHeading.jsx";
import Window from "./Window.jsx";

const ROWS = [
  { key: "email", label: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { key: "linkedin", label: "linkedin.com/in/edi-meer", href: PROFILE.links.linkedin, external: true },
  { key: "github", label: "github.com/edimeer", href: PROFILE.links.github, external: true },
  { key: "resume", label: PROFILE.resume.fileName, href: PROFILE.resume.url, download: PROFILE.resume.fileName },
];

const Contact = () => (
  <section id="contact" className="scroll-mt-20 border-t border-line bg-surface/40 py-20" aria-labelledby="contact-title">
    <div className="page grid items-start gap-12 lg:grid-cols-2">
      <SectionHeading id="contact-title" command="edi --contact" title="Contact">
        Email is the fastest way to reach me. I&apos;m happy to talk about Rails, backend
        work, or a role on your team.
      </SectionHeading>

      <Window title="zsh">
        <div className="overflow-x-auto p-5 font-mono text-sm leading-7 sm:p-6">
          <p>
            <span className="text-ok">{PROFILE.handle}</span>
            <span className="text-muted">:~$ </span>
            edi --contact
          </p>
          <dl className="mt-2">
            {ROWS.map((row) => (
              <div key={row.key} className="flex gap-4">
                <dt className="w-20 shrink-0 text-syn-const">{row.key}</dt>
                <dd className="min-w-0">
                  <a
                    href={row.href}
                    className="link break-all"
                    {...(row.external && { target: "_blank", rel: "noopener noreferrer" })}
                    {...(row.download && { download: row.download })}
                  >
                    {row.label}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-2">
            <span className="text-ok">{PROFILE.handle}</span>
            <span className="text-muted">:~$ </span>
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" aria-hidden="true" />
          </p>
        </div>
      </Window>
    </div>
  </section>
);

export default Contact;

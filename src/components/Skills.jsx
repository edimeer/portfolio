import { SKILLS } from "../data/skills.js";
import SectionHeading from "./SectionHeading.jsx";
import Window from "./Window.jsx";

// Each skill group is written out like a Gemfile group block.
const GemGroup = ({ group, items }) => (
  <div className="font-mono text-[13px] leading-6">
    <p>
      <span className="text-syn-kw">group</span> <span className="text-syn-const">:{group}</span>{" "}
      <span className="text-syn-kw">do</span>
    </p>
    <ul aria-label={group}>
      {items.map((item) => (
        <li key={item} className="pl-4">
          <span className="text-syn-fn">gem</span> <span className="text-syn-str">&quot;{item}&quot;</span>
        </li>
      ))}
    </ul>
    <p className="text-syn-kw">end</p>
  </div>
);

const Skills = () => (
  <section id="skills" className="page scroll-mt-20 py-20" aria-labelledby="skills-title">
    <SectionHeading id="skills-title" command="cat Gemfile" title="Skills">
      What I use day to day. Rails and PostgreSQL are home; React and Angular when the feature needs them.
    </SectionHeading>

    <Window title="Gemfile" className="mt-12">
      <div className="p-5 sm:p-6">
        <p className="font-mono text-[13px] leading-6">
          <span className="text-syn-fn">source</span>{" "}
          <span className="text-syn-str">&quot;https://rubygems.org&quot;</span>
        </p>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <GemGroup key={s.group} {...s} />
          ))}
        </div>
      </div>
    </Window>
  </section>
);

export default Skills;

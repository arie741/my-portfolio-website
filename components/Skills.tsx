import { skills, languages } from "@/lib/cv";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="03" title="Skills" />
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-background px-4 py-2 font-mono text-sm text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-12 flex gap-10 font-mono text-sm">
            {languages.map((lang) => (
              <div key={lang.name}>
                <p className="text-foreground">{lang.name}</p>
                <p className="mt-1 text-muted">{lang.level}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { experience } from "@/lib/cv";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-full px-6 sm:max-w-[80%]">
        <SectionHeading index="01" title="Experience" />
        <div className="space-y-12">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <div
                className={`grid gap-4 pt-8 sm:grid-cols-[180px_1fr] ${
                  index === 0 ? "" : "border-t border-white/10"
                }`}
              >
                <div className="font-mono text-sm text-muted">
                  <p>{job.period}</p>
                  <p className="mt-1 text-accent">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-medium text-foreground">
                    {job.role} <span className="text-accent">· {job.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="font-mono text-sm leading-relaxed text-muted sm:text-base">
                        — {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

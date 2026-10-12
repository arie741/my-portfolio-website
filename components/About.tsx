import { profile } from "@/lib/cv";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01" title="Profile" />
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <p className="font-mono text-base leading-relaxed text-foreground sm:text-lg">
              {profile.summary}
            </p>
          </div>
          <div className="space-y-3 font-mono text-sm text-muted">
            <p>{profile.location}</p>
            <p>
              <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
                {profile.email}
              </a>
            </p>
            <p>
              <a href={`tel:${profile.phone}`} className="transition-colors hover:text-accent">
                {profile.phone}
              </a>
            </p>
            <p>
              <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                Github
              </a>
            </p>
            <p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

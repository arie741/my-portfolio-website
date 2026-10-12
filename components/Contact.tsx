import { profile } from "@/lib/cv";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="04" title="Contact" />
        <p className="max-w-lg font-mono text-base leading-relaxed text-muted sm:text-lg">
          Looking for a developer that likes to get stuff done? Reach out and let&apos;s talk.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.cvFile}
            download
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

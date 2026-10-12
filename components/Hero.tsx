import { profile } from "@/lib/cv";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pt-32">
      <p className="font-mono text-accent">Hey</p>
      <h1 className="font-heading mt-2 text-4xl font-medium leading-tight text-foreground sm:text-6xl">
        I&apos;m <span className="text-accent">Arie</span>,
        <br />
        {profile.title}
      </h1>
      <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-muted sm:text-base">
        {profile.summary}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href={profile.cvFile}
          download
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Let&apos;s Talk
        </a>
      </div>
    </section>
  );
}

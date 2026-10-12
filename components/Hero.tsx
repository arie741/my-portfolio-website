import { profile } from "@/lib/cv";
import ProfileCard from "./ProfileCard";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-full flex-col items-center gap-12 px-6 pb-24 pt-20 sm:max-w-[80%] sm:pt-32 lg:flex-row lg:items-start lg:justify-between"
    >
      <div className="lg:max-w-xl">
        <p className="font-mono text-6xl font-bold text-accent">Hey</p>
        <h1 className="font-heading mt-2 text-4xl font-medium leading-tight text-foreground sm:text-6xl">
          I&apos;m <span className="text-accent">Nyoman Arie Pranasakti</span>
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
        </div>
      </div>
      <ProfileCard />
    </section>
  );
}

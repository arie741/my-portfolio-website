import { profile } from "@/lib/cv";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-4 px-6 font-mono text-xs text-muted sm:max-w-[80%] sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            Github
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

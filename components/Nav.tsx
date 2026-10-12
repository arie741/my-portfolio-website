import { profile } from "@/lib/cv";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-heading text-4xl font-medium text-foreground">
          <span className="text-accent">{"<"}html/{">"}</span> Arie
        </a>
        <ul className="hidden items-center gap-8 text-sm sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-muted transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.cvFile}
            download
            className="rounded-full border border-accent px-4 py-2 text-xs text-accent transition-colors hover:bg-accent hover:text-background"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

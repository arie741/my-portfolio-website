import { profile } from "@/lib/cv";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-heading text-lg font-medium text-foreground">
          <span className="text-accent">{"<"}/{">"}</span> {profile.name.split(" ")[0]}
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
        <a
          href={profile.cvFile}
          download
          className="rounded-full border border-accent px-4 py-2 text-xs text-accent transition-colors hover:bg-accent hover:text-background"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}

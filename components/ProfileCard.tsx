import Image from "next/image";
import { profile, topSkills } from "@/lib/cv";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from "./icons";

const contactRows = [
  { icon: PhoneIcon, label: profile.phone, href: `tel:${profile.phone}` },
  { icon: MailIcon, label: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPinIcon, label: profile.country, href: undefined },
  { icon: LinkedinIcon, label: "LinkedIn", href: profile.linkedin },
  { icon: GithubIcon, label: "GitHub", href: profile.github },
];

export default function ProfileCard() {
  return (
    <div className="w-full max-w-xs rounded-tl-[64px] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-accent/60 bg-surface p-8">
      <div className="flex flex-col items-center text-center">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-accent">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={96}
            height={96}
            className="h-full w-full object-cover object-[center_0%]"
            priority
          />
        </div>
        <p className="font-heading mt-4 text-xl font-medium text-foreground">Arie</p>
        <p className="font-mono text-sm text-muted">{profile.title}</p>
      </div>

      <div className="mt-6 space-y-3">
        {contactRows.map((row) => {
          const Icon = row.icon;
          const content = (
            <>
              <Icon className="h-4 w-4 shrink-0 text-accent" />
              <span className="truncate">{row.label}</span>
            </>
          );
          return row.href ? (
            <a
              key={row.label}
              href={row.href}
              target={row.href.startsWith("http") ? "_blank" : undefined}
              rel={row.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              {content}
            </a>
          ) : (
            <div key={row.label} className="flex items-center gap-3 font-mono text-xs text-muted">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] text-accent"
          >
            {skill}
          </span>
        ))}
        <a
          href="#skills"
          className="rounded-full border bg-accent border-accent/40 px-3 py-1 font-mono text-[11px] text-background hover:opacity-90 transition-opacity"
        >
            See more skills...
          </a>
      </div>

    </div>
  );
}

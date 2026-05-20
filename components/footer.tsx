import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const social = [
  { name: "GitHub", href: "https://github.com/obianwumichael", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/obianwumichael",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/obianwumichael", icon: Twitter },
  { name: "Email", href: "mailto:obianwumichael@example.com", icon: Mail },
];

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-mono text-sm font-semibold">Obianwu Michael</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Security Software Engineer in the making.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {social.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-muted-foreground md:px-6">
          &copy; {new Date().getFullYear()} Obianwu Michael. Built with Next.js
          &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Lock, Search, KeyRound } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  icon: React.ComponentType<{ className?: string }>;
};

const projects: Project[] = [
  {
    title: "PassGuard",
    tagline: "Password strength checker",
    description:
      "A small Python script that rates how strong a password is — checking length, character mix, and whether it appears on common-password lists. My first real coding project while learning the basics.",
    tech: ["Python"],
    github: "https://github.com/ShoSho-net/passguard",
    icon: KeyRound,
  },
  {
    title: "CipherPlay",
    tagline: "Caesar cipher encoder & decoder",
    description:
      "A command-line tool to encode and decode messages using the classic Caesar cipher. Built to understand how simple encryption works before moving on to the modern stuff.",
    tech: ["Python"],
    github: "https://github.com/ShoSho-net/cipherplay",
    icon: Lock,
  },
  {
    title: "PortSweeper",
    tagline: "Simple port scanner",
    description:
      "A beginner-friendly TCP port scanner I run only on machines I own, to learn what ports and services actually are. This is where networking finally started to click for me.",
    tech: ["Python", "socket"],
    github: "https://github.com/ShoSho-net/portsweeper",
    icon: Search,
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="flex min-h-screen items-center justify-center px-4 py-20 md:px-6"
    >
      <div ref={ref} className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={
            inView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 16, filter: "blur(8px)" }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            03 — Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-foreground/80" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            A few tiny tools I&apos;m building as I learn the basics. Nothing
            fancy — just hands-on practice to make the concepts stick.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut",
                }}
                className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-muted">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-accent">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-muted/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-80"
                >
                  View on GitHub
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

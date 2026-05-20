"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type Tech = { name: string; logo: string };

const groups: { label: string; items: Tech[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
      {
        name: "JavaScript",
        logo: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.simpleicons.org/typescript/3178C6",
      },
      { name: "Bash", logo: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      { name: "Go", logo: "https://cdn.simpleicons.org/go/00ADD8" },
    ],
  },
  {
    label: "Security Tools",
    items: [
      {
        name: "Wireshark",
        logo: "https://cdn.simpleicons.org/wireshark/1679A7",
      },
      {
        name: "Burp Suite",
        logo: "https://cdn.simpleicons.org/burpsuite/FF6633",
      },
      { name: "Nmap", logo: "https://cdn.simpleicons.org/nmap/0098E6" },
      {
        name: "Metasploit",
        logo: "https://cdn.simpleicons.org/metasploit/2596CD",
      },
      { name: "Splunk", logo: "https://cdn.simpleicons.org/splunk/000000" },
    ],
  },
  {
    label: "Platforms",
    items: [
      { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624" },
      {
        name: "Kali Linux",
        logo: "https://cdn.simpleicons.org/kalilinux/557C94",
      },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
      {
        name: "AWS",
        logo: "https://cdn.simpleicons.org/amazonaws/FF9900",
      },
    ],
  },
  {
    label: "Dev",
    items: [
      { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717" },
      {
        name: "VS Code",
        logo: "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      },
      { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
];

function TechIcon({ tech }: { tech: Tech }) {
  const [errored, setErrored] = useState(false);
  const initials = tech.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group flex flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-md border border-border bg-card transition-transform group-hover:scale-110">
        {errored ? (
          <span className="font-mono text-xs font-bold text-muted-foreground">
            {initials}
          </span>
        ) : (
          <Image
            src={tech.logo}
            alt={tech.name}
            width={28}
            height={28}
            onError={() => setErrored(true)}
            className="h-7 w-7"
            unoptimized
          />
        )}
      </div>
      <span className="font-mono text-xs text-muted-foreground">
        {tech.name}
      </span>
    </div>
  );
}

export function TechStackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech"
      className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-20 md:px-6"
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
            04 — Toolbox
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Tech Stack
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-foreground/80" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            What I reach for when building, debugging, and exploring.
          </p>
        </motion.div>

        <div className="space-y-8">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + gi * 0.1,
                ease: "easeOut",
              }}
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-foreground">
                {group.label}
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                {group.items.map((tech) => (
                  <TechIcon key={tech.name} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

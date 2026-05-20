"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, ShieldCheck, Code2 } from "lucide-react";

const currentlyLearning = [
  "TryHackMe — SOC Level 1 path",
  "Python for security automation",
  "Linux internals & basic incident response",
  "Web app security fundamentals (OWASP Top 10)",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
            01 — About
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-foreground/80" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m Michael, a Computer Science student fascinated by the
              quiet, careful side of software — the part that decides whether a
              system holds up when someone curious knocks on the door. My
              journey into security started after my first CTF, where solving a
              simple challenge felt more rewarding than any tutorial I&apos;d
              followed.
            </p>
            <p>
              I&apos;m currently working through the{" "}
              <span className="text-foreground">Google Cybersecurity</span> and{" "}
              <span className="text-foreground">CompTIA Security+</span> tracks
              while building small Python and JavaScript tools that let me
              practice what I read about — password entropy, network scanning,
              log analysis, and lightweight cryptography.
            </p>
            <p>
              Long term, I want to grow into a security software engineer who
              can write the secure code, find the bugs in it, and explain both
              sides clearly. For now, I&apos;m focused on showing up every day
              and shipping one small thing at a time.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h3 className="flex items-center gap-2 font-mono text-sm font-semibold">
              <BookOpen className="h-4 w-4 text-accent" />
              Currently learning
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {currentlyLearning.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4 text-center">
              <div>
                <ShieldCheck className="mx-auto h-4 w-4 text-accent" />
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Defensive focus
                </p>
              </div>
              <div>
                <Code2 className="mx-auto h-4 w-4 text-accent" />
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  Secure coding
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

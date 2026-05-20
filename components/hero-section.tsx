"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Terminal } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-24 md:px-6"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto md:mx-0"
        >
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-muted md:h-40 md:w-40">
            <Image
              src="/avatar.svg"
              alt="Obianwu Michael"
              fill
              priority
              sizes="160px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-center md:text-left"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <Terminal className="h-3.5 w-3.5 text-accent" />
            <span>whoami</span>
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Obianwu Michael
          </h1>

          <p className="mt-3 text-lg text-muted-foreground md:text-xl">
            Security Software Engineer{" "}
            <span className="text-foreground">in the making</span>.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground text-balance md:mx-0 md:text-base">
            Learning defensive security and secure coding by day, exploring
            offensive fundamentals through CTFs and TryHackMe by night. Building
            small security tools to turn theory into reps.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#certifications"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Certifications
            </Link>
            <Link
              href="mailto:obianwumichael@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 md:justify-start">
            <a
              href="https://github.com/obianwumichael"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/obianwumichael"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:obianwumichael@example.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

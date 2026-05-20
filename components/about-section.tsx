"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m Micheal, a Theatre Arts student at the{" "}
              <span className="text-foreground">University of Ibadan</span> with
              a growing obsession for cybersecurity. My path here isn&apos;t the
              usual one — I came from the stage, not the server room — but the
              same curiosity that pulls me into a script pulls me into
              understanding how digital systems really work, and how they break.
            </p>
            <p>
              Right now I&apos;m focused on the fundamentals: how networks talk,
              how attackers think, and how defenders respond. I&apos;m working
              through beginner-friendly tracks like the{" "}
              <span className="text-foreground">Google Cybersecurity</span>{" "}
              certificate and <span className="text-foreground">TryHackMe</span>{" "}
              rooms, taking notes, and slowly turning what I read into hands-on
              practice.
            </p>
            <p>
              I&apos;m at the very start of this journey, and I&apos;m okay with
              that. My goal for now is simple — show up consistently, stay
              curious, and build a foundation strong enough to grow a real
              career in security on top of it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

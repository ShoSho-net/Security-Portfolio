"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Target, CircleDot, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "Planned" | "In Progress" | "Earned";

type Certification = {
  title: string;
  issuer: string;
  status: Status;
  note: string;
};

const certifications: Certification[] = [
  {
    title: "TryHackMe — Pre-Security Path",
    issuer: "TryHackMe",
    status: "Planned",
    note: "First step",
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    status: "Planned",
    note: "Foundations",
  },
  {
    title: "Cisco Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    status: "Planned",
    note: "Foundations",
  },
  {
    title: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    status: "Planned",
    note: "Long-term goal",
  },
  {
    title: "Certified in Cybersecurity (CC)",
    issuer: "ISC2",
    status: "Planned",
    note: "Long-term goal",
  },
  {
    title: "CompTIA Network+",
    issuer: "CompTIA",
    status: "Planned",
    note: "Networking base",
  },
];

const statusStyles: Record<Status, string> = {
  Planned: "bg-muted text-muted-foreground border-border",
  "In Progress":
    "bg-blue-500/10 text-blue-500 border-blue-500/30 dark:text-blue-400",
  Earned: "bg-accent/10 text-accent border-accent/30",
};

const statusIcons: Record<Status, React.ComponentType<{ className?: string }>> =
  {
    Planned: Target,
    "In Progress": CircleDot,
    Earned: CheckCircle2,
  };

export function CertificationsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="certifications"
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
            02 — Roadmap
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Certification Roadmap
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-foreground/80" />
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            I haven&apos;t started any of these yet — this is the path
            I&apos;m planning to follow to build a credible foundation in
            security, roughly in the order I intend to tackle them.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, i) => {
            const StatusIcon = statusIcons[cert.status];
            return (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + i * 0.08,
                  ease: "easeOut",
                }}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/50"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-muted">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold leading-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer} &middot; {cert.note}
                  </p>
                  <span
                    className={cn(
                      "mt-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs",
                      statusStyles[cert.status]
                    )}
                  >
                    <StatusIcon className="h-3 w-3" />
                    {cert.status}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

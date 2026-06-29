"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, FileText, Github, Mail } from "lucide-react"

const credibility = [
  "CS @ Maryland",
  "SDE Intern @ Amazon (AWS Security)",
  "1k+ downloads on ReachSearch",
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center">
      {/* Subtle radial glow, no animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(258 90% 76% / 0.08), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-2 align-middle" />
            Available for new-grad SWE roles · 2027
          </p>

          <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] text-foreground">
            Santosh<br />
            Sureshkumar<span className="text-accent">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Software engineer building products people use — from shipped iOS apps to
            internal rule-evaluation services governing 100k+ Amazon teams.
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted-foreground">
            {credibility.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span className="text-border">·</span>}
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <FileText size={15} />
              Resume
              <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <a
              href="https://github.com/toshsuresh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent text-foreground px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="mailto:santossuresh005@gmail.com"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent text-foreground px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
            >
              <Mail size={15} />
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

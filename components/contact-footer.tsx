"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const contactLinks = [
  {
    label: "Email",
    href: "mailto:santossuresh005@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/toshsuresh",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/toshsuresh",
    icon: Github,
    external: true,
  },
]

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/60 py-24 md:py-32 bg-background"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Contact
          </p>
          <h2 className="font-sans text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Get in touch<span className="text-accent">.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
            I'm open to new-grad SWE roles for 2027 and interesting summer 2026 work that lines up.
            Email is the fastest way to reach me.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            {contactLinks.map((link, i) => {
              const Icon = link.icon
              const isPrimary = i === 0
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={
                    isPrimary
                      ? "inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
                      : "inline-flex items-center gap-2 rounded-md border border-border bg-transparent text-foreground px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
                  }
                >
                  <Icon size={15} />
                  {link.label}
                  {link.external && <ArrowUpRight size={14} className="opacity-60" />}
                </a>
              )
            })}
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          <span>© {new Date().getFullYear()} Santosh Sureshkumar</span>
          <span>Built with Next.js · Tailwind · Geist</span>
        </div>
      </div>
    </footer>
  )
}

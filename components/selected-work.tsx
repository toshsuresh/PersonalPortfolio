"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type Project = {
  title: string
  blurb: string
  stack: string[]
  role: string
  year: string
  metric?: string
  badge?: string
  image: string
  link?: string
}

const projects: Project[] = [
  {
    title: "ReachSearch",
    blurb:
      "iOS app helping students discover and reach out to research-matching professors, with Firebase auth and resume parsing.",
    stack: ["Swift", "Firebase", "MongoDB", "AWS", "Node.js"],
    role: "Solo · iOS + Backend",
    year: "2025",
    metric: "1k+ downloads",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-22%20at%205.28.09%E2%80%AFPM-HFxOTwCQesE9NFlsae4EZic5U6tCbV.png",
    link: "https://apps.apple.com/us/app/reachsearch/id6746462291",
  },
  {
    title: "Jarvis",
    blurb:
      "4-stage spatial reasoning pipeline fusing depth, hand, and tool signals for jobsite hazard analysis; Voice AI agent surfaces cited reports in under 2 seconds.",
    stack: ["OpenCV", "MiDaS", "MediaPipe", "YOLOv8", "Voice AI"],
    role: "Hackathon · Lead",
    year: "Feb 2026",
    metric: "81% precision · 42% fewer hallucinations",
    badge: "Ironsite × UMD Finalist",
    image: "/jarvis.png",
  },
  {
    title: "FireSync",
    blurb:
      "Full-stack platform matching volunteers with wildfire relief tasks via a DeepSeek-backed RAG model that ranks on skills and availability.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Leaflet"],
    role: "Hackathon · Full-stack",
    year: "2025",
    metric: "DeepSeek RAG matching",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-22%20at%205.19.18%E2%80%AFPM-hSwXDb2zI8ZMlS7IOPwvaH1b1gHnjE.png",
  },
  {
    title: "NPOConnect",
    blurb:
      "Matching emerging leaders to nonprofit board positions via weighted skill-based algorithms. Built for JPMC Code for Good.",
    stack: ["Flask", "React", "SQLite", "OpenAI API"],
    role: "Team · Backend",
    year: "2024",
    badge: "JPMC Code for Good",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-22%20at%205.34.27%E2%80%AFPM-sTJGzo7j3PxdZ7cu9gML7xqJAkOkz2.png",
  },
  {
    title: "SkyCast",
    blurb:
      "Predicts flight delays from adverse weather conditions to improve travel planning and passenger experience.",
    stack: ["Python", "React", "MySQL", "Flask", "scikit-learn"],
    role: "Team · ML",
    year: "2024",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-22%20at%205.44.11%E2%80%AFPM-OQdfrvDWTO0MJsW4mwHiMlrhlLYftu.png",
  },
  {
    title: "SaveAPlate",
    blurb:
      "Reduces dining hall food waste by scraping real-time menu data and forecasting waste from historical patterns, weekdays, and student traffic.",
    stack: ["Python", "Flask", "SQL", "scikit-learn"],
    role: "Team · ML + Scraping",
    year: "2023",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-22%20at%205.19.51%E2%80%AFPM-R0GWRiVkHX6xakInnM8DqD54xJJvYn.png",
  },
]

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Selected Work
            </p>
            <h2 className="font-sans text-3xl md:text-4xl font-medium tracking-tight">
              Projects
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-muted-foreground max-w-xs">
            Shipped products, hackathon work, and research tools — most live in the wild.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isClickable = !!project.link

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25) }}
      whileHover={isClickable ? { y: -3 } : undefined}
      className={`group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors ${
        isClickable ? "hover:border-foreground/30 cursor-pointer" : ""
      }`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {project.badge && (
          <span className="absolute left-3 top-3 rounded-md bg-background/80 backdrop-blur-sm px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground border border-border/80">
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sans text-lg font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {isClickable && (
            <ArrowUpRight
              size={16}
              className="mt-1 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0"
            />
          )}
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.blurb}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-border/60 font-mono text-[11px] text-muted-foreground">
          <span>
            {project.role} · {project.year}
          </span>
          {project.metric && <span className="text-foreground/80 text-right">{project.metric}</span>}
        </div>
      </div>
    </motion.div>
  )

  if (isClickable) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${project.title} (opens in new tab)`}
      >
        {inner}
      </a>
    )
  }

  return inner
}

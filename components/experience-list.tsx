"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

type Experience = {
  company: string
  role: string
  location: string
  dateRange: string
  description: string
  current?: boolean
  logo?: string
  logoBg?: string
  logoClassName?: string
  initial: string
}

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "SDE Intern",
    location: "Herndon, VA",
    dateRange: "Jun 2026 – Aug 2026",
    description:
      "Part of AWS Security. Building Spring Boot APIs in Kotlin for Amazon's internal rule evaluation service governing 100k+ Amazon teams. Shipped a Boolean algebra reduction engine and a natural-language rule translation API that cut stakeholder audit time by 84%.",
    current: true,
    logo: "/amazon-logo.png",
    logoBg: "bg-white",
    initial: "A",
  },
  {
    company: "JPMorgan Chase & Co",
    role: "Software Engineer Intern",
    location: "Wilmington, DE",
    dateRange: "Jun 2025 – Aug 2025",
    description:
      "Part of the CIB Finance LOB. Worked with the Genie LLM in Databricks to optimize workflow processes and enhance data-driven decision making across financial operations.",
    logo: "/jpmc-logo.png",
    logoBg: "bg-[#7a4a2d]",
    logoClassName: "h-full w-full object-cover",
    initial: "J",
  },
  {
    company: "University of Maryland",
    role: "Undergraduate Researcher",
    location: "College Park, MD",
    dateRange: "Jan 2025 – Present",
    description:
      "Built the server-side training interface for the Geneva Censorship Team, improving testing efficiency by 45% and supporting 200+ daily monitoring operations.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/umdicon-89KaUCockpvMQBQTqGbg463XXfLUFL.webp",
    logoBg: "bg-white",
    initial: "M",
  },
  {
    company: "Pfizer",
    role: "SAP Technical Developer",
    location: "Collegeville, PA",
    dateRange: "May 2024 – Jun 2025",
    description:
      "Built SAP solutions in ABAP and Python that improved data management efficiency by 15%; evaluated SAP Data Intelligence Modeler features.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pfizericon-Yf4N7NYQE28LBIHgG7RMF1ho8brCkb.png",
    logoBg: "bg-white",
    initial: "P",
  },
  {
    company: "UT-Dallas Internship Program",
    role: "Big Data Analytics Intern",
    location: "Dallas, TX",
    dateRange: "Jun 2022 – Aug 2022",
    description:
      "Applied regression, clustering, and neural networks to Kaggle datasets under Dr. Khan.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UTDicon-Y1S7OgF7zRp9pFb40DP0HGYKLvyG4A.png",
    logoBg: "bg-white",
    initial: "U",
  },
  {
    company: "UT-Dallas Internship Program",
    role: "Concurrent Computing Intern",
    location: "Dallas, TX",
    dateRange: "Jun 2021 – Aug 2021",
    description:
      "Implemented multi-threaded Java projects, improving processing efficiency by 40%.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UTDicon-Y1S7OgF7zRp9pFb40DP0HGYKLvyG4A.png",
    logoBg: "bg-white",
    initial: "U",
  },
]

function Logo({ exp }: { exp: Experience }) {
  return (
    <div
      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/60 ${
        exp.logoBg ?? "bg-secondary"
      }`}
    >
      {exp.logo ? (
        <Image
          src={exp.logo}
          alt={`${exp.company} logo`}
          width={56}
          height={56}
          className={exp.logoClassName ?? "h-full w-full object-contain p-2"}
        />
      ) : (
        <span className="font-sans text-2xl font-medium text-background">
          {exp.initial}
        </span>
      )}
    </div>
  )
}

function ExperienceCard({ exp }: { exp: Experience }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-border bg-card/80 p-6 shadow-[0_0_60px_-30px_hsl(258_90%_76%/0.3)] backdrop-blur-sm"
    >
      <div className="flex items-start gap-4 mb-5">
        <Logo exp={exp} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <h3 className="font-sans text-xl font-semibold text-foreground">
              {exp.role}
            </h3>
            {exp.current && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/40 bg-accent/10 rounded px-1.5 py-0.5">
                Current
              </span>
            )}
          </div>
          <p className="font-sans text-base text-accent mt-1">{exp.company}</p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mb-5 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar size={14} className="opacity-70" />
          <span>{exp.dateRange}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="opacity-70" />
          <span>{exp.location}</span>
        </div>
      </div>

      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {exp.description}
      </p>
    </motion.div>
  )
}

export default function ExperienceList() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-border/60"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 md:mb-20 bg-gradient-to-r from-purple-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical timeline */}
          <div
            aria-hidden
            className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/0 via-accent/50 to-pink-500/0"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={`${exp.company}-${exp.dateRange}`}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center"
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 h-4 w-4 rounded-full bg-pink-400 ring-[6px] ring-pink-400/15 shadow-[0_0_24px_rgba(236,72,153,0.7)]"
                    style={{ top: "32px" }}
                  />

                  {/* Card slot — alternating sides on desktop */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft
                        ? "md:pr-12 md:col-start-1"
                        : "md:pl-12 md:col-start-2"
                    }`}
                  >
                    <ExperienceCard exp={exp} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

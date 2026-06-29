"use client"

import { motion } from "framer-motion"

type Experience = {
  company: string
  role: string
  location: string
  dateRange: string
  description: string
  current?: boolean
}

const experiences: Experience[] = [
  {
    company: "Amazon",
    role: "SDE Intern · AWS Security",
    location: "Herndon, VA",
    dateRange: "Jun 2026 – Aug 2026",
    description:
      "Building Spring Boot APIs in Kotlin for Amazon's internal rule evaluation service governing 100k+ Amazon teams. Shipped a Boolean algebra reduction engine and a natural-language rule translation API that cut stakeholder audit time by 84%.",
    current: true,
  },
  {
    company: "JPMorgan Chase & Co",
    role: "Software Engineer Intern · CIB Finance",
    location: "Wilmington, DE",
    dateRange: "Jun 2025 – Aug 2025",
    description:
      "Worked with the Genie LLM in Databricks to optimize workflow processes and enhance data-driven decision making across financial operations.",
  },
  {
    company: "University of Maryland",
    role: "Undergraduate Researcher · Geneva Censorship Team",
    location: "College Park, MD",
    dateRange: "Jan 2025 – Present",
    description:
      "Built the server-side training interface for the Geneva Censorship Team, improving testing efficiency by 45% and supporting 200+ daily monitoring operations.",
  },
  {
    company: "Pfizer",
    role: "SAP Technical Developer",
    location: "Collegeville, PA",
    dateRange: "May 2024 – Jun 2025",
    description:
      "Built SAP solutions in ABAP and Python that improved data management efficiency by 15%; evaluated SAP Data Intelligence Modeler features.",
  },
  {
    company: "UT-Dallas Internship Program",
    role: "Big Data Analytics Intern",
    location: "Dallas, TX",
    dateRange: "Jun 2022 – Aug 2022",
    description:
      "Applied regression, clustering, and neural networks to Kaggle datasets under Dr. Khan.",
  },
  {
    company: "UT-Dallas Internship Program",
    role: "Concurrent Computing Intern",
    location: "Dallas, TX",
    dateRange: "Jun 2021 – Aug 2021",
    description:
      "Implemented multi-threaded Java projects, improving processing efficiency by 40%.",
  },
]

export default function ExperienceList() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border/60">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            Experience
          </p>
          <h2 className="font-sans text-3xl md:text-4xl font-medium tracking-tight">
            Where I've worked
          </h2>
        </motion.div>

        <ol className="divide-y divide-border/60 border-y border-border/60">
          {experiences.map((exp, i) => (
            <motion.li
              key={`${exp.company}-${exp.dateRange}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.2) }}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-6"
            >
              <div className="flex md:flex-col items-baseline md:items-start gap-2 md:gap-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {exp.dateRange}
                </span>
                {exp.current && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/40 bg-accent/10 rounded px-1.5 py-0.5">
                    Current
                  </span>
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-sans text-base font-medium text-foreground">
                    {exp.company}
                  </h3>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-sm text-muted-foreground">{exp.role}</span>
                  <span className="text-muted-foreground hidden sm:inline">·</span>
                  <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground">
                    {exp.location}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center overflow-hidden isolate">
      {/* Layered background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(0 0% 100% / 0.18) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(ellipse 80% 90% at 50% 45%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 90% at 50% 45%, black 40%, transparent 100%)",
          }}
        />

        {/* Aurora blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="aurora-blob-a absolute -top-40 left-[10%] h-[640px] w-[640px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(258 95% 70% / 0.85), hsl(258 95% 70% / 0) 65%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="aurora-blob-b absolute top-1/4 right-[5%] h-[560px] w-[560px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(220 95% 60% / 0.65), hsl(220 95% 60% / 0) 65%)",
              filter: "blur(70px)",
            }}
          />
          <div
            className="aurora-blob-c absolute -bottom-32 left-[30%] h-[500px] w-[500px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(310 80% 65% / 0.55), hsl(310 80% 65% / 0) 65%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        {/* Subtle bottom fade to background */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--background)) 90%)",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-center"
        >
          <div className="max-w-2xl">
            <h1 className="font-sans text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.05] text-foreground">
              Santosh<br />
              Sureshkumar<span className="text-accent">.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              CS + Business + Cybersecurity @ UMD, SWE Intern @ Amazon, love building
              products with passionate people.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/toshsuresh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <Github size={15} />
                GitHub
                <ArrowUpRight size={14} className="opacity-60" />
              </a>
              <a
                href="mailto:santossuresh005@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent text-foreground px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-[320px] aspect-square mx-auto md:mx-0 md:justify-self-end rounded-full overflow-hidden border border-border/60 ring-1 ring-accent/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pfplinkedin.PNG-8DFEwvy1CjGFwXheMAoHz8jJof3Te2.jpeg"
              alt="Santosh Sureshkumar"
              fill
              sizes="320px"
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

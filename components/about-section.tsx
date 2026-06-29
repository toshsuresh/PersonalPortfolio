"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border/60">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 md:gap-16 items-start"
        >
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              About
            </p>
            <h2 className="font-sans text-3xl md:text-4xl font-medium tracking-tight mb-6">
              Who I am
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student at the University of Maryland with minors in Business
                and Advanced Cybersecurity. Most of my work lives where shipped products meet
                research-grade tooling — internal APIs at Amazon governing 100k+ teams, an iOS app
                with real adoption, computer-vision pipelines for jobsite safety, and server-side
                infrastructure for the Geneva Censorship Team.
              </p>
              <p>
                I'm drawn to problems where the interesting part is engineering the system around
                the model, not just the model itself. Outside of school, I build things people use
                and explore the corners of cybersecurity and ML that don't show up in coursework.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-[220px] aspect-[4/5] mx-auto md:mx-0 rounded-lg overflow-hidden border border-border/60">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pfplinkedin.PNG-8DFEwvy1CjGFwXheMAoHz8jJof3Te2.jpeg"
              alt="Santosh Sureshkumar"
              fill
              sizes="220px"
              className="object-cover object-top"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

export default function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-gray-800/50">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{skills.join(", ")}</p>
        </div>
      </div>
    </motion.div>
  )
}


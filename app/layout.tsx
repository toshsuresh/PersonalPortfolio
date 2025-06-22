import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Santosh Sureshkumar - Software Engineer & Data Scientist",
  description:
    "Portfolio of Santosh Sureshkumar, a Computer Science and Economics student at University of Maryland with experience in software engineering and data science.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

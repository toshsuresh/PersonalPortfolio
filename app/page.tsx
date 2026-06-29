import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-6 pt-32">
        <p className="text-muted-foreground font-mono text-sm">
          Foundation reset complete. Building sections in subsequent units.
        </p>
      </main>
    </div>
  )
}

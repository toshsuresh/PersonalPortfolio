import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SelectedWork from "@/components/selected-work"
import AboutSection from "@/components/about-section"
import ExperienceList from "@/components/experience-list"
import ContactFooter from "@/components/contact-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AboutSection />
        <ExperienceList />
        <ContactFooter />
      </main>
    </div>
  )
}

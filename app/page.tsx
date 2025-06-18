import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"
import { ProjectsSection } from "@/components/projects-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SmoothScroll />
      <Header />
      <HeroSection />
      <TechnologySection />
      <ProjectsSection />
      <VisionSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

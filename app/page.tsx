import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="relative">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <StatsSection />
    </main>
  )
}

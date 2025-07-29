import { Navigation } from "@/components/navigation"
import { AnimatedBackground } from "@/components/animated-background"
import { DashboardContent } from "./components/dashboard-content"

export default function Dashboard() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <Navigation />
      <div className="pt-16">
        <DashboardContent />
      </div>
    </main>
  )
}

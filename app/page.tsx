import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesShowcase } from "@/components/features-showcase"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { ServicesPreview } from "@/components/services-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesShowcase />
      <PortfolioPreview />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}

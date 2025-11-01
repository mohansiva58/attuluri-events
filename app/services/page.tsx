import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ServicesMenu } from "@/components/services-menu"
import { ServiceReviews } from "@/components/service-reviews"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Premium Event Services | Attuluri Events",
  description:
    "Explore our comprehensive event services: cinematic setups, flower decorations, DJ & lighting systems, fireworks displays, 4K photography, and catering. Professional event solutions tailored to your celebration.",
  keywords:
    "event services, wedding services, party decoration, DJ services, videography, catering services, event setup, professional event planning",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-12 px-4 bg-gradient-to-br from-primary/20 via-background to-accent/20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ✨ Premium Services
          </span>
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Comprehensive Event Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your celebration into an unforgettable cinematic experience with our award-winning services. From
            stunning setups to immersive entertainment, we handle every detail.
          </p>
        </div>
      </div>

      <ServicesMenu />
      <ServiceReviews />
      <Footer />
    </main>
  )
}

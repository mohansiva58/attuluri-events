import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ServicesMenu } from "@/components/services-menu"
import { ServiceReviews } from "@/components/service-reviews"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Premium Event Services | Attuluri Events",
  description:
    "Explore our comprehensive event services: cinematic setups, flower decorations, DJ & lighting systems, fireworks displays, 4K photography, and catering.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ background: "oklch(0.06 0.01 280)" }}>
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse at 60% 0%, oklch(0.78 0.16 82 / 0.07) 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        {/* Thin top gold line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
            <span className="section-label">What We Offer</span>
          </div>
          <h1
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
          >
            Comprehensive Event
            <br />
            <span className="text-gold-gradient">Solutions</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            From cinematic stage designs to exquisite catering — every detail executed with unparalleled artistry and precision.
          </p>
        </div>
      </section>

      <ServicesMenu />
      <ServiceReviews />
      <Footer />
    </main>
  )
}

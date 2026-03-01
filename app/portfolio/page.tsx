import { Header } from "@/components/header"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen" style={{ background: "oklch(0.06 0.01 280)" }}>
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse at 30% 0%, oklch(0.78 0.16 82 / 0.06) 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
            <span className="section-label">Our Work</span>
          </div>
          <h1
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
          >
            Moments Crafted
            <br />
            <span className="text-gold-gradient">For Eternity</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            A curated gallery of our finest events — each one a cinematic story of joy, elegance, and unforgettable celebration.
          </p>
        </div>
      </section>

      <PortfolioGallery />
      <Footer />
    </main>
  )
}

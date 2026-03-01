import { Header } from "@/components/header"
import { About } from "@/components/about-section"
import { ExpandedTestimonials } from "@/components/expanded-testimonials"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "oklch(0.06 0.01 280)" }}>
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.16 82 / 0.07) 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
            <span className="section-label">Our Story</span>
          </div>
          <h1
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
          >
            15 Years of Creating
            <br />
            <span className="text-gold-gradient">Unforgettable Memories</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            Vijayawada's most trusted name in premium event planning — passionate storytellers dedicated to crafting celebrations that transcend the ordinary.
          </p>
        </div>
      </section>

      <About />
      <ExpandedTestimonials />
      <Footer />
    </main>
  )
}

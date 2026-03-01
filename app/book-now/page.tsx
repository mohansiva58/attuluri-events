"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingTabs } from "@/components/booking-tabs"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BookNowPage() {
  const searchParams = useSearchParams()
  const [activeService, setActiveService] = useState("movie-setup")

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setActiveService(service)
    }
  }, [searchParams])

  return (
    <main className="min-h-screen" style={{ background: "oklch(0.06 0.01 280)" }}>
      <Header />

      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div style={{ background: "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.16 82 / 0.07) 0%, transparent 60%)" }} className="absolute inset-0" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }} />
            <span className="section-label">Begin Your Journey</span>
          </div>
          <h1
            className="font-serif font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
          >
            Reserve Your
            <br />
            <span className="text-gold-gradient">Dream Event</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
            Select a service and share your vision — our team will craft a personalized proposal tailored to your celebration.
          </p>
        </div>
      </section>

      {/* Booking Area */}
      <section className="pb-32" style={{ background: "oklch(0.06 0.01 280)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <BookingTabs initialService={activeService} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

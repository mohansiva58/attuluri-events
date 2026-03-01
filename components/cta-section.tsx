import Link from "next/link"
import { CheckCircle2, Phone } from "lucide-react"

const promises = [
  "Fully custom event planning tailored to your vision",
  "Award-winning photography and 4K videography",
  "Professional on-site management — 0 stress for you",
  "24/7 dedicated support throughout your event",
]

export function CTASection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.015 280)" }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, oklch(0.78 0.16 82 / 0.06) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden"
        style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        <img
          src="/bride-and-groom-at-wedding-celebration-with-firewo.jpg"
          alt="Celebration"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.55) saturate(0.8)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, oklch(0.07 0.015 280) 0%, oklch(0.07 0.015 280 / 0.15) 100%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="h-px w-12"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }}
            />
            <span className="section-label">Ready to Begin?</span>
          </div>

          {/* Headline */}
          <h2
            className="font-serif font-bold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontFamily: "Cormorant Garamond, serif",
              color: "oklch(0.95 0.01 60)",
            }}
          >
            Your Unforgettable
            <br />
            Celebration <span className="text-gold-gradient">Awaits</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-10"
            style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
          >
            Let us craft a cinematic experience that transforms your event into
            an enduring masterpiece — a memory your family will cherish forever.
          </p>

          {/* Promises */}
          <ul className="space-y-3 mb-10">
            {promises.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "oklch(0.78 0.16 82)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "oklch(0.7 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book-now" className="btn-gold">
              Start Planning Today
            </Link>
            <a
              href="tel:+918897778788"
              className="btn-gold-outline inline-flex items-center gap-2 justify-center"
            >
              <Phone size={14} />
              +91 8897778788
            </a>
          </div>

          {/* Trust badge */}
          <div
            className="mt-12 pt-8 flex flex-wrap gap-8"
            style={{ borderTop: "1px solid oklch(0.78 0.16 82 / 0.1)" }}
          >
            {[
              { value: "500+", label: "Events" },
              { value: "15+", label: "Years" },
              { value: "98%", label: "Satisfaction" },
            ].map((item, i) => (
              <div key={i}>
                <div
                  className="font-serif text-2xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #F5D78E 0%, #D4AF37 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "Cormorant Garamond, serif",
                  }}
                >
                  {item.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.55 0.01 60)", letterSpacing: "0.15em", fontFamily: "Jost, sans-serif" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

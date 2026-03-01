import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Movie-Style Décor",
    description: "Transform your venue into a cinematic masterpiece with signature movie-style setups that leave guests speechless.",
    highlights: ["Stage Design", "Props & Set Design", "Themed Decorations"],
    href: "/services#movie-style",
  },
  {
    number: "02",
    title: "Lighting & Fireworks",
    description: "Create magical, unforgettable moments with professional LED installations and spectacular fireworks displays.",
    highlights: ["LED Screens", "Professional Lighting", "Fireworks Shows"],
    href: "/services#lighting",
  },
  {
    number: "03",
    title: "4K Photography & Video",
    description: "Capture every precious moment in stunning 4K cinematic quality — timeless memories that last forever.",
    highlights: ["4K Videography", "Drone Coverage", "Edited Albums"],
    href: "/services#photography",
  },
  {
    number: "04",
    title: "Catering & Hospitality",
    description: "Exquisite culinary experiences curated by top chefs, with personalized menus and immaculate presentation.",
    highlights: ["Custom Menus", "Professional Service", "Multi-Cuisine"],
    href: "/services#catering",
  },
]

export function ServicesPreview() {
  return (
    <section
      id="services"
      className="py-32 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.015 280)" }}
    >
      {/* Background decoration */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.78 0.16 82 / 0.2), transparent)",
          left: "calc(50% - 1px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div
              className="h-px w-16"
              style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }}
            />
            <span className="section-label">What We Do</span>
            <div
              className="h-px w-16"
              style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }}
            />
          </div>
          <h2
            className="font-serif font-bold leading-tight"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: "Cormorant Garamond, serif",
              color: "oklch(0.95 0.01 60)",
            }}
          >
            Premium Event <span className="text-gold-gradient">Services</span>
          </h2>
        </div>

        {/* Services — alternating layout */}
        <div className="space-y-1">
          {services.map((service, i) => (
            <div
              key={i}
              className="group grid lg:grid-cols-12 gap-6 items-center px-8 py-8 transition-all duration-500 relative"
              style={{
                borderBottom: "1px solid oklch(0.78 0.16 82 / 0.08)",
              }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, oklch(0.78 0.16 82 / 0.03) 0%, transparent 100%)",
                }}
              />

              {/* Number */}
              <div className="lg:col-span-1">
                <span
                  className="font-serif text-4xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {service.number}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h3
                  className="font-serif font-semibold text-2xl transition-colors duration-300 group-hover:text-primary"
                  style={{
                    color: "oklch(0.92 0.01 60)",
                    fontFamily: "Cormorant Garamond, serif",
                    color: "oklch(0.9 0.01 60)",
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1"
                      style={{
                        color: "oklch(0.78 0.16 82)",
                        border: "1px solid oklch(0.78 0.16 82 / 0.2)",
                        borderRadius: "2px",
                        fontFamily: "Jost, sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="lg:col-span-3 flex lg:justify-end">
                <Link
                  href={service.href}
                  className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: "oklch(0.78 0.16 82)", letterSpacing: "0.1em", textDecoration: "none" }}
                >
                  <span>EXPLORE</span>
                  <div
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                    style={{ borderColor: "oklch(0.78 0.16 82 / 0.5)" }}
                  >
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-gold">
            All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

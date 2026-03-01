import { Sparkles, Flower2, Music, Camera, Zap, Users, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Movie-Style Setups",
    description: "Cinematic decorations and stage designs that transform any venue into a breathtaking production",
    number: "01",
  },
  {
    icon: Flower2,
    title: "Flower Decorations",
    description: "Mesmerizing floral arrangements and flower showers that create magical, timeless moments",
    number: "02",
  },
  {
    icon: Zap,
    title: "Lighting & Effects",
    description: "Dazzling LED installations, fairy lights, and fireworks that illuminate your celebration",
    number: "03",
  },
  {
    icon: Music,
    title: "DJ & Live Programs",
    description: "Professional DJs, orchestras, and live performances from handpicked top artists",
    number: "04",
  },
  {
    icon: Camera,
    title: "4K Coverage",
    description: "Professional cinematic photo and video coverage to preserve every precious moment forever",
    number: "05",
  },
  {
    icon: Users,
    title: "Complete Planning",
    description: "Catering, accommodation, transport, and end-to-end flawless event management",
    number: "06",
  },
]

export function FeaturesShowcase() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "oklch(0.07 0.01 280)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, oklch(0.78 0.16 82 / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20 items-end">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px w-12"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }}
              />
              <span className="section-label">What We Offer</span>
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontFamily: "Cormorant Garamond, serif",
                color: "oklch(0.95 0.01 60)",
              }}
            >
              Premium Event
              <br />
              <span className="text-gold-gradient">Services</span>
            </h2>
          </div>
          <div>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
            >
              Every detail crafted to absolute perfection. We bring your vision to life
              with unparalleled artistry and professional excellence.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "oklch(0.78 0.16 82 / 0.1)" }}>
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={i}
                className="group relative p-8 transition-all duration-500"
                style={{
                  background: "oklch(0.07 0.01 280)",
                }}
              >
                {/* Hover background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, oklch(0.78 0.16 82 / 0.05) 0%, transparent 100%)",
                  }}
                />

                {/* Number */}
                <div
                  className="absolute top-6 right-8 font-serif text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none"
                  style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {feature.number}
                </div>

                {/* Icon */}
                <div
                  className="mb-6 w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-500"
                  style={{
                    background: "oklch(0.78 0.16 82 / 0.1)",
                    border: "1px solid oklch(0.78 0.16 82 / 0.2)",
                  }}
                >
                  <Icon size={22} style={{ color: "oklch(0.78 0.16 82)" }} />
                </div>

                {/* Content */}
                <h3
                  className="font-serif font-semibold text-xl mb-3"
                  style={{ color: "oklch(0.92 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
                >
                  {feature.description}
                </p>

                {/* Arrow */}
                <div
                  className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1"
                  style={{ color: "oklch(0.78 0.16 82)", letterSpacing: "0.1em" }}
                >
                  <span>LEARN MORE</span>
                  <ArrowUpRight size={14} />
                </div>

                {/* Bottom gold line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

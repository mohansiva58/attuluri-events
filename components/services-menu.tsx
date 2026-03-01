"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowUpRight, X } from "lucide-react"

const services = [
  {
    id: "movie-style",
    title: "Movie-Style Event Setups",
    icon: "🎬",
    shortDesc: "Cinematic stage designs and immersive setups",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    fullDescription:
      "Transform your venue into a cinematic masterpiece with our signature movie-style setups. Our expert designers create stunning stage designs, elaborate props, and thematic decorations that transport your guests into a world of fantasy and elegance.",
    features: [
      "Custom stage design and architecture",
      "Themed set pieces and props",
      "Professional backdrop installations",
      "Red carpet and entrance setup",
      "Interactive stage elements",
      "Projection mapping and visuals",
    ],
    pricing: "Starting from ₹2,50,000",
    portfolio: ["Grand Wedding Celebration", "Cinematic Birthday Bash", "Sangeet Ceremony"],
    bookingId: "movie-setup",
  },
  {
    id: "flower-decor",
    title: "Flower Decorations",
    icon: "🌸",
    shortDesc: "Mesmerizing floral arrangements and showers",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
    fullDescription:
      "Create magical moments with our exquisite floral decorations. From elaborate centerpieces to breathtaking flower showers, our florists craft stunning arrangements that bring elegance and fragrance to every corner of your celebration.",
    features: [
      "Elaborate floral arrangements",
      "Flower shower installations",
      "Centerpiece designs",
      "Wall and corridor decorations",
      "Themed flower combinations",
      "Fresh flower sourcing",
    ],
    pricing: "Starting from ₹1,50,000",
    portfolio: ["Elegant Garden Wedding", "Sangeet Ceremony", "Mehndi Function"],
    bookingId: "flowers",
  },
  {
    id: "lighting-dj",
    title: "Lighting & DJ Systems",
    icon: "💡",
    shortDesc: "Dazzling lights and professional sound",
    image: "/professional-lighting-dj-system-stage-events.jpg",
    fullDescription:
      "Illuminate your event with state-of-the-art lighting systems and professional DJ services. Our team creates dynamic light shows, ambient lighting, and premium sound experiences that keep energy high throughout your celebration.",
    features: [
      "LED lighting and effects",
      "Professional sound systems",
      "Expert DJ services",
      "Dance floor lighting",
      "Stage lighting design",
      "Audio visual coordination",
    ],
    pricing: "Starting from ₹1,00,000",
    portfolio: ["Cinematic Birthday Bash", "Corporate Gala Dinner", "Annual Cultural Festival"],
    bookingId: "lighting",
  },
  {
    id: "fireworks",
    title: "Fireworks & Cinematic Effects",
    icon: "✨",
    shortDesc: "Spectacular displays and visual effects",
    image: "/fireworks-display-night-sky-celebration-pyrotechni.jpg",
    fullDescription:
      "Add sparkle and spectacle to your event with professionally managed fireworks displays and cinematic effects. Our experienced technicians ensure safe, stunning visual experiences that create unforgettable moments.",
    features: [
      "Professional fireworks displays",
      "Special effects lighting",
      "Pyrotechnic shows",
      "Safety management",
      "Custom show choreography",
      "Video wall displays",
    ],
    pricing: "Starting from ₹3,00,000",
    portfolio: ["Grand Wedding Celebration", "New Year Gala", "Anniversary Celebration"],
    bookingId: "fireworks",
  },
  {
    id: "photography",
    title: "4K Photography & Videography",
    icon: "📹",
    shortDesc: "Professional coverage in stunning 4K quality",
    image: "/4k-photography-videography-professional-camera-wed.jpg",
    fullDescription:
      "Capture every precious moment in stunning 4K quality. Our professional cinematographers and photographers document your celebration with artistic vision and technical excellence, creating timeless memories.",
    features: [
      "4K video coverage",
      "Professional photography",
      "Aerial drone footage",
      "Same-day video editing",
      "Photo albums and prints",
      "Cinematic highlight reels",
    ],
    pricing: "Starting from ₹1,50,000",
    portfolio: ["All Major Events", "4K Wedding Coverage", "Cinematic Highlight Reels"],
    bookingId: "photography",
  },
  {
    id: "catering",
    title: "Catering & Hospitality",
    icon: "🍽️",
    shortDesc: "Exquisite cuisine and exceptional service",
    image: "/luxury-catering-gourmet-food-event-hospitality.jpg",
    fullDescription:
      "Delight your guests with exquisite culinary experiences. From vegetarian to non-vegetarian menus, gourmet preparations to charming hosts, we handle every aspect of your event's hospitality with grace and expertise.",
    features: [
      "Customized menu planning",
      "Vegetarian & non-vegetarian options",
      "Gourmet food preparation",
      "Professional waiting staff",
      "Guest accommodation coordination",
      "Dietary preference accommodation",
    ],
    pricing: "Starting from ₹500 per person",
    portfolio: ["Corporate Gala Dinner", "Wedding Receptions", "Conference Events"],
    bookingId: "catering",
  },
]

export function ServicesMenu() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const router = useRouter()

  const handleBookService = (bookingId: string) => {
    router.push(`/book-now?service=${bookingId}`)
  }

  return (
    <section className="py-20" style={{ background: "oklch(0.07 0.01 280)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "oklch(0.78 0.16 82 / 0.1)" }}>
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group text-left p-8 transition-all duration-500 relative"
              style={{ background: "oklch(0.07 0.01 280)" }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(135deg, oklch(0.78 0.16 82 / 0.05) 0%, transparent 100%)" }}
              />
              {/* Number */}
              <div
                className="absolute top-5 right-6 font-serif text-5xl font-bold opacity-5 group-hover:opacity-10 transition-opacity duration-500 select-none"
                style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Cormorant Garamond, serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              <h3
                className="font-serif font-semibold text-xl mb-2 transition-colors duration-300"
                style={{
                  color: "oklch(0.92 0.01 60)",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm mb-5 leading-relaxed"
                style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
              >
                {service.shortDesc}
              </p>
              <div
                className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: "oklch(0.78 0.16 82)", letterSpacing: "0.1em" }}
              >
                <span>EXPLORE</span>
                <ArrowUpRight size={14} />
              </div>
              {/* Gold bottom line */}
              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, oklch(0.78 0.16 82), transparent)" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "oklch(0 0 0 / 0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelectedService(null)}
        >
          <div
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            style={{
              background: "oklch(0.09 0.01 280)",
              border: "1px solid oklch(0.78 0.16 82 / 0.2)",
              borderRadius: "4px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold top border */}
            <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82), transparent)" }} />

            {/* Close */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center transition-all duration-300 z-10"
              style={{ border: "1px solid oklch(0.78 0.16 82 / 0.3)", borderRadius: "2px", color: "oklch(0.6 0.01 60)" }}
            >
              <X size={16} />
            </button>

            <div className="p-8 lg:p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="text-5xl mb-4">{selectedService.icon}</div>
                <h2
                  className="font-serif font-bold mb-2"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontFamily: "Cormorant Garamond, serif", color: "oklch(0.95 0.01 60)" }}
                >
                  {selectedService.title}
                </h2>
                <p className="section-label" style={{ color: "oklch(0.78 0.16 82)", fontSize: "0.7rem" }}>
                  {selectedService.pricing}
                </p>
              </div>

              {/* Image */}
              <div className="relative mb-8 overflow-hidden" style={{ borderRadius: "4px", height: "280px" }}>
                <img
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  style={{ filter: "brightness(0.7) saturate(0.8)" }}
                />
                <div className="absolute top-3 left-3 w-6 h-6" style={{ borderTop: "1.5px solid oklch(0.78 0.16 82)", borderLeft: "1.5px solid oklch(0.78 0.16 82)" }} />
                <div className="absolute bottom-3 right-3 w-6 h-6" style={{ borderBottom: "1.5px solid oklch(0.78 0.16 82)", borderRight: "1.5px solid oklch(0.78 0.16 82)" }} />
              </div>

              {/* Description */}
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "oklch(0.65 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}
              >
                {selectedService.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-10">
                <h3
                  className="font-serif font-semibold text-xl mb-5"
                  style={{ color: "oklch(0.9 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  Key Features
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-4 mt-0.5 flex-shrink-0" style={{ background: "oklch(0.78 0.16 82)", borderRadius: "999px" }} />
                      <span className="text-sm" style={{ color: "oklch(0.65 0.01 60)", fontFamily: "Jost, sans-serif" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio tags */}
              <div className="mb-10">
                <h3
                  className="font-serif font-semibold text-lg mb-4"
                  style={{ color: "oklch(0.9 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  Featured Events
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.portfolio.map((event, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5"
                      style={{
                        color: "oklch(0.78 0.16 82)",
                        border: "1px solid oklch(0.78 0.16 82 / 0.25)",
                        borderRadius: "2px",
                        fontFamily: "Jost, sans-serif",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {event}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    handleBookService(selectedService.bookingId)
                    setSelectedService(null)
                  }}
                  className="btn-gold flex-1"
                >
                  Book This Service
                </button>
                <button className="btn-gold-outline flex-1">
                  Get Custom Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

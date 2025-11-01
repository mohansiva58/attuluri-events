"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group text-left p-8 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.shortDesc}</p>
              <div className="inline-flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition">
                Explore <ChevronRight size={20} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-background max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="float-right text-3xl text-muted-foreground hover:text-foreground transition"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="text-6xl mb-4">{selectedService.icon}</div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-2">
                {selectedService.title}
              </h2>
              <p className="text-xl text-accent font-semibold">{selectedService.pricing}</p>
            </div>

            {/* Image */}
            <img
              src={selectedService.image || "/placeholder.svg"}
              alt={selectedService.title}
              className="w-full h-80 object-cover rounded-xl mb-8"
            />

            {/* Description */}
            <p className="text-lg text-foreground leading-relaxed mb-8">{selectedService.fullDescription}</p>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedService.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Portfolio */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Featured in Events</h3>
              <div className="flex flex-wrap gap-3">
                {selectedService.portfolio.map((event, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {event}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  handleBookService(selectedService.bookingId)
                  setSelectedService(null)
                }}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold"
              >
                Book This Service
              </button>
              <button className="flex-1 border-2 border-primary text-primary py-3 rounded-lg hover:bg-primary/10 transition font-semibold">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

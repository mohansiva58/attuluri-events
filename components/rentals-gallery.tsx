"use client"

import { useState } from "react"
import { Heart, Clock, ShoppingCart } from "lucide-react"

const rentalItems = [
  {
    id: 1,
    name: "LED Spotlight System",
    category: "Lighting",
    image: "/professional-lighting-dj-system-stage-events.jpg",
    pricePerDay: "₹5,000",
    pricePerEvent: "₹8,000",
    description: "Professional RGB LED spotlights with color control",
    availability: "Available",
    minimumRental: "1 day",
    features: ["50W RGB LED", "DMX Compatible", "Includes Stand", "Power Cables"],
  },
  {
    id: 2,
    name: "Round Banquet Tables (20pcs)",
    category: "Furniture",
    image: "/round-banquet-tables-decoration.jpg",
    pricePerDay: "₹3,000",
    pricePerEvent: "₹4,500",
    description: "Elegant round tables perfect for receptions",
    availability: "Available",
    minimumRental: "1 day",
    features: ["60-inch diameter", "Premium finish", "Seating for 6-8", "Delivery included"],
  },
  {
    id: 3,
    name: "Chiavari Chairs (100pcs)",
    category: "Furniture",
    image: "/chiavari-chairs-elegant-wedding.jpg",
    pricePerDay: "₹2,500",
    pricePerEvent: "₹3,500",
    description: "Premium designer chairs for weddings and events",
    availability: "Available",
    minimumRental: "1 day",
    features: ["Gold/Silver options", "Stackable design", "Cushion included", "100 pieces"],
  },
  {
    id: 4,
    name: "Professional DJ Equipment",
    category: "Audio",
    image: "/dj-equipment-turntable-mixer-speakers.jpg",
    pricePerDay: "₹8,000",
    pricePerEvent: "₹12,000",
    description: "Complete DJ setup with mixer, turntables, and speakers",
    availability: "Available",
    minimumRental: "4 hours",
    features: ["Pioneer Equipment", "Wireless Mic", "Subwoofer included", "Setup assistance"],
  },
  {
    id: 5,
    name: "Flower Arch Decoration",
    category: "Decor",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
    pricePerDay: "₹6,000",
    pricePerEvent: "₹9,000",
    description: "Pre-designed flower arch with live arrangements",
    availability: "Available",
    minimumRental: "1 day",
    features: ["Fresh flowers", "Custom colors", "Installation included", "Customizable design"],
  },
  {
    id: 6,
    name: "Stage & Podium Setup",
    category: "Stage",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    pricePerDay: "₹7,500",
    pricePerEvent: "₹11,000",
    description: "Professional stage with podium and backdrop",
    availability: "Available",
    minimumRental: "1 day",
    features: ["Modular design", "12x10ft stage", "Professional podium", "Lighting ready"],
  },
  {
    id: 7,
    name: "Catering Buffet Setup",
    category: "Catering",
    image: "/luxury-catering-gourmet-food-event-hospitality.jpg",
    pricePerDay: "₹4,000",
    pricePerEvent: "₹6,000",
    description: "Complete buffet counter with heating units",
    availability: "Available",
    minimumRental: "1 day",
    features: ["Food warmers", "Display counters", "Serving utensils", "Setup assistance"],
  },
  {
    id: 8,
    name: "Projection & Screen System",
    category: "Audio-Visual",
    image: "/projector-screen-system-4k-display.jpg",
    pricePerDay: "₹3,500",
    pricePerEvent: "₹5,500",
    description: "4K projector with motorized screen",
    availability: "Available",
    minimumRental: "1 day",
    features: ["4K Resolution", "100-inch screen", "HDMI/WiFi input", "Professional calibration"],
  },
]

export function RentalsGallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof rentalItems)[0] | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const [category, setCategory] = useState("All")

  const categories = ["All", ...new Set(rentalItems.map((item) => item.category))]
  const filtered = category === "All" ? rentalItems : rentalItems.filter((item) => item.category === category)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                category === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rentals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <button
                  onClick={() =>
                    setFavorites((prev) =>
                      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id],
                    )
                  }
                  className="absolute top-3 right-3 bg-background/90 p-2 rounded-full hover:bg-background transition"
                >
                  <Heart
                    size={20}
                    fill={favorites.includes(item.id) ? "currentColor" : "none"}
                    className={favorites.includes(item.id) ? "text-red-500" : ""}
                  />
                </button>
              </div>

              <div className="p-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif font-bold text-foreground mt-3 mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                <div className="flex items-center gap-2 text-sm text-foreground mb-3">
                  <Clock size={16} />
                  <span>{item.minimumRental}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Per Day:</span>
                    <span className="font-semibold text-primary">{item.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Per Event:</span>
                    <span className="font-semibold text-accent">{item.pricePerEvent}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition font-semibold text-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="float-right text-3xl text-muted-foreground hover:text-foreground transition"
            >
              ✕
            </button>

            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.name}
              className="w-full h-80 object-cover rounded-xl mb-6"
            />

            <h2 className="text-4xl font-serif font-bold text-foreground mb-2">{selectedItem.name}</h2>
            <p className="text-muted-foreground mb-6">{selectedItem.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-muted-foreground text-sm mb-2">Price Per Day</p>
                <p className="text-3xl font-bold text-primary">{selectedItem.pricePerDay}</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <p className="text-muted-foreground text-sm mb-2">Price Per Event</p>
                <p className="text-3xl font-bold text-accent">{selectedItem.pricePerEvent}</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-foreground mb-4">Features & Specs</h3>
            <ul className="space-y-3 mb-8">
              {selectedItem.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Booking
              </button>
              <button className="flex-1 border-2 border-primary text-primary py-3 rounded-lg hover:bg-primary/10 transition font-semibold">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

"use client"

import { useState } from "react"
import { ChevronRight, Heart } from "lucide-react"

interface PortfolioItem {
  id: number
  category: string
  title: string
  description: string
  image: string
  images: string[]
  highlights: string[]
  year: number
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: "Wedding",
    title: "Grand Wedding Celebration",
    description:
      "A stunning wedding ceremony with movie-style stage setup, stunning floral arrangements, and 4K cinematography",
    image: "/elegant-wedding-setup-with-flowers-and-lights.jpg",
    images: [
      "/elegant-wedding-setup-with-flowers-and-lights.jpg",
      "/luxury-catering-gourmet-food-event-hospitality.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
    ],
    highlights: ["Movie-style stage", "Flower showers", "Fireworks display", "4K coverage"],
    year: 2024,
  },
  {
    id: 2,
    category: "Wedding",
    title: "Elegant Garden Wedding",
    description: "Romantic garden setting with elaborate floral decorations, magical lighting, and live orchestra",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
    images: [
      "/flower-decoration-floral-arrangement-wedding-event.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
      "/4k-photography-videography-professional-camera-wed.jpg",
    ],
    highlights: ["Garden setup", "LED lighting", "Live orchestra", "Professional catering"],
    year: 2024,
  },
  {
    id: 3,
    category: "Birthday",
    title: "Cinematic Birthday Bash",
    description: "Dynamic birthday celebration with DJ, dancing lights, and professional stage setup",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    images: [
      "/cinematic-stage-setup-event-luxury-backdrop.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
      "/4k-photography-videography-professional-camera-wed.jpg",
    ],
    highlights: ["Professional DJ", "Dancing lights", "Stage setup", "Video coverage"],
    year: 2024,
  },
  {
    id: 4,
    category: "Cultural Show",
    title: "Sangeet Ceremony",
    description: "Traditional sangeet with colorful decorations, cultural performances, and interactive stage designs",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
    images: [
      "/flower-decoration-floral-arrangement-wedding-event.jpg",
      "/cinematic-stage-setup-event-luxury-backdrop.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
    ],
    highlights: ["Stage design", "Cultural decor", "Live performances", "4K videography"],
    year: 2024,
  },
  {
    id: 5,
    category: "Corporate Event",
    title: "Corporate Gala Dinner",
    description: "Sophisticated corporate event with elegant setup, professional lighting, and formal catering",
    image: "/luxury-catering-gourmet-food-event-hospitality.jpg",
    images: [
      "/luxury-catering-gourmet-food-event-hospitality.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
      "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    ],
    highlights: ["Elegant setup", "Professional lighting", "Gourmet catering", "Event coordination"],
    year: 2024,
  },
  {
    id: 6,
    category: "Birthday",
    title: "Kids Birthday Party",
    description: "Magical birthday celebration for kids with themed decorations and entertainment",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    images: [
      "/cinematic-stage-setup-event-luxury-backdrop.jpg",
      "/flower-decoration-floral-arrangement-wedding-event.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
    ],
    highlights: ["Themed decor", "Entertainment", "Photography", "Catering"],
    year: 2023,
  },
  {
    id: 7,
    category: "Cultural Show",
    title: "Annual Cultural Festival",
    description: "Large-scale cultural event with multiple stages, artistic performances, and dynamic lighting",
    image: "/fireworks-display-night-sky-celebration-pyrotechni.jpg",
    images: [
      "/fireworks-display-night-sky-celebration-pyrotechni.jpg",
      "/professional-lighting-dj-system-stage-events.jpg",
      "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    ],
    highlights: ["Multi-stage setup", "Artistic lighting", "Sound system", "Video walls"],
    year: 2023,
  },
  {
    id: 8,
    category: "Wedding",
    title: "Destination Wedding",
    description: "Luxurious wedding at scenic location with complete setup and hospitality management",
    image: "/elegant-wedding-setup-with-flowers-and-lights.jpg",
    images: [
      "/elegant-wedding-setup-with-flowers-and-lights.jpg",
      "/4k-photography-videography-professional-camera-wed.jpg",
      "/luxury-catering-gourmet-food-event-hospitality.jpg",
    ],
    highlights: ["Destination setup", "Full management", "Photography", "Guest accommodation"],
    year: 2023,
  },
]

export function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [likedItems, setLikedItems] = useState<number[]>([])

  const categories = ["All", ...Array.from(new Set(portfolioData.map((item) => item.category)))]

  const filteredItems =
    selectedCategory === "All" ? portfolioData : portfolioData.filter((item) => item.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLikedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setSelectedItem(null)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer relative overflow-hidden rounded-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(item.id)
                    }}
                    className="transition"
                  >
                    <Heart
                      size={24}
                      className={likedItems.includes(item.id) ? "fill-primary text-primary" : "text-white"}
                    />
                  </button>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-200 mb-4">{item.description}</p>
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition"
                  >
                    View Details <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail View */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-card max-w-4xl w-full max-h-96 overflow-y-auto rounded-xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-accent text-sm font-semibold">{selectedItem.category}</span>
                  <h2 className="text-4xl font-serif font-bold text-foreground mb-2">{selectedItem.title}</h2>
                  <p className="text-muted-foreground">{selectedItem.year}</p>
                </div>
                <button onClick={() => setSelectedItem(null)} className="text-2xl hover:opacity-50 transition">
                  ✕
                </button>
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed">{selectedItem.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedItem.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {selectedItem.images.map((image, i) => (
                  <img
                    key={i}
                    src={image || "/placeholder.svg"}
                    alt={`${selectedItem.title} ${i + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold">
                Interested in Similar Event?
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

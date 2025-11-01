"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    category: "Wedding",
    title: "Grand Wedding Celebration",
    image: "/elegant-wedding-setup-with-flowers-and-lights.jpg",
    color: "from-red-400",
  },
  {
    id: 2,
    category: "Birthday",
    title: "Cinematic Birthday Bash",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
    color: "from-blue-400",
  },
  {
    id: 3,
    category: "Cultural Show",
    title: "Sangeet Ceremony",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
    color: "from-purple-400",
  },
  {
    id: 4,
    category: "Corporate Event",
    title: "Corporate Gala Dinner",
    image: "/luxury-catering-gourmet-food-event-hospitality.jpg",
    color: "from-amber-400",
  },
]

export function PortfolioPreview() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Wedding", "Birthday", "Cultural Show", "Corporate Event"]

  return (
    <section id="portfolio" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">Unforgettable Moments</h3>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer relative overflow-hidden rounded-xl">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-96 object-cover group-hover:scale-110 transition duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${item.color}/40 to-transparent opacity-0 group-hover:opacity-100 transition`}
              ></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-accent text-sm font-semibold mb-2">{item.category}</p>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h4>
                <button className="inline-flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition">
                  View Gallery <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

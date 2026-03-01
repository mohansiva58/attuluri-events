"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    category: "Wedding",
    title: "Grand Wedding Celebration",
    subtitle: "Royal Venue · 2024",
    image: "/elegant-wedding-setup-with-flowers-and-lights.jpg",
  },
  {
    id: 2,
    category: "Birthday",
    title: "Cinematic Birthday Bash",
    subtitle: "Luxury Hotel · 2024",
    image: "/cinematic-stage-setup-event-luxury-backdrop.jpg",
  },
  {
    id: 3,
    category: "Cultural Show",
    title: "Sangeet Ceremony",
    subtitle: "Heritage Venue · 2023",
    image: "/flower-decoration-floral-arrangement-wedding-event.jpg",
  },
  {
    id: 4,
    category: "Corporate Event",
    title: "Corporate Gala Dinner",
    subtitle: "Five-Star Hotel · 2024",
    image: "/luxury-catering-gourmet-food-event-hospitality.jpg",
  },
]

const categories = ["All", "Wedding", "Birthday", "Cultural Show", "Corporate Event"]

function CornerAccent() {
  return (
    <>
      <div
        className="absolute top-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          borderTop: "1.5px solid oklch(0.78 0.16 82)",
          borderLeft: "1.5px solid oklch(0.78 0.16 82)",
        }}
      />
      <div
        className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          borderBottom: "1.5px solid oklch(0.78 0.16 82)",
          borderRight: "1.5px solid oklch(0.78 0.16 82)",
        }}
      />
    </>
  )
}

export function PortfolioPreview() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filtered =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="portfolio"
      className="py-32 relative"
      style={{ background: "oklch(0.06 0.01 280)" }}
    >
      {/* Left accent line */}
      <div
        className="absolute left-6 top-0 bottom-0 w-px hidden xl:block"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.78 0.16 82 / 0.15), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px w-12"
                style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82))" }}
              />
              <span className="section-label">Our Portfolio</span>
            </div>
            <h2
              className="font-serif font-bold leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontFamily: "Cormorant Garamond, serif",
                color: "oklch(0.95 0.01 60)",
              }}
            >
              Unforgettable
              <br />
              <span className="text-gold-gradient">Moments</span>
            </h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="text-xs font-medium tracking-widest uppercase transition-all duration-300 px-4 py-2"
                style={{
                  fontFamily: "Jost, sans-serif",
                  letterSpacing: "0.15em",
                  background:
                    selectedCategory === cat
                      ? "linear-gradient(135deg, #D4AF37 0%, #F5D78E 100%)"
                      : "transparent",
                  color:
                    selectedCategory === cat
                      ? "oklch(0.08 0.01 280)"
                      : "oklch(0.6 0.01 60)",
                  border: `1px solid ${selectedCategory === cat ? "transparent" : "oklch(0.78 0.16 82 / 0.2)"}`,
                  borderRadius: "2px",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="group relative overflow-hidden cursor-pointer"
              style={{ borderRadius: "4px", aspectRatio: i === 0 ? "4/3" : "3/2" }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ filter: "brightness(0.7) saturate(0.8)" }}
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(to top, oklch(0.04 0.01 280 / 0.95) 0%, oklch(0.04 0.01 280 / 0.3) 60%, transparent 100%)",
                }}
              />

              {/* Gold overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(ellipse at center, oklch(0.78 0.16 82 / 0.08) 0%, transparent 70%)",
                }}
              />

              {/* Corner accents */}
              <CornerAccent />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="section-label mb-2"
                  style={{ fontSize: "0.6rem", color: "oklch(0.78 0.16 82 / 0.8)" }}
                >
                  {item.category}
                </p>
                <h3
                  className="font-serif font-bold text-2xl mb-1 transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: "oklch(0.95 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "oklch(0.6 0.01 60)", fontFamily: "Jost, sans-serif" }}
                >
                  {item.subtitle}
                </p>
                <div
                  className="flex items-center gap-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: "oklch(0.78 0.16 82)", letterSpacing: "0.1em" }}
                >
                  <span>VIEW GALLERY</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn-gold-outline">
            View All Work
          </Link>
        </div>
      </div>
    </section>
  )
}

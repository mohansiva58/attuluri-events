"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Ravi",
    event: "Wedding Ceremony",
    location: "Vijayawada",
    year: "2024",
    text: "Attuluri Events turned our wedding into a magical cinematic experience. Every detail was perfect, and our guests still talk about it months later. They are truly the memory makers — worth every single moment.",
    rating: 5,
    initial: "PR",
  },
  {
    name: "Arjun Sharma",
    event: "Birthday Celebration",
    location: "Hyderabad",
    year: "2024",
    text: "The level of professionalism and creativity is unmatched. From the stage setup to the fireworks finale, everything was spectacular. They exceeded every expectation we had. Worth every penny!",
    rating: 5,
    initial: "AS",
  },
  {
    name: "Neha & Family",
    event: "Sangeet Ceremony",
    location: "Guntur",
    year: "2023",
    text: "They brought our vision to life with stunning flower decorations and impeccable lighting design. The 4K cinematography captured all our precious moments with such artistry and beauty.",
    rating: 5,
    initial: "NF",
  },
  {
    name: "Arun Patel",
    event: "Corporate Gala Dinner",
    location: "Amaravati",
    year: "2024",
    text: "The team executed a flawless corporate event. The ambiance, live entertainment, and catering were all absolutely top-notch. Highly recommended for premium events of any scale.",
    rating: 5,
    initial: "AP",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = (idx: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(idx)
      setIsAnimating(false)
    }, 300)
  }

  const nextSlide = () => goTo((currentIndex + 1) % testimonials.length)
  const prevSlide = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const t = testimonials[currentIndex]

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
      style={{ background: "oklch(0.06 0.01 280)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, oklch(0.78 0.16 82 / 0.05) 0%, transparent 60%)",
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
            <span className="section-label">Client Stories</span>
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
            Memories That <span className="text-gold-gradient">Last Forever</span>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative p-10 lg:p-16"
            style={{
              background: "oklch(0.09 0.01 280)",
              border: "1px solid oklch(0.78 0.16 82 / 0.15)",
              borderRadius: "4px",
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {/* Gold corner accents */}
            <div
              className="absolute top-4 left-4 w-8 h-8"
              style={{
                borderTop: "1.5px solid oklch(0.78 0.16 82 / 0.5)",
                borderLeft: "1.5px solid oklch(0.78 0.16 82 / 0.5)",
              }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8"
              style={{
                borderBottom: "1.5px solid oklch(0.78 0.16 82 / 0.5)",
                borderRight: "1.5px solid oklch(0.78 0.16 82 / 0.5)",
              }}
            />

            {/* Quote icon */}
            <div className="mb-8">
              <Quote size={32} style={{ color: "oklch(0.78 0.16 82 / 0.3)" }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} style={{ color: "oklch(0.78 0.16 82)", fontSize: "1rem" }}>★</span>
              ))}
            </div>

            {/* Text */}
            <p
              className="text-xl lg:text-2xl leading-relaxed mb-10 italic font-serif"
              style={{
                color: "oklch(0.85 0.01 60)",
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
              }}
            >
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, oklch(0.78 0.16 82 / 0.15) 0%, oklch(0.78 0.16 82 / 0.05) 100%)",
                  border: "1px solid oklch(0.78 0.16 82 / 0.3)",
                  color: "oklch(0.78 0.16 82)",
                  fontFamily: "Cormorant Garamond, serif",
                }}
              >
                {t.initial}
              </div>
              <div>
                <p
                  className="font-serif font-semibold text-lg"
                  style={{ color: "oklch(0.92 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "oklch(0.78 0.16 82)", fontFamily: "Jost, sans-serif", letterSpacing: "0.1em" }}
                >
                  {t.event} · {t.location} · {t.year}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center transition-all duration-300"
              style={{
                border: "1px solid oklch(0.78 0.16 82 / 0.3)",
                borderRadius: "2px",
                color: "oklch(0.78 0.16 82 / 0.7)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "oklch(0.78 0.16 82 / 0.1)"
                e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.7)"
                e.currentTarget.style.color = "oklch(0.78 0.16 82)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.3)"
                e.currentTarget.style.color = "oklch(0.78 0.16 82 / 0.7)"
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Progress dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="transition-all duration-500"
                  style={{
                    height: "2px",
                    width: i === currentIndex ? "32px" : "12px",
                    background: i === currentIndex
                      ? "linear-gradient(90deg, #D4AF37, #F5D78E)"
                      : "oklch(0.3 0.01 280)",
                    borderRadius: "999px",
                    border: "none",
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center transition-all duration-300"
              style={{
                border: "1px solid oklch(0.78 0.16 82 / 0.3)",
                borderRadius: "2px",
                color: "oklch(0.78 0.16 82 / 0.7)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "oklch(0.78 0.16 82 / 0.1)"
                e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.7)"
                e.currentTarget.style.color = "oklch(0.78 0.16 82)"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.borderColor = "oklch(0.78 0.16 82 / 0.3)"
                e.currentTarget.style.color = "oklch(0.78 0.16 82 / 0.7)"
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

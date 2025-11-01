"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Priya & Ravi",
    event: "Wedding Ceremony",
    text: "Attuluri Events turned our wedding into a magical cinematic experience. Every detail was perfect, and our guests still talk about it. They are truly the memory makers.",
    rating: 5,
  },
  {
    name: "Arjun Sharma",
    event: "Birthday Celebration",
    text: "The level of professionalism and creativity is unmatched. From the stage setup to the fireworks, everything was spectacular. Worth every penny!",
    rating: 5,
  },
  {
    name: "Neha & Family",
    event: "Cultural Show",
    text: "They brought our vision to life with stunning flower decorations and impeccable lighting. The 4K coverage captured all our precious moments beautifully.",
    rating: 5,
  },
  {
    name: "Arun Patel",
    event: "Corporate Gala",
    text: "The team executed a flawless corporate event. The ambiance, entertainment, and catering were all top-notch. Highly recommended for any large event.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Memories That Last Forever</h3>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-12">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-primary text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-xl text-foreground mb-8 leading-relaxed italic">{testimonials[currentIndex].text}</p>
            <div>
              <p className="font-serif font-bold text-foreground text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-accent text-sm">{testimonials[currentIndex].event}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition ${i === currentIndex ? "bg-primary w-8" : "bg-border w-2"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

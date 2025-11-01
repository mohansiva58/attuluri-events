"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya & Ravi Kumar",
    event: "Wedding Ceremony",
    date: "March 2024",
    text: "Attuluri Events turned our wedding into a magical cinematic experience. Every detail was perfect, from the movie-style stage to the flower showers. Our guests still talk about it. They are truly the memory makers of every celebration.",
    rating: 5,
    image: "/happy-couple-wedding.jpg",
  },
  {
    name: "Arjun Sharma",
    event: "Birthday Celebration",
    date: "February 2024",
    text: "The level of professionalism and creativity is unmatched. From the stage setup to the fireworks, everything was spectacular. The team was responsive, creative, and absolutely worth every penny. Highly recommended!",
    rating: 5,
    image: "/smiling-man-birthday-celebration.jpg",
  },
  {
    name: "Neha & Family",
    event: "Cultural Show & Sangeet",
    date: "January 2024",
    text: "They brought our vision to life with stunning flower decorations and impeccable lighting. The 4K coverage captured all our precious moments beautifully. We couldn't have asked for a better team to execute our cultural event.",
    rating: 5,
    image: "/happy-family-cultural-event.jpg",
  },
  {
    name: "Arun Patel",
    event: "Corporate Gala Dinner",
    date: "December 2023",
    text: "The team executed a flawless corporate event. The ambiance, entertainment, catering, and coordination were all top-notch. They understood our corporate vision and brought it to life perfectly.",
    rating: 5,
    image: "/professional-man-corporate.jpg",
  },
  {
    name: "Divya & Rohan",
    event: "Wedding & Reception",
    date: "November 2023",
    text: "From the initial consultation to the final moments of our reception, Attuluri Events was exceptional. They managed all the details while allowing us to enjoy our special day. Truly unforgettable!",
    rating: 5,
    image: "/newlyweds-happy-couple.jpg",
  },
  {
    name: "Sanjay Reddy",
    event: "Anniversary Party",
    date: "October 2023",
    text: "The surprise anniversary party they planned for our parents was absolutely stunning. The nostalgic decorations, entertainment, and emotional touches made it incredibly special.",
    rating: 5,
    image: "/elderly-couple-anniversary.jpg",
  },
]

export function ExpandedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedTestimonial, setSelectedTestimonial] = useState<(typeof testimonials)[0] | null>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent tracking-widest uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Memories That Last Forever</h3>
          <p className="text-muted-foreground mt-4 text-lg">
            Hear from our delighted clients about their extraordinary celebrations
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="flex-1">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-xl text-foreground mb-6 leading-relaxed italic">"{testimonials[currentIndex].text}"</p>

              <div>
                <p className="font-serif font-bold text-foreground text-xl">{testimonials[currentIndex].name}</p>
                <p className="text-accent text-sm font-semibold mb-1">{testimonials[currentIndex].event}</p>
                <p className="text-muted-foreground text-sm">{testimonials[currentIndex].date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition ${i === currentIndex ? "bg-primary w-8" : "bg-border w-2"}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* All Testimonials Grid */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">All Reviews</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <button
                key={i}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition text-left group"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-foreground mb-4 line-clamp-3 group-hover:line-clamp-none transition">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-accent text-sm">{testimonial.event}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Detail Modal */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div className="bg-card max-w-2xl w-full rounded-xl p-8" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="float-right text-2xl text-muted-foreground hover:text-foreground transition"
            >
              ✕
            </button>

            <div className="flex gap-4 mb-6">
              <img
                src={selectedTestimonial.image || "/placeholder.svg"}
                alt={selectedTestimonial.name}
                className="w-20 h-20 object-cover rounded-full"
              />
              <div>
                <p className="font-serif font-bold text-foreground text-lg">{selectedTestimonial.name}</p>
                <p className="text-accent font-semibold">{selectedTestimonial.event}</p>
                <p className="text-muted-foreground text-sm">{selectedTestimonial.date}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-6">
              {[...Array(selectedTestimonial.rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>

            <p className="text-lg text-foreground leading-relaxed mb-6 italic">"{selectedTestimonial.text}"</p>

            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition font-semibold">
              Similar Event? Get Quote
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

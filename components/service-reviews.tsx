"use client"

import type React from "react"

import { useState } from "react"
import { Star } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"

interface Review {
  id: string
  name: string
  service: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

const initialReviews: Review[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    service: "Movie-Style Setup",
    rating: 5,
    comment:
      "Absolutely stunning! The cinematic setup transformed our venue. The team was professional and attentive throughout.",
    date: "2024-10-15",
  },
  {
    id: "2",
    name: "Priya Sharma",
    service: "Flower Decorations",
    rating: 5,
    comment:
      "The flower decorations were breathtaking. Fresh, vibrant, and exactly what we envisioned for our wedding.",
    date: "2024-10-10",
  },
  {
    id: "3",
    name: "Arun Patel",
    service: "DJ & Lighting",
    rating: 4.5,
    comment: "Great energy and perfect sound quality. DJ kept the dance floor packed all night!",
    date: "2024-10-05",
  },
  {
    id: "4",
    name: "Neha Verma",
    service: "Catering",
    rating: 5,
    comment: "Delicious food and excellent service. Guests couldn't stop raving about the cuisine.",
    date: "2024-09-28",
  },
]

export function ServiceReviews() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    service: "Movie-Style Setup",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await addDoc(collection(db, "reviews"), {
        ...formData,
        date: new Date().toISOString().split("T")[0],
      })

      setReviews([
        {
          id: Date.now().toString(),
          ...formData,
          date: new Date().toISOString().split("T")[0],
        },
        ...reviews,
      ])

      setFormData({
        name: "",
        service: "Movie-Style Setup",
        rating: 5,
        comment: "",
      })
      setShowForm(false)
    } catch (error) {
      console.error("[v0] Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">Memories That Last Forever</h2>
          <p className="text-lg text-muted-foreground">What our clients say about their experience</p>
        </div>

        {/* Rating Summary */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">{avgRating}</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill={i < Math.round(Number(avgRating)) ? "currentColor" : "none"}
                  className="text-primary"
                />
              ))}
            </div>
            <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary transition"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-serif font-bold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.service}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.round(review.rating) ? "currentColor" : "none"}
                    className="text-primary"
                  />
                ))}
              </div>

              <p className="text-foreground mb-4 italic">"{review.comment}"</p>
              <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          ))}
        </div>

        {/* Review Form Toggle */}
        {!showForm && (
          <div className="text-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Share Your Experience
            </button>
          </div>
        )}

        {/* Review Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Leave a Review</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Movie-Style Setup</option>
                  <option>Flower Decorations</option>
                  <option>Lighting & DJ</option>
                  <option>Fireworks</option>
                  <option>Photography</option>
                  <option>Catering</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition"
                    >
                      <Star
                        size={28}
                        fill={star <= formData.rating ? "currentColor" : "none"}
                        className={star <= formData.rating ? "text-primary" : "text-muted-foreground"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Share your experience..."
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 border-2 border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}

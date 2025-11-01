"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { addBooking } from "@/lib/firebase-service"
import { sendBookingEmail } from "@/lib/web3forms"

interface ServiceBookingFormProps {
  serviceType: string
  serviceId: string
}

export function ServiceBookingForm({ serviceType, serviceId }: ServiceBookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    budget: "",
    specialRequirements: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const bookingData = {
        ...formData,
        serviceType,
        services: [serviceType],
        status: "pending",
      }

      // Save to Firebase
      await addBooking(bookingData)

      // Send email to admin
      await sendBookingEmail(bookingData, "admin@attuluriEvents.com")

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        venue: "",
        budget: "",
        specialRequirements: "",
      })
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError("Failed to submit booking. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full p-8 bg-card border border-border">
      <h3 className="text-2xl font-bold text-foreground mb-6">Booking Details for {serviceType}</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground">Personal Information</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Event Type *</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select event type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="corporate">Corporate Event</option>
                <option value="cultural">Cultural Show</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h4 className="text-lg font-semibold text-foreground">Event Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Event Date *</label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Guest Count *</label>
              <input
                type="number"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Estimated number of guests"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Venue *</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Event venue location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Budget Range *</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select budget range</option>
                <option value="under-1L">Under ₹1,00,000</option>
                <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                <option value="5L-10L">₹5,00,000 - ₹10,00,000</option>
                <option value="above-10L">Above ₹10,00,000</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Requirements */}
        <div className="space-y-4 pt-4 border-t border-border">
          <label className="block text-sm font-medium text-foreground">Special Requirements</label>
          <textarea
            name="specialRequirements"
            value={formData.specialRequirements}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Any special requirements or preferences for your event..."
          />
        </div>

        {success && (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg">
            Booking submitted successfully! Our team will contact you within 24 hours.
          </div>
        )}

        {error && <div className="p-4 bg-red-100 text-red-800 rounded-lg">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Booking"
          )}
        </Button>
      </form>
    </Card>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Users, MapPin, Mail, Phone } from "lucide-react"

export function BookingForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    guestCount: "",
    venue: "",
    budget: "",
    services: [] as string[],
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const eventTypes = ["Wedding", "Birthday", "Anniversary", "Cultural Show", "Corporate Event", "Other"]
  const budgetRanges = ["₹2-5 Lakhs", "₹5-10 Lakhs", "₹10-20 Lakhs", "₹20+ Lakhs"]
  const serviceOptions = [
    "Movie-Style Setup",
    "Flower Decorations",
    "Lighting & DJ",
    "Fireworks & Effects",
    "4K Photography",
    "Catering",
    "Complete Package",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    console.log("Form submitted:", formData)
  }

  if (submitted) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border border-border rounded-2xl p-12">
            <div className="text-6xl mb-6 text-center">✓</div>
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Thank You!</h2>
            <p className="text-xl text-muted-foreground mb-2">
              We've received your event inquiry and our team will contact you within 24 hours.
            </p>
            <p className="text-lg text-accent font-semibold mb-8">Confirmation email sent to {formData.email}</p>
            <button
              onClick={() => {
                setSubmitted(false)
                setStep(1)
                setFormData({
                  eventType: "",
                  eventDate: "",
                  guestCount: "",
                  venue: "",
                  budget: "",
                  services: [],
                  name: "",
                  email: "",
                  phone: "",
                  message: "",
                })
              }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold inline-block"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition ${
                    step >= i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i}
                </div>
                {i < 3 && <div className={`flex-1 h-1 mx-2 ${step > i ? "bg-primary" : "bg-muted"}`}></div>}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Event Details</span>
            <span>Services</span>
            <span>Contact Info</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8">
          {/* Step 1: Event Details */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Event Details</h2>

              <div>
                <label className="block text-foreground font-semibold mb-3">Event Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {eventTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, eventType: type }))}
                      className={`p-3 rounded-lg font-semibold transition ${
                        formData.eventType === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-3 flex items-center gap-2">
                    <Calendar size={18} />
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-3 flex items-center gap-2">
                    <Users size={18} />
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    placeholder="Expected guest count"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3 flex items-center gap-2">
                  <MapPin size={18} />
                  Venue / Location
                </label>
                <input
                  type="text"
                  name="venue"
                  value={formData.venue}
                  onChange={handleInputChange}
                  placeholder="City or venue name"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select your budget range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Services */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Select Services</h2>
              <p className="text-muted-foreground mb-6">Choose all services that interest you</p>

              <div className="space-y-3">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleServiceToggle(service)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition ${
                      formData.services.includes(service)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          formData.services.includes(service) ? "bg-primary border-primary" : "border-muted"
                        }`}
                      >
                        {formData.services.includes(service) && (
                          <span className="text-primary-foreground text-sm font-bold">✓</span>
                        )}
                      </div>
                      <span className="font-semibold text-foreground">{service}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Contact Information</h2>

              <div>
                <label className="block text-foreground font-semibold mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-semibold mb-3 flex items-center gap-2">
                    <Mail size={18} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-3 flex items-center gap-2">
                    <Phone size={18} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-3">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your vision, special requirements, or any questions..."
                  rows={4}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 border-2 border-primary text-primary py-3 rounded-lg hover:bg-primary/10 transition font-semibold"
              >
                Back
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold"
              >
                Submit Inquiry
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

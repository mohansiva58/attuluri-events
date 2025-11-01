"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Hyderabad, India", "Available for destination events nationwide"],
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 98765 43210", "+91 40-2334 5678"],
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@attuluri.com", "booking@attuluri.com"],
    link: "mailto:hello@attuluri.com",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 10 AM - 8 PM", "Sat - Sun: 10 AM - 6 PM"],
    link: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about your event? Want to discuss your vision? We're here to help make your celebration
            unforgettable.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, i) => {
            const Icon = info.icon
            return (
              <a
                key={i}
                href={info.link}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:shadow-lg transition group"
              >
                <div className="mb-4 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-3">{info.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form & Map */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-foreground font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="event-inquiry">Event Inquiry</option>
                  <option value="pricing">Pricing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-foreground font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-primary/10 border border-primary text-primary rounded-lg text-center font-semibold">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Why Choose Attuluri Events?</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "15+ Years of Excellence",
                    desc: "Proven track record of delivering exceptional events since 2009",
                  },
                  {
                    title: "Expert Team",
                    desc: "50+ dedicated professionals across all aspects of event management",
                  },
                  {
                    title: "Complete Solutions",
                    desc: "From concept to execution, we handle every detail of your celebration",
                  },
                  {
                    title: "Personalized Service",
                    desc: "Each event is unique and we craft bespoke experiences for every client",
                  },
                  {
                    title: "500+ Events Delivered",
                    desc: "Countless satisfied clients and unforgettable celebrations created",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-foreground font-semibold mb-2">Ready to Plan Your Event?</p>
              <p className="text-muted-foreground text-sm mb-4">
                Schedule a free consultation with our team to discuss your vision and explore possibilities.
              </p>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

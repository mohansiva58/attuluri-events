"use client"

import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"

export function SocialLinks() {
  const socials = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/attuluriEvents",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/attuluriEvents",
      color: "hover:text-pink-600",
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "https://youtube.com/@attuluriEvents",
      color: "hover:text-red-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/attuluriEvents",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Connect With Us</h3>
        <p className="text-muted-foreground">
          Follow us on social media to stay updated with our latest events and offers
        </p>
      </div>

      <div className="flex gap-4 flex-wrap">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 bg-card border border-border rounded-lg transition-all hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <Icon className="w-6 h-6" />
            </a>
          )
        })}
      </div>

      <div className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Mail className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <p className="text-muted-foreground">hello@attuluriEvents.com</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary mt-1" />
          <div>
            <p className="font-semibold text-foreground">Location</p>
            <p className="text-muted-foreground">123 Event Street, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  )
}

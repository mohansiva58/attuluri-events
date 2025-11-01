"use client"

import { MapPin, Phone, Mail, Linkedin, Instagram, Facebook, Twitter, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-background/20">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Attuluri Events</h3>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              The Memory Makers of Every Celebration. Transforming moments into unforgettable cinematic experiences for
              over 15 years.
            </p>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:opacity-100 transition">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@attuluri.com" className="hover:opacity-100 transition">
                  hello@attuluri.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-100 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:opacity-100 transition">
                  Book Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="/services#movie-style" className="hover:opacity-100 transition">
                  Movie-Style Setup
                </a>
              </li>
              <li>
                <a href="/services#flower-decor" className="hover:opacity-100 transition">
                  Flower Decorations
                </a>
              </li>
              <li>
                <a href="/services#lighting-dj" className="hover:opacity-100 transition">
                  Lighting & DJ
                </a>
              </li>
              <li>
                <a href="/services#photography" className="hover:opacity-100 transition">
                  Photography
                </a>
              </li>
              <li>
                <a href="/services#catering" className="hover:opacity-100 transition">
                  Catering
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-6">Information</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-100 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left text-sm opacity-70">
            <p className="mb-2">© 2025 Attuluri Events. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-start gap-2 text-xs">
              Made with <Heart size={16} className="fill-primary text-primary" /> for unforgettable celebrations
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              className="p-2 hover:bg-background/10 rounded-full transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="p-2 hover:bg-background/10 rounded-full transition"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 hover:bg-background/10 rounded-full transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="p-2 hover:bg-background/10 rounded-full transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

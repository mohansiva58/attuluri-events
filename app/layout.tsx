import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Attuluri Events - Premium Wedding & Event Planning Services",
  description:
    "Professional event planning with cinematic setups, flower decorations, 4K videography, DJ services, catering, and rental items. Book your perfect celebration with The Memory Makers.",
  keywords:
    "event planning, wedding planner, event rentals, party planning, 4K videography, DJ services, catering, flower decoration, event lighting, event management, corporate events",
  openGraph: {
    title: "Attuluri Events - The Memory Makers",
    description: "Premium event planning and rental services for unforgettable celebrations",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attuluri Events",
    description: "Premium event planning services",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d97706" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

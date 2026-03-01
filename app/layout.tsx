import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Jost } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Attuluri Events — The Memory Makers | Premium Event Planning",
  description:
    "Transform your celebrations into cinematic masterpieces. Professional event planning with movie-style setups, flower decorations, 4K videography, DJ services, catering, and rental items. Book your perfect celebration with The Memory Makers.",
  keywords:
    "event planning, wedding planner, event rentals, party planning, 4K videography, DJ services, catering, flower decoration, event lighting, event management, corporate events, Vijayawada",
  openGraph: {
    title: "Attuluri Events — The Memory Makers",
    description: "Premium event planning and rental services for unforgettable celebrations",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Attuluri Events — The Memory Makers",
    description: "Premium event planning services for unforgettable celebrations",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

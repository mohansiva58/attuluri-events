import type { Metadata } from "next"
import { Header } from "@/components/header"
import { RentalsGallery } from "@/components/rentals-gallery"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Event Rentals & Pay-for-Use Items | Attuluri Events",
  description:
    "Rent premium event equipment, decor, and furniture. Affordable pay-for-use items for weddings, parties, and corporate events. Lighting systems, chairs, tables, sound equipment.",
  keywords:
    "event rentals, party equipment rental, wedding decor rental, DJ equipment rent, event furniture, pay per use, affordable event items",
  openGraph: {
    title: "Event Rentals - Attuluri Events",
    description: "Premium rental items for your events",
    type: "website",
  },
}

export default function RentalsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-12 px-4 bg-gradient-to-r from-secondary/20 to-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Event Rentals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Affordable, high-quality equipment and decor items available for rent. Choose what you need and pay only for
            what you use.
          </p>
        </div>
      </div>

      <RentalsGallery />
      <Footer />
    </main>
  )
}

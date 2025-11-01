"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingTabs } from "@/components/booking-tabs"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BookNowPage() {
  const searchParams = useSearchParams()
  const [activeService, setActiveService] = useState("movie-setup")

  useEffect(() => {
    const service = searchParams.get("service")
    if (service) {
      setActiveService(service)
    }
  }, [searchParams])

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-20 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">Book Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the services you need and fill out a booking form. Our team will get back to you with a customized
              proposal.
            </p>
          </div>
          <BookingTabs initialService={activeService} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

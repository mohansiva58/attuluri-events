"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceBookingForm } from "@/components/service-booking-form"
import { Sparkles, Lightbulb, Flame, Camera, UtensilsCrossed, Flower2 } from "lucide-react"

const services = [
  {
    id: "movie-setup",
    label: "Cinematic Setup",
    icon: Sparkles,
    description: "Professional movie-style event setup with cutting-edge technology and immersive stagecraft",
  },
  {
    id: "flowers",
    label: "Flower Decoration",
    icon: Flower2,
    description: "Exquisite floral arrangements, flower showers, and breathtaking botanical installations",
  },
  {
    id: "lighting",
    label: "Lighting Design",
    icon: Lightbulb,
    description: "Professional lighting and sound design to create the perfect atmosphere for your event",
  },
  {
    id: "fireworks",
    label: "Fireworks & Effects",
    icon: Flame,
    description: "Stunning pyrotechnics, special effects, and cinematic visual production",
  },
  {
    id: "photography",
    label: "Photography & 4K",
    icon: Camera,
    description: "Professional photography and 4K video coverage capturing every priceless moment",
  },
  {
    id: "catering",
    label: "Catering & Cuisine",
    icon: UtensilsCrossed,
    description: "Gourmet catering services with customized menus and impeccable hospitality",
  },
]

interface BookingTabsProps {
  initialService?: string
}

export function BookingTabs({ initialService = "movie-setup" }: BookingTabsProps) {
  const [activeService, setActiveService] = useState(initialService)
  const activeData = services.find((s) => s.id === activeService)

  return (
    <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
      {/* Tab List */}
      <TabsList
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-10 h-auto p-0 bg-transparent"
      >
        {services.map((service) => {
          const Icon = service.icon
          const isActive = activeService === service.id
          return (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="flex flex-col items-center gap-2 p-4 transition-all duration-300"
              style={{
                background: isActive
                  ? "linear-gradient(135deg, #D4AF37 0%, #F5D78E 100%)"
                  : "oklch(0.09 0.01 280)",
                border: `1px solid ${isActive ? "transparent" : "oklch(0.78 0.16 82 / 0.2)"}`,
                borderRadius: "4px",
                color: isActive ? "oklch(0.08 0.01 280)" : "oklch(0.6 0.01 60)",
              }}
            >
              <Icon size={18} />
              <span
                className="text-xs font-medium text-center leading-tight"
                style={{
                  fontFamily: "Jost, sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: "0.03em",
                }}
              >
                {service.label}
              </span>
            </TabsTrigger>
          )
        })}
      </TabsList>

      {/* Active Service Banner */}
      {activeData && (
        <div
          className="mb-8 p-6 relative overflow-hidden"
          style={{
            background: "oklch(0.09 0.01 280)",
            border: "1px solid oklch(0.78 0.16 82 / 0.15)",
            borderRadius: "4px",
          }}
        >
          <div className="h-px absolute top-0 left-0 right-0" style={{ background: "linear-gradient(90deg, transparent, oklch(0.78 0.16 82 / 0.5), transparent)" }} />
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 flex items-center justify-center flex-shrink-0"
              style={{ border: "1px solid oklch(0.78 0.16 82 / 0.3)", borderRadius: "2px", color: "oklch(0.78 0.16 82)" }}
            >
              {(() => { const Icon = activeData.icon; return <Icon size={18} /> })()}
            </div>
            <div>
              <h2
                className="font-serif font-bold text-xl"
                style={{ color: "oklch(0.92 0.01 60)", fontFamily: "Cormorant Garamond, serif" }}
              >
                {activeData.label}
              </h2>
              <p className="text-sm" style={{ color: "oklch(0.55 0.01 60)", fontFamily: "Jost, sans-serif", fontWeight: 300 }}>
                {activeData.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      {services.map((service) => (
        <TabsContent key={service.id} value={service.id} className="w-full mt-0">
          <ServiceBookingForm serviceType={service.label} serviceId={service.id} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

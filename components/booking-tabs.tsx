"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ServiceBookingForm } from "@/components/service-booking-form"
import { Sparkles, Lightbulb, Flame, Camera, UtensilsCrossed } from "lucide-react"

const services = [
  {
    id: "movie-setup",
    label: "Cinematic Setup",
    icon: Sparkles,
    description: "Professional movie-style event setup with cutting-edge technology",
  },
  {
    id: "flowers",
    label: "Flower Decoration",
    icon: Sparkles,
    description: "Exquisite floral arrangements and decorations",
  },
  {
    id: "lighting",
    label: "Lighting Design",
    icon: Lightbulb,
    description: "Professional lighting to create the perfect ambiance",
  },
  {
    id: "fireworks",
    label: "Fireworks & Effects",
    icon: Flame,
    description: "Stunning pyrotechnics and special effects",
  },
  {
    id: "photography",
    label: "Photography & 4K",
    icon: Camera,
    description: "Professional photography and 4K video coverage",
  },
  {
    id: "catering",
    label: "Catering & Cuisine",
    icon: UtensilsCrossed,
    description: "Gourmet catering services and culinary excellence",
  },
]

interface BookingTabsProps {
  initialService?: string
}

export function BookingTabs({ initialService = "movie-setup" }: BookingTabsProps) {
  const [activeService, setActiveService] = useState(initialService)

  return (
    <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
      <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent mb-8 h-auto p-0">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className="flex flex-col items-center gap-2 p-4 bg-card border border-border rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-semibold text-center">{service.label}</span>
            </TabsTrigger>
          )
        })}
      </TabsList>

      {services.map((service) => (
        <TabsContent key={service.id} value={service.id} className="w-full">
          <div className="bg-card border border-border rounded-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">{service.label}</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
          </div>
          <ServiceBookingForm serviceType={service.label} serviceId={service.id} />
        </TabsContent>
      ))}
    </Tabs>
  )
}

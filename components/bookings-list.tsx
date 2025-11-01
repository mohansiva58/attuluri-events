"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, DollarSign } from "lucide-react"

interface BookingsListProps {
  bookings: any[]
  loading: boolean
}

export function BookingsList({ bookings, loading }: BookingsListProps) {
  if (loading) {
    return <p className="text-center text-muted-foreground">Loading bookings...</p>
  }

  if (bookings.length === 0) {
    return (
      <Card className="p-8 text-center bg-card border border-border">
        <p className="text-muted-foreground">No bookings yet.</p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="p-6 bg-card border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">{booking.name}</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{booking.eventDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{booking.guestCount} guests</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{booking.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{booking.budget}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Event Type</p>
                <Badge className="bg-primary text-primary-foreground">{booking.eventType}</Badge>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-foreground mb-2">Contact</p>
                <p className="text-sm text-muted-foreground">{booking.email}</p>
                <p className="text-sm text-muted-foreground">{booking.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Services</p>
                <p className="text-sm text-muted-foreground">{booking.services?.join(", ") || "N/A"}</p>
              </div>
            </div>
          </div>
          {booking.specialRequirements && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm font-medium text-foreground mb-2">Special Requirements</p>
              <p className="text-sm text-muted-foreground">{booking.specialRequirements}</p>
            </div>
          )}
        </Card>
      ))}
    </div>
  )
}

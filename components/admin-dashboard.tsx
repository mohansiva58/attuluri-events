"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LogOut, Plus, Trash2 } from "lucide-react"
import { getGalleryImages, deleteGalleryImage, getBookings } from "@/lib/firebase-service"
import { ImageUploadForm } from "@/components/image-upload-form"
import { BookingsList } from "@/components/bookings-list"

interface AdminDashboardProps {
  onLogout: () => void
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("gallery")
  const [galleries, setGalleries] = useState<any[]>([])
  const [bookings, setBookings] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [showUploadForm, setShowUploadForm] = useState(false)

  useEffect(() => {
    loadData()
  }, [activeTab])

  const loadData = async () => {
    setLoading(true)
    try {
      if (activeTab === "gallery") {
        const images = await getGalleryImages()
        setGalleries(images || [])
      } else if (activeTab === "bookings") {
        const bookingsData = await getBookings()
        setBookings(bookingsData || [])
      }
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDeleteImage = async (imageId: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await deleteGalleryImage(imageId)
        setGalleries(galleries.filter((img) => img.id !== imageId))
      } catch (error) {
        console.error("Error deleting image:", error)
      }
    }
  }

  const handleImageAdded = (newImage: any) => {
    setGalleries([...galleries, newImage])
    setShowUploadForm(false)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage gallery, bookings, and services</p>
          </div>
          <Button onClick={onLogout} variant="outline" className="flex items-center gap-2 bg-transparent">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          {[
            { id: "gallery", label: "Image Gallery" },
            { id: "bookings", label: "Bookings" },
            { id: "services", label: "Services" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div>
            <div className="mb-8">
              {!showUploadForm && (
                <Button
                  onClick={() => setShowUploadForm(true)}
                  className="flex items-center gap-2 bg-primary text-primary-foreground"
                >
                  <Plus className="w-4 h-4" />
                  Add New Image
                </Button>
              )}
              {showUploadForm && (
                <>
                  <ImageUploadForm onImageAdded={handleImageAdded} />
                  <Button onClick={() => setShowUploadForm(false)} variant="outline" className="mt-4">
                    Cancel
                  </Button>
                </>
              )}
            </div>

            {loading ? (
              <p className="text-center text-muted-foreground">Loading images...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleries.map((image) => (
                  <Card key={image.id} className="overflow-hidden border border-border bg-card">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img
                        src={image.imageUrl || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{image.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{image.description}</p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDeleteImage(image.id)}
                          className="flex-1 px-3 py-2 bg-red-500/10 text-red-600 rounded hover:bg-red-500/20 transition flex items-center justify-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === "bookings" && <BookingsList bookings={bookings} loading={loading} />}

        {/* Services Tab */}
        {activeTab === "services" && (
          <Card className="p-8 bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Manage Services</h2>
            <p className="text-muted-foreground">Service management feature coming soon.</p>
          </Card>
        )}
      </div>
    </div>
  )
}

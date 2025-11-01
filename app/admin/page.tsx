"use client"

import { useState, useEffect } from "react"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminLogin } from "@/components/admin-login"

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if admin is logged in
    const adminToken = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null
    if (adminToken) {
      setIsLoggedIn(true)
    }
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      {isLoggedIn ? (
        <AdminDashboard
          onLogout={() => {
            localStorage.removeItem("adminToken")
            setIsLoggedIn(false)
          }}
        />
      ) : (
        <AdminLogin
          onLoginSuccess={() => {
            setIsLoggedIn(true)
          }}
        />
      )}
    </main>
  )
}

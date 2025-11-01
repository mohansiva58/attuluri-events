"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface AdminLoginProps {
  onLoginSuccess: () => void
}

export function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const ADMIN_PASSWORD = "Attuluri@2024" // This should be in environment variables

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminToken", "true")
      onLoginSuccess()
    } else {
      setError("Invalid password. Please try again.")
      setPassword("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md p-8 bg-card border border-border">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Login</h1>
          <p className="text-muted-foreground">Manage your event portfolio and bookings</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter admin password"
            />
          </div>

          {error && <div className="p-3 bg-red-100 text-red-800 rounded-lg text-sm">{error}</div>}

          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Login
          </Button>
        </form>
      </Card>
    </div>
  )
}

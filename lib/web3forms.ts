const ACCESS_KEY = "183ca44f-918a-4e6b-8f33-07e609b475f9"

export const sendBookingEmail = async (bookingData: any, adminEmail: string) => {
  const formData = new FormData()
  formData.append("access_key", ACCESS_KEY)
  formData.append("email", adminEmail)
  formData.append("subject", `New Booking Request - ${bookingData.eventType}`)
  formData.append("from_name", bookingData.name)
  formData.append("message", formatBookingMessage(bookingData))

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export const sendContactEmail = async (contactData: any, adminEmail: string) => {
  const formData = new FormData()
  formData.append("access_key", ACCESS_KEY)
  formData.append("email", adminEmail)
  formData.append("subject", `Contact Form Submission - ${contactData.name}`)
  formData.append("from_name", contactData.name)
  formData.append("message", `Email: ${contactData.email}\n\nMessage:\n${contactData.message}`)

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error sending contact email:", error)
    throw error
  }
}

function formatBookingMessage(bookingData: any): string {
  return `
Event Details:
- Event Type: ${bookingData.eventType}
- Date: ${bookingData.eventDate}
- Guest Count: ${bookingData.guestCount}
- Venue: ${bookingData.venue}
- Budget: ${bookingData.budget}

Services Required: ${bookingData.services.join(", ")}

Client Details:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}

Special Requirements: ${bookingData.specialRequirements || "None"}
  `.trim()
}

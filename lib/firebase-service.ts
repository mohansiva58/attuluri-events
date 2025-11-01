import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, Timestamp } from "firebase/firestore"
import { db } from "./firebase"

// Booking submissions
export const addBooking = async (bookingData: any) => {
  try {
    const docRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: Timestamp.now(),
      status: "pending",
    })
    return { id: docRef.id, ...bookingData }
  } catch (error) {
    console.error("Error adding booking:", error)
    throw error
  }
}

export const getBookings = async () => {
  try {
    const snapshot = await getDocs(collection(db, "bookings"))
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error("Error fetching bookings:", error)
    throw error
  }
}

export const updateBookingStatus = async (bookingId: string, status: string) => {
  try {
    await updateDoc(doc(db, "bookings", bookingId), { status })
  } catch (error) {
    console.error("Error updating booking:", error)
    throw error
  }
}

// Contact submissions
export const addContactMessage = async (contactData: any) => {
  try {
    const docRef = await addDoc(collection(db, "contact_messages"), {
      ...contactData,
      createdAt: Timestamp.now(),
    })
    return { id: docRef.id, ...contactData }
  } catch (error) {
    console.error("Error adding contact message:", error)
    throw error
  }
}

// Gallery images
export const addGalleryImage = async (imageData: any) => {
  try {
    const docRef = await addDoc(collection(db, "gallery_images"), {
      ...imageData,
      createdAt: Timestamp.now(),
    })
    return { id: docRef.id, ...imageData }
  } catch (error) {
    console.error("Error adding gallery image:", error)
    throw error
  }
}

export const getGalleryImages = async () => {
  try {
    const snapshot = await getDocs(collection(db, "gallery_images"))
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error("Error fetching gallery images:", error)
    throw error
  }
}

export const deleteGalleryImage = async (imageId: string) => {
  try {
    await deleteDoc(doc(db, "gallery_images", imageId))
  } catch (error) {
    console.error("Error deleting gallery image:", error)
    throw error
  }
}

export const updateGalleryImage = async (imageId: string, updateData: any) => {
  try {
    await updateDoc(doc(db, "gallery_images", imageId), updateData)
  } catch (error) {
    console.error("Error updating gallery image:", error)
    throw error
  }
}

// Services data
export const addService = async (serviceData: any) => {
  try {
    const docRef = await addDoc(collection(db, "services"), {
      ...serviceData,
      createdAt: Timestamp.now(),
    })
    return { id: docRef.id, ...serviceData }
  } catch (error) {
    console.error("Error adding service:", error)
    throw error
  }
}

export const getServices = async () => {
  try {
    const snapshot = await getDocs(collection(db, "services"))
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error("Error fetching services:", error)
    throw error
  }
}

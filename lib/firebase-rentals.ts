import { db } from "@/lib/firebase"
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"

export interface RentalItem {
  id?: string
  name: string
  category: string
  pricePerDay: string
  pricePerEvent: string
  description: string
  features: string[]
  availability: string
  minimumRental: string
  image?: string
}

export interface Review {
  id?: string
  name: string
  service: string
  rating: number
  comment: string
  date: string
}

// Rental Items Functions
export async function addRentalItem(item: RentalItem) {
  try {
    const docRef = await addDoc(collection(db, "rentals"), {
      ...item,
      createdAt: new Date(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("[v0] Error adding rental item:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getRentalItems() {
  try {
    const snapshot = await getDocs(collection(db, "rentals"))
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("[v0] Error getting rental items:", error)
    return []
  }
}

export async function updateRentalItem(id: string, item: Partial<RentalItem>) {
  try {
    await updateDoc(doc(db, "rentals", id), item)
    return { success: true }
  } catch (error) {
    console.error("[v0] Error updating rental item:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function deleteRentalItem(id: string) {
  try {
    await deleteDoc(doc(db, "rentals", id))
    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting rental item:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

// Reviews Functions
export async function addReview(review: Review) {
  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      ...review,
      createdAt: new Date(),
    })
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error("[v0] Error adding review:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

export async function getReviews(service?: string) {
  try {
    let q = query(collection(db, "reviews"))
    if (service) {
      q = query(collection(db, "reviews"), where("service", "==", service))
    }
    const snapshot = await getDocs(q)
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    console.error("[v0] Error getting reviews:", error)
    return []
  }
}

export async function deleteReview(id: string) {
  try {
    await deleteDoc(doc(db, "reviews", id))
    return { success: true }
  } catch (error) {
    console.error("[v0] Error deleting review:", error)
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" }
  }
}

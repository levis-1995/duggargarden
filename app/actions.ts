"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import fs from "fs"
import path from "path"

export async function submitReview(formData: FormData) {
  try {
    const ratingStr = formData.get("rating")
    const fullName = formData.get("fullName") as string
    const location = formData.get("location") as string
    const reviewText = formData.get("reviewText") as string
    const photoFile = formData.get("photo") as File | null

    if (!ratingStr || !fullName || !location || !reviewText) {
      return { success: false, error: "Missing required fields" }
    }

    const rating = parseInt(ratingStr.toString(), 10)
    if (isNaN(rating) || rating < 1 || rating > 5) {
      return { success: false, error: "Rating must be between 1 and 5" }
    }

    let photoUrl: string | null = null

    if (photoFile && photoFile.size > 0 && photoFile.name) {
      // 5MB limit check
      if (photoFile.size > 5 * 1024 * 1024) {
        return { success: false, error: "File size is too large (max 5MB)" }
      }
      
      const buffer = Buffer.from(await photoFile.arrayBuffer())
      const uploadDir = path.join(process.cwd(), "public", "uploads")
      
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      // Generate a clean safe filename
      const timestamp = Date.now()
      const safeName = photoFile.name.replace(/[^a-zA-Z0-9.-]/g, "_")
      const filename = `${timestamp}-${safeName}`
      const filepath = path.join(uploadDir, filename)
      
      await fs.promises.writeFile(filepath, buffer)
      photoUrl = `/uploads/${filename}`
    }

    await db.review.create({
      data: {
        rating,
        fullName,
        location,
        reviewText,
        photoUrl,
      },
    })

    revalidatePath("/")
    return { success: true }
  } catch (error: any) {
    console.error("Error submitting review:", error)
    return { success: false, error: error.message || "Failed to submit review" }
  }
}

"use client"

import React, { useState, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Star, Upload, X, Check, Loader2, MessageSquare } from "lucide-react"

export default function ReviewPage() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)
  const [description, setDescription] = useState("")
  
  // Image states
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      handleFile(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      alert("File size is too large. Maximum size is 5MB.")
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)
    setImage(file)
  }

  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      alert("Please select a star rating.")
      return
    }
    setIsSubmitting(true)

    // Simulate submission to backend API
    setTimeout(() => {
      const newReview = {
        name,
        from: location,
        text: description,
        rating,
        image: imagePreview,
        date: new Date().toISOString()
      }
      try {
        const existing = JSON.parse(localStorage.getItem("duggar_den_reviews") || "[]")
        localStorage.setItem("duggar_den_reviews", JSON.stringify([newReview, ...existing]))
      } catch (err) {
        console.error("Failed to save review to localStorage:", err)
      }

      console.log("Submitted Review Data:", {
        name,
        location,
        rating,
        description,
        photoBase64: imagePreview ? `${imagePreview.slice(0, 100)}...` : null
      })
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      
      <main className="flex-1 bg-gradient-to-b from-primary/5 via-background to-background py-16 px-4 md:py-24">
        <div className="mx-auto max-w-xl">
          {!isSubmitted ? (
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-10 shadow-lg shadow-primary/5">
              <div className="text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MessageSquare className="size-6" />
                </div>
                <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                  Share Your Experience
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Let us know how your stay at Duggar Den went. Your feedback helps us grow.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                {/* Star Rating */}
                <div className="flex flex-col gap-2.5">
                  <Label className="text-sm font-semibold text-foreground">Rating</Label>
                  <div className="flex gap-1.5 items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const starValue = i + 1
                      const isFilled = hoveredRating !== null ? starValue <= hoveredRating : starValue <= rating
                      return (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoveredRating(starValue)}
                          onMouseLeave={() => setHoveredRating(null)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                          aria-label={`Rate ${starValue} stars out of 5`}
                        >
                          <Star
                            className={`size-8 ${
                              isFilled
                                ? "fill-accent text-accent"
                                : "text-muted-foreground/30 hover:text-accent/50"
                            }`}
                          />
                        </button>
                      )
                    })}
                    <span className="ml-3 text-sm font-medium text-muted-foreground">
                      {rating === 5 && "Excellent"}
                      {rating === 4 && "Very Good"}
                      {rating === 3 && "Good"}
                      {rating === 2 && "Fair"}
                      {rating === 1 && "Poor"}
                      {rating === 0 && "Select your rating"}
                    </span>
                  </div>
                </div>

                {/* Name & Location */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="guestName" className="font-semibold">Full Name</Label>
                    <Input
                      id="guestName"
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="guestLocation" className="font-semibold">Your Location</Label>
                    <Input
                      id="guestLocation"
                      placeholder="e.g. Delhi"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Review Description */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="reviewDescription" className="font-semibold">Your Review</Label>
                  <Textarea
                    id="reviewDescription"
                    placeholder="Waking up to the pine forest view was magical..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                {/* Image Upload Area */}
                <div className="flex flex-col gap-2">
                  <Label className="font-semibold">Upload a Photo (optional)</Label>
                  
                  {!imagePreview ? (
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center cursor-pointer transition-colors ${
                        isDragging
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-secondary/40"
                      }`}
                    >
                      <Upload className="size-8 text-muted-foreground/60 mb-2" />
                      <span className="text-sm font-medium text-foreground">
                        Drag & drop your photo here, or <span className="text-primary hover:underline">browse</span>
                      </span>
                      <span className="text-[11px] text-muted-foreground mt-1.5">
                        Supports JPG, PNG, WEBP up to 5MB
                      </span>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="relative mt-2 overflow-hidden rounded-2xl border border-border shadow-sm max-h-56">
                      <img
                        src={imagePreview}
                        alt="Upload preview"
                        className="w-full h-full object-cover max-h-52"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background shadow-md"
                        aria-label="Remove uploaded image"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-2 w-full gap-2 text-base font-semibold h-11"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Submitting Review...
                    </>
                  ) : (
                    "Submit Review"
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="rounded-3xl border border-border/80 bg-card p-6 md:p-10 text-center shadow-lg shadow-primary/5">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="size-8" />
              </div>
              <h1 className="mt-5 font-serif text-2xl font-semibold text-foreground md:text-3xl">
                Review Submitted!
              </h1>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Thank you for sharing your experience, {name}. Your feedback is deeply appreciated and helps us keep making Duggar Den a magical place.
              </p>
              
              <Button
                asChild
                size="lg"
                className="mt-8 w-full h-11 text-base font-semibold"
              >
                <a href="/">Back to Home</a>
              </Button>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

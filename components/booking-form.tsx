"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { buildBookingWhatsAppLink } from "@/lib/site"
import { MessageCircle } from "lucide-react"

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"]

export function BookingForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState(guestOptions[1])
  const [notes, setNotes] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const message = [
      "*New Booking Request — Duggar Den*",
      "",
      `Name: ${name || "-"}`,
      `Phone: ${phone || "-"}`,
      `Check-in: ${checkIn || "-"}`,
      `Check-out: ${checkOut || "-"}`,
      `Guests: ${guests}`,
      notes ? `Notes: ${notes}` : "",
      "",
      "Sent from the Duggar Den website.",
    ]
      .filter(Boolean)
      .join("\n")

    window.open(buildBookingWhatsAppLink(message), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+91 ..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="checkin">Check-in</Label>
          <Input
            id="checkin"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="checkout">Check-out</Label>
          <Input
            id="checkout"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Guests</Label>
        <Select value={guests} onValueChange={(val) => setGuests(val ?? "")}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {guestOptions.map((g) => (
              <SelectItem key={g} value={g}>
                {g}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="notes">Anything else? (optional)</Label>
        <Textarea
          id="notes"
          placeholder="Number of rooms, arrival time, special requests..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full gap-2 text-base">
        <MessageCircle className="size-5" />
        Send Booking Request via WhatsApp
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        This opens WhatsApp with your details pre-filled. Just hit send and we&apos;ll confirm availability.
      </p>
    </form>
  )
}

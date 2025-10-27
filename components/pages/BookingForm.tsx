"use client"

import type React from "react"

import { useState } from "react"
import { saveBooking } from "@/lib/storage"

interface BookingFormProps {
  onNavigate: (page: string) => void
  onBookingData: (data: any) => void
}

export default function BookingForm({ onNavigate, onBookingData }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const roomPrices: Record<string, number> = {
    Single: 100,
    Double: 150,
    Suite: 250,
    Deluxe: 350,
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.roomType) newErrors.roomType = "Room type is required"
    if (!formData.checkIn) newErrors.checkIn = "Check-in date is required"
    if (!formData.checkOut) newErrors.checkOut = "Check-out date is required"
    if (formData.guests < 1) newErrors.guests = "At least 1 guest is required"

    if (formData.checkIn && formData.checkOut) {
      if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
        newErrors.checkOut = "Check-out date must be after check-in date"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    const checkInDate = new Date(formData.checkIn)
    const checkOutDate = new Date(formData.checkOut)
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
    const totalPrice = nights * roomPrices[formData.roomType]

    const booking = {
      id: Date.now(),
      ...formData,
      nights,
      totalPrice,
      bookingDate: new Date().toLocaleDateString(),
    }

    saveBooking(booking)
    onBookingData(booking)
    onNavigate("summary")
  }

  return (
    <div className="booking-form-page">
      <h1>Book a Room</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="roomType">Room Type *</label>
          <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="">Select a room type</option>
            <option value="Single">Single - $100/night</option>
            <option value="Double">Double - $150/night</option>
            <option value="Suite">Suite - $250/night</option>
            <option value="Deluxe">Deluxe - $350/night</option>
          </select>
          {errors.roomType && <span className="error">{errors.roomType}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="checkIn">Check-in Date *</label>
            <input id="checkIn" type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
            {errors.checkIn && <span className="error">{errors.checkIn}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="checkOut">Check-out Date *</label>
            <input id="checkOut" type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
            {errors.checkOut && <span className="error">{errors.checkOut}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <input
            id="guests"
            type="number"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
          />
          {errors.guests && <span className="error">{errors.guests}</span>}
        </div>

        <button type="submit" className="btn-submit">
          Proceed to Summary
        </button>
      </form>
    </div>
  )
}

const styles = `
.booking-form-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);
}

.booking-form-page h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.booking-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group select {
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.error {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #27ae60;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

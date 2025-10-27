"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { saveBooking } from "../utils/storage"
import "./BookingForm.css"

function BookingForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  })
  const [errors, setErrors] = useState({})

  const roomPrices = {
    Single: 100,
    Double: 150,
    Suite: 250,
    Deluxe: 350,
  }

  const validateForm = () => {
    const newErrors = {}

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const checkInDate = new Date(formData.checkIn)
    const checkOutDate = new Date(formData.checkOut)
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
    const totalPrice = nights * roomPrices[formData.roomType]

    const booking = {
      id: Date.now(),
      ...formData,
      nights,
      totalPrice,
      bookingDate: new Date().toLocaleDateString(),
    }

    saveBooking(booking)
    navigate("/summary", { state: { booking } })
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

export default BookingForm

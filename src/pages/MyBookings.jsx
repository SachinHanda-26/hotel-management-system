"use client"

import { useState, useEffect } from "react"
import { getBookings, deleteBooking } from "../utils/storage"
import "./MyBookings.css"

function MyBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    loadBookings()
  }, [])

  const loadBookings = () => {
    const allBookings = getBookings()
    setBookings(allBookings)
  }

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      deleteBooking(id)
      loadBookings()
    }
  }

  if (bookings.length === 0) {
    return (
      <div className="my-bookings-page">
        <h1>My Bookings</h1>
        <div className="no-bookings">
          <p>You have no bookings yet.</p>
          <a href="/book" className="btn-book-now">
            Book a Room Now
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="my-bookings-page">
      <h1>My Bookings</h1>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-item">
            <div className="booking-info">
              <h3>{booking.roomType} Room</h3>
              <p>
                <strong>Guest:</strong> {booking.name}
              </p>
              <p>
                <strong>Email:</strong> {booking.email}
              </p>
              <p>
                <strong>Check-in:</strong> {new Date(booking.checkIn).toLocaleDateString()}
              </p>
              <p>
                <strong>Check-out:</strong> {new Date(booking.checkOut).toLocaleDateString()}
              </p>
              <p>
                <strong>Guests:</strong> {booking.guests}
              </p>
              <p>
                <strong>Total Price:</strong> ${booking.totalPrice}
              </p>
              <p className="booking-date">Booked on: {booking.bookingDate}</p>
            </div>
            <button onClick={() => handleDelete(booking.id)} className="btn-delete">
              Cancel Booking
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings

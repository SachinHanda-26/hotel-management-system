"use client"

import { useState, useEffect } from "react"
import { getBookings, deleteBooking } from "@/lib/storage"

interface MyBookingsProps {
  onNavigate: (page: string) => void
}

interface Booking {
  id: number
  name: string
  email: string
  roomType: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  bookingDate: string
}

export default function MyBookings({ onNavigate }: MyBookingsProps) {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    loadBookings()
  }, [])

  const loadBookings = () => {
    const allBookings = getBookings()
    setBookings(allBookings)
  }

  const handleDelete = (id: number) => {
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
          <button onClick={() => onNavigate("book")} className="btn-book-now">
            Book a Room Now
          </button>
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

const styles = `
.my-bookings-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);
}

.my-bookings-page h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.no-bookings {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-bookings p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.btn-book-now {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-book-now:hover {
  background-color: #2980b9;
}

.bookings-list {
  display: grid;
  gap: 1.5rem;
}

.booking-item {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}

.booking-info {
  flex: 1;
}

.booking-info h3 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 1rem;
}

.booking-info p {
  margin: 0.5rem 0;
  color: #555;
}

.booking-date {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.btn-delete:hover {
  background-color: #c0392b;
}

@media (max-width: 768px) {
  .booking-item {
    flex-direction: column;
  }

  .btn-delete {
    width: 100%;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

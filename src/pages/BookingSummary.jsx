"use client"

import { useLocation, useNavigate } from "react-router-dom"
import "./BookingSummary.css"

function BookingSummary() {
  const location = useLocation()
  const navigate = useNavigate()
  const booking = location.state?.booking

  if (!booking) {
    return (
      <div className="summary-page">
        <h1>No Booking Found</h1>
        <p>Please complete a booking first.</p>
        <button onClick={() => navigate("/book")} className="btn-back">
          Go to Booking Form
        </button>
      </div>
    )
  }

  const handleConfirm = () => {
    navigate("/my-bookings")
  }

  const handleEdit = () => {
    navigate("/book")
  }

  const handleCancel = () => {
    navigate("/rooms")
  }

  return (
    <div className="summary-page">
      <h1>Booking Confirmation</h1>
      <div className="summary-card">
        <div className="summary-section">
          <h2>Booking Details</h2>
          <div className="detail-row">
            <span className="label">Booking ID:</span>
            <span className="value">#{booking.id}</span>
          </div>
          <div className="detail-row">
            <span className="label">Booking Date:</span>
            <span className="value">{booking.bookingDate}</span>
          </div>
        </div>

        <div className="summary-section">
          <h2>Guest Information</h2>
          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{booking.name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{booking.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Number of Guests:</span>
            <span className="value">{booking.guests}</span>
          </div>
        </div>

        <div className="summary-section">
          <h2>Room Information</h2>
          <div className="detail-row">
            <span className="label">Room Type:</span>
            <span className="value">{booking.roomType}</span>
          </div>
          <div className="detail-row">
            <span className="label">Check-in:</span>
            <span className="value">{new Date(booking.checkIn).toLocaleDateString()}</span>
          </div>
          <div className="detail-row">
            <span className="label">Check-out:</span>
            <span className="value">{new Date(booking.checkOut).toLocaleDateString()}</span>
          </div>
          <div className="detail-row">
            <span className="label">Number of Nights:</span>
            <span className="value">{booking.nights}</span>
          </div>
        </div>

        <div className="summary-section total">
          <div className="detail-row">
            <span className="label">Total Price:</span>
            <span className="value total-price">${booking.totalPrice}</span>
          </div>
        </div>

        <div className="action-buttons">
          <button onClick={handleConfirm} className="btn btn-confirm">
            Confirm Booking
          </button>
          <button onClick={handleEdit} className="btn btn-edit">
            Edit Booking
          </button>
          <button onClick={handleCancel} className="btn btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingSummary

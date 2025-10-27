"use client"

interface Booking {
  id: number
  name: string
  email: string
  roomType: string
  checkIn: string
  checkOut: string
  guests: number
  nights: number
  totalPrice: number
  bookingDate: string
}

interface BookingSummaryProps {
  booking: Booking | null
  onNavigate: (page: string) => void
}

export default function BookingSummary({ booking, onNavigate }: BookingSummaryProps) {
  if (!booking) {
    return (
      <div className="summary-page">
        <h1>No Booking Found</h1>
        <p>Please complete a booking first.</p>
        <button onClick={() => onNavigate("book")} className="btn-back">
          Go to Booking Form
        </button>
      </div>
    )
  }

  const handleConfirm = () => {
    onNavigate("my-bookings")
  }

  const handleEdit = () => {
    onNavigate("book")
  }

  const handleCancel = () => {
    onNavigate("rooms")
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

const styles = `
.summary-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);
}

.summary-page h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.summary-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.summary-section {
  padding: 1.5rem;
  border-bottom: 1px solid #ecf0f1;
}

.summary-section h2 {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  margin-top: 0;
}

.summary-section.total {
  background-color: #f8f9fa;
  border-bottom: none;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #ecf0f1;
}

.detail-row:last-child {
  border-bottom: none;
}

.label {
  font-weight: bold;
  color: #2c3e50;
}

.value {
  color: #555;
}

.total-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2ecc71;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  flex-wrap: wrap;
}

.btn {
  flex: 1;
  min-width: 150px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-confirm {
  background-color: #2ecc71;
  color: white;
}

.btn-confirm:hover {
  background-color: #27ae60;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-edit:hover {
  background-color: #2980b9;
}

.btn-cancel {
  background-color: #e74c3c;
  color: white;
}

.btn-cancel:hover {
  background-color: #c0392b;
}

.btn-back {
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }

  .btn {
    min-width: auto;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

import { Link } from "react-router-dom"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Hotel</h1>
        <p>Experience luxury and comfort like never before</p>
        <div className="hero-buttons">
          <Link to="/rooms" className="btn btn-primary">
            View Rooms
          </Link>
          <Link to="/book" className="btn btn-secondary">
            Book a Room
          </Link>
        </div>
      </div>
      <div className="features">
        <div className="feature-card">
          <h3>🛏️ Comfortable Rooms</h3>
          <p>Choose from our wide selection of rooms with modern amenities</p>
        </div>
        <div className="feature-card">
          <h3>💰 Best Prices</h3>
          <p>Competitive rates and special discounts for long stays</p>
        </div>
        <div className="feature-card">
          <h3>🎯 Easy Booking</h3>
          <p>Simple and secure booking process in just a few clicks</p>
        </div>
      </div>
    </div>
  )
}

export default Home

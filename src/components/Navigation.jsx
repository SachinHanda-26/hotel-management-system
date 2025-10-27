import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🏨 Hotel Management
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rooms" className="nav-link">
              View Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/book" className="nav-link">
              Book a Room
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/my-bookings" className="nav-link">
              My Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation

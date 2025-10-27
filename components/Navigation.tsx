"use client"

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <button onClick={() => onNavigate("home")} className="nav-logo">
          🏨 Hotel Management
        </button>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => onNavigate("home")} className={`nav-link ${currentPage === "home" ? "active" : ""}`}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => onNavigate("rooms")}
              className={`nav-link ${currentPage === "rooms" ? "active" : ""}`}
            >
              View Rooms
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => onNavigate("book")} className={`nav-link ${currentPage === "book" ? "active" : ""}`}>
              Book a Room
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => onNavigate("my-bookings")}
              className={`nav-link ${currentPage === "my-bookings" ? "active" : ""}`}
            >
              My Bookings
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => onNavigate("about")}
              className={`nav-link ${currentPage === "about" ? "active" : ""}`}
            >
              About
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const styles = `
.navbar {
  background-color: #2c3e50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0;
}

.nav-link {
  color: #ecf0f1;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s;
  padding: 0;
}

.nav-link:hover,
.nav-link.active {
  color: #3498db;
}

@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }

  .nav-logo {
    font-size: 1.2rem;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

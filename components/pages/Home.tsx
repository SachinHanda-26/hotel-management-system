"use client"

interface HomeProps {
  onNavigate: (page: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Our Hotel</h1>
        <p>Experience luxury and comfort like never before</p>
        <div className="hero-buttons">
          <button onClick={() => onNavigate("rooms")} className="btn btn-primary">
            View Rooms
          </button>
          <button onClick={() => onNavigate("book")} className="btn btn-secondary">
            Book a Room
          </button>
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

const styles = `
.home {
  min-height: calc(100vh - 60px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #2ecc71;
  color: white;
}

.btn-secondary:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero p {
    font-size: 1rem;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

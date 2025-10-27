"use client"

import type React from "react"

interface AboutProps {
  onNavigate: (page: string) => void
}

export default function About({ onNavigate }: AboutProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Our Hotel</h1>

        <section className="about-section">
          <h2>Welcome to Luxury Stays</h2>
          <p>
            We are a premier hotel management system dedicated to providing exceptional hospitality experiences. With
            over 20 years of experience in the industry, we pride ourselves on offering comfortable accommodations and
            outstanding customer service.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide guests with unforgettable experiences through exceptional service, comfortable
            accommodations, and attention to detail. We believe that every guest deserves to feel valued and cared for
            during their stay.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Comfortable and well-maintained rooms</li>
            <li>Competitive pricing and special discounts</li>
            <li>Easy online booking system</li>
            <li>24/7 customer support</li>
            <li>Prime locations in major cities</li>
            <li>Modern amenities and facilities</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Your message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

const styles = `
.about-page {
  background-color: #f8f9fa;
  min-height: calc(100vh - 60px);
  padding: 2rem 1rem;
}

.about-container {
  max-width: 800px;
  margin: 0 auto;
}

.about-page h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.about-section {
  background: white;
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-section h2 {
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 1rem;
}

.about-section p {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.about-section ul {
  color: #555;
  line-height: 1.8;
  padding-left: 1.5rem;
}

.about-section li {
  margin-bottom: 0.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.btn-submit {
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .about-section {
    padding: 1.5rem;
  }

  .about-page h1 {
    font-size: 1.8rem;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

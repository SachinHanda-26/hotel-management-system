import "./About.css"

function About() {
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
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" placeholder="Your message" rows="5"></textarea>
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

export default About

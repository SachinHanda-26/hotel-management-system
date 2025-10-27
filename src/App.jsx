import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import BookingForm from "./pages/BookingForm"
import BookingSummary from "./pages/BookingSummary"
import MyBookings from "./pages/MyBookings"
import About from "./pages/About"
import "./App.css"

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/summary" element={<BookingSummary />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/Navigation"
import Home from "@/components/pages/Home"
import Rooms from "@/components/pages/Rooms"
import BookingForm from "@/components/pages/BookingForm"
import BookingSummary from "@/components/pages/BookingSummary"
import MyBookings from "@/components/pages/MyBookings"
import About from "@/components/pages/About"
import { initializeRooms } from "@/lib/storage"
import "./app.css"

type Page = "home" | "rooms" | "book" | "summary" | "my-bookings" | "about"

export default function HotelApp() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [bookingData, setBookingData] = useState(null)

  useEffect(() => {
    initializeRooms()
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case "rooms":
        return <Rooms onNavigate={setCurrentPage} />
      case "book":
        return <BookingForm onNavigate={setCurrentPage} onBookingData={setBookingData} />
      case "summary":
        return <BookingSummary booking={bookingData} onNavigate={setCurrentPage} />
      case "my-bookings":
        return <MyBookings onNavigate={setCurrentPage} />
      case "about":
        return <About onNavigate={setCurrentPage} />
      default:
        return <Home onNavigate={setCurrentPage} />
    }
  }

  return (
    <div className="app-container">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="app-main">{renderPage()}</main>
    </div>
  )
}

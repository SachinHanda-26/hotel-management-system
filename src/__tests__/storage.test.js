import { getRooms, saveBooking, getBookings, deleteBooking, updateBooking, initializeRooms } from "../utils/storage"

describe("Storage Utilities", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test("initializes rooms on first load", () => {
    initializeRooms()
    const rooms = getRooms()
    expect(rooms.length).toBeGreaterThan(0)
  })

  test("saves and retrieves bookings", () => {
    const booking = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      roomType: "Single",
      checkIn: "2024-12-25",
      checkOut: "2024-12-27",
      guests: 1,
      nights: 2,
      totalPrice: 200,
      bookingDate: "12/20/2024",
    }

    saveBooking(booking)
    const bookings = getBookings()

    expect(bookings.length).toBe(1)
    expect(bookings[0].name).toBe("John Doe")
  })

  test("deletes a booking", () => {
    const booking = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      roomType: "Single",
      checkIn: "2024-12-25",
      checkOut: "2024-12-27",
      guests: 1,
      nights: 2,
      totalPrice: 200,
      bookingDate: "12/20/2024",
    }

    saveBooking(booking)
    deleteBooking(1)
    const bookings = getBookings()

    expect(bookings.length).toBe(0)
  })

  test("updates a booking", () => {
    const booking = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      roomType: "Single",
      checkIn: "2024-12-25",
      checkOut: "2024-12-27",
      guests: 1,
      nights: 2,
      totalPrice: 200,
      bookingDate: "12/20/2024",
    }

    saveBooking(booking)
    updateBooking(1, { name: "Jane Doe" })
    const bookings = getBookings()

    expect(bookings[0].name).toBe("Jane Doe")
  })

  test("handles multiple bookings", () => {
    const booking1 = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      roomType: "Single",
      checkIn: "2024-12-25",
      checkOut: "2024-12-27",
      guests: 1,
      nights: 2,
      totalPrice: 200,
      bookingDate: "12/20/2024",
    }

    const booking2 = {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      roomType: "Double",
      checkIn: "2024-12-28",
      checkOut: "2024-12-30",
      guests: 2,
      nights: 2,
      totalPrice: 300,
      bookingDate: "12/20/2024",
    }

    saveBooking(booking1)
    saveBooking(booking2)
    const bookings = getBookings()

    expect(bookings.length).toBe(2)
  })
})

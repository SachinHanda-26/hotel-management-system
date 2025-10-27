// Initialize rooms data
const initialRooms = [
  {
    id: 1,
    name: "Cozy Single Room",
    type: "Single",
    price: 100,
    capacity: 1,
    available: true,
    description: "Perfect for solo travelers with modern amenities",
  },
  {
    id: 2,
    name: "Comfortable Double Room",
    type: "Double",
    price: 150,
    capacity: 2,
    available: true,
    description: "Spacious room ideal for couples or small families",
  },
  {
    id: 3,
    name: "Luxury Suite",
    type: "Suite",
    price: 250,
    capacity: 4,
    available: true,
    description: "Premium suite with separate living area",
  },
  {
    id: 4,
    name: "Deluxe Room",
    type: "Deluxe",
    price: 350,
    capacity: 2,
    available: false,
    description: "Top-tier room with premium furnishings",
  },
  {
    id: 5,
    name: "Budget Single",
    type: "Single",
    price: 80,
    capacity: 1,
    available: true,
    description: "Affordable option for budget-conscious travelers",
  },
  {
    id: 6,
    name: "Family Suite",
    type: "Suite",
    price: 280,
    capacity: 6,
    available: true,
    description: "Spacious suite perfect for families",
  },
]

export const getRooms = () => {
  const rooms = localStorage.getItem("rooms")
  return rooms ? JSON.parse(rooms) : initialRooms
}

export const initializeRooms = () => {
  if (!localStorage.getItem("rooms")) {
    localStorage.setItem("rooms", JSON.stringify(initialRooms))
  }
}

export const saveBooking = (booking) => {
  const bookings = getBookings()
  bookings.push(booking)
  localStorage.setItem("bookings", JSON.stringify(bookings))
}

export const getBookings = () => {
  const bookings = localStorage.getItem("bookings")
  return bookings ? JSON.parse(bookings) : []
}

export const deleteBooking = (id) => {
  const bookings = getBookings()
  const filtered = bookings.filter((booking) => booking.id !== id)
  localStorage.setItem("bookings", JSON.stringify(filtered))
}

export const updateBooking = (id, updatedData) => {
  const bookings = getBookings()
  const index = bookings.findIndex((booking) => booking.id === id)
  if (index !== -1) {
    bookings[index] = { ...bookings[index], ...updatedData }
    localStorage.setItem("bookings", JSON.stringify(bookings))
  }
}

// Initialize rooms on app load
initializeRooms()

import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import RoomList from "../components/RoomList"

describe("RoomList Component", () => {
  const mockRooms = [
    {
      id: 1,
      name: "Single Room",
      type: "Single",
      price: 100,
      capacity: 1,
      available: true,
      description: "Cozy single room",
    },
    {
      id: 2,
      name: "Double Room",
      type: "Double",
      price: 150,
      capacity: 2,
      available: false,
      description: "Spacious double room",
    },
  ]

  test("renders room list with rooms", () => {
    render(
      <BrowserRouter>
        <RoomList rooms={mockRooms} />
      </BrowserRouter>,
    )

    expect(screen.getByText("Single Room")).toBeInTheDocument()
    expect(screen.getByText("Double Room")).toBeInTheDocument()
  })

  test("displays room details correctly", () => {
    render(
      <BrowserRouter>
        <RoomList rooms={mockRooms} />
      </BrowserRouter>,
    )

    expect(screen.getByText("Single")).toBeInTheDocument()
    expect(screen.getByText("$100/night")).toBeInTheDocument()
  })

  test("shows availability status", () => {
    render(
      <BrowserRouter>
        <RoomList rooms={mockRooms} />
      </BrowserRouter>,
    )

    const availabilityBadges = screen.getAllByText(/Available|Unavailable/)
    expect(availabilityBadges.length).toBe(2)
  })

  test("renders no rooms message when empty", () => {
    render(
      <BrowserRouter>
        <RoomList rooms={[]} />
      </BrowserRouter>,
    )

    expect(screen.getByText("No rooms available matching your criteria.")).toBeInTheDocument()
  })

  test("renders Book Now buttons", () => {
    render(
      <BrowserRouter>
        <RoomList rooms={mockRooms} />
      </BrowserRouter>,
    )

    const bookButtons = screen.getAllByText("Book Now")
    expect(bookButtons.length).toBe(2)
  })
})

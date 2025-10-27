import { render, screen, fireEvent } from "@testing-library/react"
import RoomFilter from "../components/RoomFilter"
import jest from "jest" // Importing jest to fix the undeclared variable error

describe("RoomFilter Component", () => {
  test("renders filter controls", () => {
    const mockOnFilterChange = jest.fn()
    render(<RoomFilter onFilterChange={mockOnFilterChange} />)

    expect(screen.getByLabelText(/Room Type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Max Price/i)).toBeInTheDocument()
  })

  test("calls onFilterChange when room type changes", () => {
    const mockOnFilterChange = jest.fn()
    render(<RoomFilter onFilterChange={mockOnFilterChange} />)

    const roomTypeSelect = screen.getByLabelText(/Room Type/i)
    fireEvent.change(roomTypeSelect, { target: { value: "Single" } })

    expect(mockOnFilterChange).toHaveBeenCalled()
  })

  test("calls onFilterChange when price range changes", () => {
    const mockOnFilterChange = jest.fn()
    render(<RoomFilter onFilterChange={mockOnFilterChange} />)

    const priceRange = screen.getByLabelText(/Max Price/i)
    fireEvent.change(priceRange, { target: { value: "200" } })

    expect(mockOnFilterChange).toHaveBeenCalled()
  })

  test("displays all room type options", () => {
    const mockOnFilterChange = jest.fn()
    render(<RoomFilter onFilterChange={mockOnFilterChange} />)

    const roomTypeSelect = screen.getByLabelText(/Room Type/i)
    expect(roomTypeSelect.querySelectorAll("option").length).toBe(5)
  })
})

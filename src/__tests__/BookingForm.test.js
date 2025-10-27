import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import BookingForm from "../pages/BookingForm"

describe("BookingForm Component", () => {
  test("renders booking form with all fields", () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>,
    )

    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Room Type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check-in Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Check-out Date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument()
  })

  test("shows validation errors for empty fields", async () => {
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>,
    )

    const submitButton = screen.getByText("Proceed to Summary")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument()
      expect(screen.getByText("Email is required")).toBeInTheDocument()
    })
  })

  test("validates check-out date is after check-in date", async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>,
    )

    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const roomTypeSelect = screen.getByLabelText(/Room Type/i)
    const checkInInput = screen.getByLabelText(/Check-in Date/i)
    const checkOutInput = screen.getByLabelText(/Check-out Date/i)

    await user.type(nameInput, "John Doe")
    await user.type(emailInput, "john@example.com")
    await user.selectOptions(roomTypeSelect, "Single")
    await user.type(checkInInput, "2024-12-25")
    await user.type(checkOutInput, "2024-12-24")

    const submitButton = screen.getByText("Proceed to Summary")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText("Check-out date must be after check-in date")).toBeInTheDocument()
    })
  })

  test("accepts valid form submission", async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <BookingForm />
      </BrowserRouter>,
    )

    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email/i)
    const roomTypeSelect = screen.getByLabelText(/Room Type/i)
    const checkInInput = screen.getByLabelText(/Check-in Date/i)
    const checkOutInput = screen.getByLabelText(/Check-out Date/i)
    const guestsInput = screen.getByLabelText(/Number of Guests/i)

    await user.type(nameInput, "John Doe")
    await user.type(emailInput, "john@example.com")
    await user.selectOptions(roomTypeSelect, "Single")
    await user.type(checkInInput, "2024-12-25")
    await user.type(checkOutInput, "2024-12-27")
    await user.clear(guestsInput)
    await user.type(guestsInput, "2")

    const submitButton = screen.getByText("Proceed to Summary")
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.queryByText("Name is required")).not.toBeInTheDocument()
    })
  })
})

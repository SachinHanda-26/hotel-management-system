"use client"

import { useState } from "react"
import "./RoomFilter.css"

function RoomFilter({ onFilterChange }) {
  const [type, setType] = useState("")
  const [maxPrice, setMaxPrice] = useState(1000)

  const handleTypeChange = (e) => {
    const newType = e.target.value
    setType(newType)
    onFilterChange({ type: newType, maxPrice })
  }

  const handlePriceChange = (e) => {
    const newPrice = Number.parseInt(e.target.value)
    setMaxPrice(newPrice)
    onFilterChange({ type, maxPrice: newPrice })
  }

  return (
    <div className="room-filter">
      <div className="filter-group">
        <label htmlFor="room-type">Room Type:</label>
        <select id="room-type" value={type} onChange={handleTypeChange}>
          <option value="">All Types</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Suite">Suite</option>
          <option value="Deluxe">Deluxe</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="max-price">Max Price: ${maxPrice}</label>
        <input id="max-price" type="range" min="50" max="1000" value={maxPrice} onChange={handlePriceChange} />
      </div>
    </div>
  )
}

export default RoomFilter

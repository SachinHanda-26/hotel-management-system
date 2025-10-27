"use client"

import type React from "react"

import { useState } from "react"

interface RoomFilterProps {
  onFilterChange: (filters: { type: string; maxPrice: number }) => void
}

export default function RoomFilter({ onFilterChange }: RoomFilterProps) {
  const [type, setType] = useState("")
  const [maxPrice, setMaxPrice] = useState(1000)

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value
    setType(newType)
    onFilterChange({ type: newType, maxPrice })
  }

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

const styles = `
.room-filter {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #ecf0f1;
  border-radius: 8px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.filter-group label {
  font-weight: bold;
  color: #2c3e50;
}

.filter-group select,
.filter-group input {
  padding: 0.5rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
}

.filter-group input[type="range"] {
  width: 200px;
}

@media (max-width: 768px) {
  .room-filter {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-group input[type="range"] {
    width: 100%;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

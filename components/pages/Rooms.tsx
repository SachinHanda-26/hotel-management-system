"use client"

import { useState, useEffect } from "react"
import RoomList from "@/components/RoomList"
import RoomFilter from "@/components/RoomFilter"
import { getRooms } from "@/lib/storage"

interface RoomsProps {
  onNavigate: (page: string) => void
}

interface Room {
  id: number
  name: string
  type: string
  price: number
  capacity: number
  available: boolean
  description: string
}

export default function Rooms({ onNavigate }: RoomsProps) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([])
  const [filters, setFilters] = useState({ type: "", maxPrice: 1000 })

  useEffect(() => {
    const allRooms = getRooms()
    setRooms(allRooms)
    setFilteredRooms(allRooms)
  }, [])

  const handleFilterChange = (newFilters: { type: string; maxPrice: number }) => {
    setFilters(newFilters)
    let filtered = rooms

    if (newFilters.type) {
      filtered = filtered.filter((room) => room.type === newFilters.type)
    }

    filtered = filtered.filter((room) => room.price <= newFilters.maxPrice)
    setFilteredRooms(filtered)
  }

  return (
    <div className="rooms-page">
      <h1>Available Rooms</h1>
      <RoomFilter onFilterChange={handleFilterChange} />
      <RoomList rooms={filteredRooms} onNavigate={onNavigate} />
    </div>
  )
}

const styles = `
.rooms-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: calc(100vh - 60px);
}

.rooms-page h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

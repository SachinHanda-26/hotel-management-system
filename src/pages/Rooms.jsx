"use client"

import { useState, useEffect } from "react"
import RoomList from "../components/RoomList"
import RoomFilter from "../components/RoomFilter"
import { getRooms } from "../utils/storage"
import "./Rooms.css"

function Rooms() {
  const [rooms, setRooms] = useState([])
  const [filteredRooms, setFilteredRooms] = useState([])
  const [filters, setFilters] = useState({ type: "", maxPrice: 1000 })

  useEffect(() => {
    const allRooms = getRooms()
    setRooms(allRooms)
    setFilteredRooms(allRooms)
  }, [])

  const handleFilterChange = (newFilters) => {
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
      <RoomList rooms={filteredRooms} />
    </div>
  )
}

export default Rooms

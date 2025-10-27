"use client"

interface Room {
  id: number
  name: string
  type: string
  price: number
  capacity: number
  available: boolean
  description: string
}

interface RoomListProps {
  rooms: Room[]
  onNavigate: (page: string) => void
}

export default function RoomList({ rooms, onNavigate }: RoomListProps) {
  if (rooms.length === 0) {
    return <div className="no-rooms">No rooms available matching your criteria.</div>
  }

  return (
    <div className="room-list">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="room-header">
            <h3>{room.name}</h3>
            <span className={`availability ${room.available ? "available" : "unavailable"}`}>
              {room.available ? "Available" : "Unavailable"}
            </span>
          </div>
          <p>
            <strong>Type:</strong> {room.type}
          </p>
          <p>
            <strong>Price:</strong> ${room.price}/night
          </p>
          <p>
            <strong>Capacity:</strong> {room.capacity} guests
          </p>
          <p className="description">{room.description}</p>
          <button onClick={() => onNavigate("book")} className="btn-book">
            Book Now
          </button>
        </div>
      ))}
    </div>
  )
}

const styles = `
.room-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.room-card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.room-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.room-header h3 {
  margin: 0;
  color: #2c3e50;
}

.availability {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}

.availability.available {
  background-color: #2ecc71;
  color: white;
}

.availability.unavailable {
  background-color: #e74c3c;
  color: white;
}

.room-card p {
  margin: 0.5rem 0;
  color: #555;
}

.description {
  color: #7f8c8d;
  font-style: italic;
  margin: 1rem 0;
}

.btn-book {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.btn-book:hover {
  background-color: #2980b9;
}

.no-rooms {
  text-align: center;
  padding: 2rem;
  color: #7f8c8d;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .room-list {
    grid-template-columns: 1fr;
  }
}
`

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style")
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

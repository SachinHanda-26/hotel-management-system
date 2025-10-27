import { Link } from "react-router-dom"
import "./RoomList.css"

function RoomList({ rooms }) {
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
          <Link to="/book" className="btn-book">
            Book Now
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RoomList

import React from 'react'

const Seat = ({ seat, isSelected, onSeatClick }) => {
	// Determine the class based on availability and selection
	let seatClass = 'seat'
	if (!seat.isAvailable) {
		seatClass += ' booked' // Red for already booked
	} else if (isSelected) {
		seatClass += ' selected' // Red for user-selected
	} else {
		seatClass += ' available' // Green for available
	}

	// Handle click for selection/deselection
	const handleClick = () => {
		onSeatClick(seat)
	}

	return (
		<div className={seatClass} onClick={handleClick}>
			{seat.id}
		</div>
	)
}

export default Seat

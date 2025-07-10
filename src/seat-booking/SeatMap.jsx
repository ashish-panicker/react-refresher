import React from 'react'
import Seat from './Seat'

const SeatMap = ({ theatreSeats, selectedSeats, onSeatClick }) => {
	return (
		<div className='seat-map'>
			{Object.entries(theatreSeats).map(([categoryName, seats]) => (
				<div key={categoryName} className='seat-category-section'>
					<h2>
						{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Seats
					</h2>
					<div className='seats-grid'>
						{seats.map((seat) => (
							<Seat
								key={seat.id}
								seat={seat}
								isSelected={selectedSeats.some((s) => s.id === seat.id)}
								onSeatClick={onSeatClick}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default SeatMap

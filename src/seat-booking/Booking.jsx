import React from 'react'
import { theatreSeats as seats } from '../../data'
import Header from './Header'
import Legend from './Legend '
import SeatMap from './SeatMap'
import BookingSummary from './BookingSummary '
import BlockSeatsButton from './BlockSeatsButton '
import './seats.css'

const Booking = () => {
	const [theatreSeats, setTheatreSeats] = React.useState(seats)
	const [selectedSeats, setSelectedSeats] = React.useState([])

	const handleSeatClick = (seat) => {
		// If seat is already booked, do nothing
		if (!seat.isAvailable && !selectedSeats.some((s) => s.id === seat.id)) {
			alert(`Seat ${seat.id} is already booked.`)
			return
		}

		// Check if the seat is already selected by the user
		const isAlreadySelected = selectedSeats.some((s) => s.id === seat.id)

		if (isAlreadySelected) {
			// Deselect the seat
			setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id))
		} else {
			// Select the seat (if available)
			if (seat.isAvailable) {
				setSelectedSeats([...selectedSeats, seat])
			} else {
				// This case is already handled above, but good for clarity
				alert(`Seat ${seat.id} is already booked.`)
			}
		}
	}

	const handleBlockSeats = () => {
		if (selectedSeats.length === 0) {
			alert('Please select at least one seat to block.')
			return
		}

		const updatedSeats = { ...theatreSeats }
		let hasBlockedSeats = false

		// Update the availability of selected seats in the main theatreSeats state
		for (const category in updatedSeats) {
			updatedSeats[category] = updatedSeats[category].map((seat) => {
				if (selectedSeats.some((s) => s.id === seat.id)) {
					hasBlockedSeats = true
					return { ...seat, isAvailable: false } // Mark as unavailable
				}
				return seat
			})
		}

		if (hasBlockedSeats) {
			setTheatreSeats(updatedSeats)
			setSelectedSeats([]) // Clear selected seats after blocking
			alert('Seats successfully blocked!')
		} else {
			alert('No new seats were selected to block.')
		}
	}

	return (
		<div className='app-container'>
			<Header />
			<div className='theatre-layout'>
				<div className='seat-selection-area'>
					<Legend />
					<SeatMap
						theatreSeats={theatreSeats}
						selectedSeats={selectedSeats}
						onSeatClick={handleSeatClick}
					/>
				</div>
				<div className='booking-details-area'>
					<BookingSummary selectedSeats={selectedSeats} />
					<BlockSeatsButton onBlockSeats={handleBlockSeats} />
				</div>
			</div>
		</div>
	)
}

export default Booking

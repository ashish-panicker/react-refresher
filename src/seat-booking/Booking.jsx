import React from 'react'
import { theatreSeats as seats } from '../../data'
import Header from './Header'
import Legend from './Legend '
import SeatMap from './SeatMap'
import BookingSummary from './BookingSummary '
import BlockSeatsButton from './BlockSeatsButton '
import Notification from './Notification'
import './seats.css'

const Booking = () => {
	const [theatreSeats, setTheatreSeats] = React.useState(seats)
	const [selectedSeats, setSelectedSeats] = React.useState([])
	// --- NEW: Notification State ---
	const [notification, setNotification] = React.useState({ message: '', type: '' })
	const notificationTimeoutRef = React.useRef(null) // Ref to store timeout ID

	// --- NEW: Function to show notification ---
	const showNotification = (message, type = 'success', duration = 3000) => {
		// Clear any existing timeout
		if (notificationTimeoutRef.current) {
			clearTimeout(notificationTimeoutRef.current)
		}
		setNotification({ message, type })
		notificationTimeoutRef.current = setTimeout(() => {
			setNotification({ message: '', type: '' }) // Hide notification after duration
		}, duration)
	}

	// --- NEW: Function to hide notification manually ---
	const hideNotification = () => {
		if (notificationTimeoutRef.current) {
			clearTimeout(notificationTimeoutRef.current)
		}
		setNotification({ message: '', type: '' })
	}

	const handleSeatClick = (seat) => {
		// If seat is already booked, show error notification
		if (!seat.isAvailable && !selectedSeats.some((s) => s.id === seat.id)) {
			showNotification(
				`Seat ${seat.id} is already booked. Please choose another one.`,
				'error'
			)
			return
		}

		const isAlreadySelected = selectedSeats.some((s) => s.id === seat.id)

		if (isAlreadySelected) {
			// Deselect the seat
			setSelectedSeats(selectedSeats.filter((s) => s.id !== seat.id))
			showNotification(`Seat ${seat.id} deselected.`, 'success', 1500) // Shorter duration for deselection
		} else {
			// Select the seat (if available)
			if (seat.isAvailable) {
				setSelectedSeats([...selectedSeats, seat])
				showNotification(`Seat ${seat.id} selected!`, 'success', 1500) // Shorter duration for selection
			} else {
				// This case is already handled above, but for redundancy/clarity
				showNotification(`Seat ${seat.id} is already booked.`, 'error')
			}
		}
	}

	const handleBlockSeats = () => {
		if (selectedSeats.length === 0) {
			showNotification('Please select at least one seat to block.', 'error')
			return
		}

		const updatedSeats = { ...theatreSeats }
		let hasBlockedSeats = false

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
			showNotification('Seats successfully blocked!', 'success', 5000) // Longer duration for success
		} else {
			showNotification('No new seats were selected to block.', 'error')
		}
	}

	return (
		<div className='app-container'>
			<Header />
			{/* --- NEW: Render Notification component --- */}
			<Notification
				message={notification.message}
				type={notification.type}
				onClose={hideNotification}
			/>
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

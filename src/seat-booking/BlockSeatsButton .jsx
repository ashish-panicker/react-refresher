import React from 'react'

const BlockSeatsButton = ({ onBlockSeats }) => {
	return (
		<button className='block-seats-button' onClick={onBlockSeats}>
			Block Selected Seats
		</button>
	)
}

export default BlockSeatsButton

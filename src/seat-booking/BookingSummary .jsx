import React from 'react'

const BookingSummary  = ({selectedSeats }) => {
  const totalCost = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="booking-summary">
      <h2>Your Booking Summary</h2>
      {selectedSeats.length === 0 ? (
        <p>No seats selected yet. Please choose seats from the map.</p>
      ) : (
        <>
          <ul className="selected-seats-list">
            {selectedSeats.map((seat) => (
              <li key={seat.id}>
                {seat.category} {seat.id} - Rs {seat.price}
              </li>
            ))}
          </ul>
          <div className="total-cost">
            <strong>Total Cost: Rs {totalCost}</strong>
          </div>
        </>
      )}
    </div>
  );
}

export default BookingSummary 
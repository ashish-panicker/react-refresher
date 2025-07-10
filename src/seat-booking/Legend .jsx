import React from 'react'

const Legend  = () => {
  return (
    <div className="seat-legend">
      <h3>Seat Status Legend:</h3>
      <div className="legend-item">
        <span className="legend-color available"></span> Available (Green)
      </div>
      <div className="legend-item">
        <span className="legend-color selected"></span> Selected by You (Red)
      </div>
      <div className="legend-item">
        <span className="legend-color booked"></span> Booked (Grey)
      </div>
    </div>
  );
}

export default Legend 
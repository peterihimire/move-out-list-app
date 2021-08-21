import React from "react";

const OccupantColumns = () => {
  return (
    <div className="occupant-column">
      <div className="occupant-column-center">
        <div className="occupant-column-item">
          <p>Move-out Date</p>
        </div>
        <div className="cart-columns-item">
          <p>ID</p>
        </div>
        <div className="cart-columns-item">
          <p>Address</p>
        </div>
        <div className="cart-columns-item">
          <p>Room</p>
        </div>
        <div className="cart-columns-item">
          <p>Location</p>
        </div>
        <div className="cart-columns-item">
          <p>Last Occupant</p>
        </div>
        <div className="cart-columns-item">
          <p>UID</p>
        </div>
        <div className="cart-columns-item">
          <p>Balance</p>
        </div>
      </div>
    </div>
  );
};

export default OccupantColumns;

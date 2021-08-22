import React from "react";
import "./OccupantColumn.css";

const OccupantColumn = () => {
  return (
    <div className="occupant-column">
      <div className="occupant-column-title title-width-date ">
        <h4>Move-out Date</h4>
      </div>
      <div className="occupant-column-title title-width-id ">
        <h4>ID</h4>
      </div>
      <div className="occupant-column-title title-width-address ">
        <h4>Address</h4>
      </div>
      <div className="occupant-column-title title-width-room ">
        <h4>Room</h4>
      </div>
      <div className="occupant-column-title title-width-location ">
        <h4>Location</h4>
      </div>
      <div className="occupant-column-title title-width-occupant ">
        <h4>Last Occupant</h4>
      </div>
      <div className="occupant-column-title title-width-uid ">
        <h4>UID</h4>
      </div>
      <div className="occupant-column-title title-width-balance ">
        <h4>Balance</h4>
      </div>
      <div className="occupant-column-title title-width-button "></div>
    </div>
  );
};

export default OccupantColumn;

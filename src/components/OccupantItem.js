import React from "react";
import "./OccupantItem.css";
import FlipRoomButton from "./FlipRoomButton";
import img from "../assets/img.png";

const OccupantItem = () => {
  return (
    <div className="occupant-item-column">
      <div className="occupant-column-title title-width-date ">
        <p>Jan 01, 2020</p>
      </div>
      <div className="occupant-column-title title-width-id ">
        <p>42324</p>
      </div>
      <div className="occupant-column-title title-width-address ">
        <div className="occupant-address-div">
          <div className="home-div">
            <img src={img} alt="home" />
          </div>
          <div>
            <p className="text-dark-green">2345 Honeysuckle Rd. NW</p>
          </div>
        </div>
      </div>
      <div className="occupant-column-title title-width-room ">
        <p>2</p>
      </div>
      <div className="occupant-column-title title-width-location ">
        <p>Atlanta GA</p>
      </div>
      <div className="occupant-column-title title-width-occupant ">
        <p className="text-dark-green">Melissa Banks</p>
      </div>
      <div className="occupant-column-title title-width-uid ">
        <p>84874</p>
      </div>
      <div className="occupant-column-title title-width-balance ">
        <p>($405.90)</p>
      </div>
      <div className="occupant-column-title title-width-button ">
        <FlipRoomButton />
      </div>
    </div>
  );
};

export default OccupantItem;

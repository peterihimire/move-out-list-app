import React from "react";
import "./OccupantItem.css";
import FlipRoomButton from "./FlipRoomButton";
import img from "../assets/img.png";

const OccupantItem = (props) => {
  // console.log(props);
  const { occupantsList } = props;
  console.log(occupantsList);
  return (
    <div className="occupant-item-column">
      <div className="occupant-column-title title-width-date ">
        <p>{occupantsList.date}</p>
      </div>
      <div className="occupant-column-title title-width-id ">
        <p>{occupantsList.id}</p>
      </div>
      <div className="occupant-column-title title-width-address ">
        <div className="occupant-address-div">
          <div className="home-div">
            <img src={img} alt="home" />
          </div>
          <div>
            <p className="text-dark-green">2{occupantsList.address}</p>
          </div>
        </div>
      </div>
      <div className="occupant-column-title title-width-room ">
        <p>{occupantsList.room}</p>
      </div>
      <div className="occupant-column-title title-width-location ">
        <p>{occupantsList.location}</p>
      </div>
      <div className="occupant-column-title title-width-occupant ">
        <p className="text-dark-green">{occupantsList.occupant}</p>
      </div>
      <div className="occupant-column-title title-width-uid ">
        <p>{occupantsList.uid}</p>
      </div>
      <div className="occupant-column-title title-width-balance ">
        <p>(${occupantsList.balance})</p>
      </div>
      <div className="occupant-column-title title-width-button ">
        <FlipRoomButton />
      </div>
    </div>
  );
};

export default OccupantItem;

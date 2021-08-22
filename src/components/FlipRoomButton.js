import React from "react";
import "./FlipRoomButton.css";

const FlipRoomButton = () => {
  const fliproom = (e) => {
    e.preventDefault();
    console.log("I am flip button");
  };

  return (
    <div>
      <button className="flip-btn" onClick={fliproom}>
        Flip room
      </button>
    </div>
  );
};

export default FlipRoomButton;

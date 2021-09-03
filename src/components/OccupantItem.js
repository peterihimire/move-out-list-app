import React from "react";
import "./OccupantItem.css";
import img from "../assets/img.png";
import { connect } from "react-redux";
import { MOVEUP, moveUp } from "../store/action/action";
console.log(MOVEUP);

const OccupantItem = (props) => {
  // console.log(props);
  const {
    // The moveup here is gotten from object returned from mapDispatchToProps
    moveup,
    date,
    id,
    room,
    address,
    location,
    occupant,
    uid,
    balance,
    dispatch,
  } = props;
  console.log(dispatch);
  return (
    <div className="occupant-item-column">
      <div className="occupant-column-title title-width-date ">
        <p>{date}</p>
      </div>
      <div className="occupant-column-title title-width-id ">
        <p>{id}</p>
      </div>
      <div className="occupant-column-title title-width-address ">
        <div className="occupant-address-div">
          <div className="home-div">
            <img src={img} alt="home" />
          </div>
          <div>
            <p className="text-dark-green">2{address}</p>
          </div>
        </div>
      </div>
      <div className="occupant-column-title title-width-room ">
        <p>{room}</p>
      </div>
      <div className="occupant-column-title title-width-location ">
        <p>{location}</p>
      </div>
      <div className="occupant-column-title title-width-occupant ">
        <p className="text-dark-green">{occupant}</p>
      </div>
      <div className="occupant-column-title title-width-uid ">
        <p>{uid}</p>
      </div>
      <div className="occupant-column-title title-width-balance ">
        <p>(${balance})</p>
      </div>
      <div className="occupant-column-title title-width-button ">
        <div>
          <button className="flip-btn" onClick={() => moveup()}>
            Flip room
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const { id } = ownProps;



  // return { moveup: () => dispatch({ type: MOVEUP, payload: { id: id } }) };
  return { moveup: () => dispatch(moveUp(id)) };
};

export default connect(null, mapDispatchToProps)(OccupantItem);

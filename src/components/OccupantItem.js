import React from "react";
import "./OccupantItem.css";
import img from "../assets/img.png";
import { connect } from "react-redux";
import { MOVEUP } from "../store/action/action";

const OccupantItem = (props) => {
  const { moveup } = props;

  return (
    <div className="occupant-item-column">
      <div className="occupant-column-title title-width-date ">
        <p>{props.date}</p>
      </div>
      <div className="occupant-column-title title-width-id ">
        <p>{props.id}</p>
      </div>
      <div className="occupant-column-title title-width-address ">
        <div className="occupant-address-div">
          <div className="home-div">
            <img src={img} alt="home" />
          </div>
          <div>
            <p className="text-dark-green">2{props.address}</p>
          </div>
        </div>
      </div>
      <div className="occupant-column-title title-width-room ">
        <p>{props.room}</p>
      </div>
      <div className="occupant-column-title title-width-location ">
        <p>{props.location}</p>
      </div>
      <div className="occupant-column-title title-width-occupant ">
        <p className="text-dark-green">{props.occupant}</p>
      </div>
      <div className="occupant-column-title title-width-uid ">
        <p>{props.uid}</p>
      </div>
      <div className="occupant-column-title title-width-balance ">
        <p>(${props.balance})</p>
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
  const { id } = ownProps;
  return { moveup: () => dispatch({ type: MOVEUP, payload: { id: id } }) };
};

const mapStateToProps = (state) => {
  const { occupants } = state;
  return { occupants };
};
export default connect(mapStateToProps, mapDispatchToProps)(OccupantItem);

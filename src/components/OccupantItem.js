import React from "react";
import "./OccupantItem.css";
import img from "../assets/img.png";
import { connect } from "react-redux";
import { MOVEUP, moveUp } from "../store/action/action";
console.log(MOVEUP);

const OccupantItem = (props) => {
  console.log(props);
  const {
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
  console.log(dispatch);
  const { id } = ownProps;

  // If we had an app were we need to dispatch MOVEUP action many times like (20 times), using action creators will be better, easier and less buggy.

  // return { moveup: () => dispatch({ type: MOVEUP, payload: { id: id } }) };
  return { moveup: () => dispatch(moveUp(id)) };
};
// Since I will not be making use of the mapStateToProps, we will have to put the first argument representing it as null. Caveat , if we added it without making it null, our app will keep getting the dispatch from it, instead of getting it from the mapDispatchToProps.

// mapDispatchToProps is used when there is functonality or action we want to perform
export default connect(null, mapDispatchToProps)(OccupantItem);

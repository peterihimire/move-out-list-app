import React from "react";
import "./OccupantItem.css";
import img from "../assets/img.png";
import { connect } from "react-redux";
import { MOVEUP, moveUp } from "../store/action/action";
console.log(MOVEUP);

const OccupantItem = (props) => {
  // console.log(props);
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
// mapDispatchToProps has a second argument or parameter [ownProps]. Whatever props are beign passed into the component, we can get access to via the ownprops, this object inside ownProps matches exactly what we have in our component, so we can simply destructure it to get hold of individual id we need to pass to our payload.
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  const { id } = ownProps;

  // If we had an app were we need to dispatch MOVEUP action many times like (20 times), using action creators will be better, easier and less buggy. The arrow function attached to the dispatch makes sure that it runs or executes when clicked, cause without the arrow function , it runs right-away.

  // In order to access id or which item we are working with and pass it to our [reducer] we need to use a convention of using the payload key and settng it to an object value of id. We will pass it as a second object property after the dispatch type, because it is a must when we are dispatching an action we must have a type

  // return { moveup: () => dispatch({ type: MOVEUP, payload: { id: id } }) };
  return { moveup: () => dispatch(moveUp(id)) };
};
// Since I will not be making use of the mapStateToProps, we will have to put the first argument representing it as null. Caveat , if we added it without making it null, our app will keep getting the dispatch from it, instead of getting it from the mapDispatchToProps.

// mapDispatchToProps is used when there is functonality or action we want to perform
export default connect(null, mapDispatchToProps)(OccupantItem);

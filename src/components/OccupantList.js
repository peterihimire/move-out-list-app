import React from "react";
import "./OccupantList.css";
import { connect } from "react-redux";
import OccupantItem from "./OccupantItem";
// import occupants from "../occupant-item";
// import { MOVEUP } from "../store/action/action";

const OccupantList = ({ occupants, dispatch }) => {
  console.log(occupants);
  // console.log(dispatch);
  return occupants.map((occupant) => {
    return (
      <div key={occupant.id}>
        <OccupantItem
          occupantsList={occupant}
          key={occupant.id}
          dispatch={dispatch}
        />
      </div>
    );
  });
};
const mapStateToProps = (state) => {
  console.log(state);
  const { occupants } = state;
  return { occupants };
};
export default connect(mapStateToProps)(OccupantList);

//  // MOVE-UP LIST
//  let moveArr = ["A", "B", "C", "D", "E", "F", "G"];
//  console.log(moveArr.reverse());

//  const moveUp = (from, to) => {
//    let selected = moveArr.reverse().splice(from, to);
//    console.log(selected);
//    return moveArr.concat(selected).reverse();
//  };
//  console.log(moveUp(3, 1));

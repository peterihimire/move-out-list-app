import React from "react";
import "./OccupantList.css";
import { connect } from "react-redux";
import OccupantItem from "./OccupantItem";

const OccupantList = ({ occupants, dispatch }) => {
  return occupants.map((occupant) => {
    return (
      <OccupantItem
        // occupantsList={occupant}
        {...occupant}
        key={occupant.id}
        dispatch={dispatch}
      />
    );
  });
};
const mapStateToProps = (state) => {
  const { occupants } = state;
  return { occupants };
};
export default connect(mapStateToProps)(OccupantList);

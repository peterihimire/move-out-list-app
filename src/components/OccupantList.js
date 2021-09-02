import React from "react";
import "./OccupantList.css";
// connect here which is a named import, and a [Higher Order Component] HOC, which means it returns a component itself and is used to get the values from the global store or state
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

// connect has few arguements, but the most commonly used are the mapStateToProps and mapDispatchToProps , which are functions that accept some arguements or paramenter that has access to our state and actions in mapDispatchToProps. From the function we always need to return an object of the info we need which is now available for us from the [props].

// Interesting thing about mapStateToProps is that not only is our state available to us , the [dispatch] method is also available to us too. We can pass it down as props to any component needing it . But since I will be using mapDispatchToProps in the OccupantItem component, I will not be making use of it [dispatch] props, it is just here for refrence
const mapStateToProps = (state) => {
  const { occupants } = state;
  return { occupants };
};
export default connect(mapStateToProps)(OccupantList);

import React from "react";
import "./OccupantList.css";

import OccupantItem from "./OccupantItem";
import occupants from "../occupant-item";

const OccupantList = () => {
  console.log(occupants);

  // let myArr = ["A", "B", "C", "D", "E", "F", "G"];

  // console.log(myArr);
  // const moveUp = (from, to) => {
  //   return myArr.splice(from, to);
  // };
  // let remArr = moveUp(1, 1);
  // console.log(remArr);
  // console.log(myArr);
  // myArr = myArr.concat(remArr);
  // console.log(myArr);

  // MOVE-UP LIST
  let moveArr = ["A", "B", "C", "D", "E", "F", "G"];
  console.log(moveArr.reverse());

  const moveUp = (from, to) => {
    let selected = moveArr.reverse().splice(from, to);
    console.log(selected);
    return moveArr.concat(selected).reverse();
  };
  console.log(moveUp(3, 1));

  // console.log(myArr.splice(0, 3));

  // let moveDown = (from, to) => {
  //   return secArr.slice(from, to);
  // };
  // console.log(moveDown(1, 2));
  // console.log(secArr);

  // let sum = (a, b) => {
  //   return a + b;
  // };
  // console.log(sum(1, 2));

  return occupants.map((occupant) => {
    return (
      <div key={occupant.id}>
        <OccupantItem occupantsList={occupant} key={occupant.id} />
        {/* <OccupantItem />
        <OccupantItem /> */}
      </div>
    );
  });
};

export default OccupantList;

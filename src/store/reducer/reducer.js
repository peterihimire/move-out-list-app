import { MOVEUP } from "../action/action";

function reducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case MOVEUP:
      console.log("room flipped up bro");
      let moveArr = state.occupants;
      console.log(moveArr);

      return { ...state };
    default:
      return state;
  }
}
export default reducer;

//  // MOVE-UP LIST
//  let moveArr = ["A", "B", "C", "D", "E", "F", "G"];
//  console.log(moveArr.reverse());

//  const moveUp = (from, to) => {
//    let selected = moveArr.reverse().splice(from, to);
//    console.log(selected);
//    return moveArr.concat(selected).reverse();
//  };
//  console.log(moveUp(3, 1));

// import { MOVEUP } from "./actions";
// function reducer(state, action) {
//   console.log({ state, action });

//   if (action.type === MOVEUP) {
//     return { ...state, cart: [] };
//   }

//   return state;
// }
// export default reducer;

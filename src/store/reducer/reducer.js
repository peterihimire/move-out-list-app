import { MOVEUP } from "./actions";

switch (action.type) {
  case MOVEUP:
    return { ...state, cart: [] };
  default:
    return state;
}
export default reducer;

// import { MOVEUP } from "./actions";

// function reducer(state, action) {
//   console.log({ state, action });

//   if (action.type === MOVEUP) {
//     return { ...state, cart: [] };
//   }

//   return state;
// }

// export default reducer;

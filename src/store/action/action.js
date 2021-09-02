export const MOVEUP = "MOVEUP";

// ACTION CREATORS
export const moveUp = (id) => {
  return { type: MOVEUP, payload: { id } };
};

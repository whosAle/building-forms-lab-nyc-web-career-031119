export default function manageBand(state = {bands: []}, action) {
  console.log("store is:", state);
  switch (action.type) {
    case "ADD_BAND":
      return {bands: state.bands.concat(action.band)};
    default:
      return state
  }
};

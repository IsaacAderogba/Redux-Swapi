import * as types from "../actions";
const initialState = {
  isFetching: true
  // Array characters, Boolean fetching, null error.
};
export const fetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING):
      console.log(action.payload)
      return {...state, isFetching: action.payload};

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

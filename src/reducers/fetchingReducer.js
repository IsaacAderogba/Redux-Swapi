import * as types from "../actions";

const initialState = {
  isFetching: true
};

export const fetchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.FETCHING):
      return {...state, isFetching: action.payload};
    default:
      return state;
  }
};

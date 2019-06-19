import * as types from "../actions";
const initialState = {
  characters: [],
  errorMessage: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS:
      return { ...state, characters: action.payload };
    case types.FAILURE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

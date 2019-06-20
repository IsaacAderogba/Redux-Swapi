import { combineReducers } from 'redux';
import { charsReducer } from './starWarsReducer';
import { fetchingReducer } from './fetchingReducer'

export default combineReducers({
  charsReducer,
  fetchingReducer
});

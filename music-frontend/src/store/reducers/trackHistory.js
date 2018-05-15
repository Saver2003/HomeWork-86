import {FETCH_TRACKHISTORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
  trackHistory: [],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TRACKHISTORY_SUCCESS:
      return {...state, trackHistory: action.tracks};
    default:
      return state;
  }
};

export default reducer;
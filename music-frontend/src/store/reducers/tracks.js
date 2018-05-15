import {ADD_TRACK_TO_HISTORY, FETCH_TRACKS_SUCCESS} from "../actions/actionTypes";

const initialState = {
  tracks: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TRACKS_SUCCESS:
      return {...state, tracks: action.tracks};
    case ADD_TRACK_TO_HISTORY:
      return {...state, trackHistory: action.tracks};
    default:
      return state;
  }
};

export default reducer;
import axios from '../../axios-api';
import {FETCH_TRACKS_SUCCESS, ADD_TRACK_TO_HISTORY} from "./actionTypes";

export const fetchTrackSuccess = tracks => {
  return {type: FETCH_TRACKS_SUCCESS, tracks};
};

export const fetchTracks = id => {
  return dispatch => {
    axios.get('/tracks?album=' + id).then(
      response => {
        dispatch(fetchTrackSuccess(response.data)); }
    );
  }
};

export const addTrackToHistory = track => {
  return {type: ADD_TRACK_TO_HISTORY, track};
};

export const addTrack = (id, token) => {
  return dispatch => {
    return axios.post('/track_history', {track: id}, {headers: {"Token": token}}).then(
      response => dispatch(addTrackToHistory())
        // dispatch('/');
    )
  }
};
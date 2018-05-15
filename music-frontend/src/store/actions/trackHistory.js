import axios from '../../axios-api';
import {FETCH_TRACKHISTORY_SUCCESS} from "./actionTypes";

export const fetchTrackHistorySuccess = tracks => {
  return {type: FETCH_TRACKHISTORY_SUCCESS, tracks};
};

export const fetchTrackHistory = (token) => {
  return dispatch => {
    axios.get('/track_history', {headers: {"Token": token}}).then(
      response => dispatch(fetchTrackHistorySuccess(response.data))
    );
  }
};
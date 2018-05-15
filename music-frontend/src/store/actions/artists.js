import axios from '../../axios-api';
import {FETCH_ARTISTS_SUCCESS} from "./actionTypes";

export const fetchArtistsSuccess = artists => {
  return {type: FETCH_ARTISTS_SUCCESS, artists};
};

export const fetchArtists = () => {
  return dispatch => {
    axios.get('/artists').then(
      response => dispatch(fetchArtistsSuccess(response.data))
    );
  }
};
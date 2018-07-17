import { trackApi } from '../api/trackApi';
import * as types from '../actions/actionConstant';
import { uiAction } from '../actions/uiActions';

// the POP music type id
let cachedId = 'ZWZB96AB';

export const trackActions = {
  fetchTracks
};

function fetchTracks(page = 1, id = 'ZWZB96AB') {
  if (typeof id === 'undefined' || !!id === false) {
    cachedId = 'ZWZB96AB';
  }
  return dispatch => {
    dispatch({ type: types.START_FETCHING_TRACKS });
    if (id !== cachedId) {
      dispatch(uiAction.startFading()); // only fade when fetch new music type
      cachedId = id;
    }

    trackApi
      .fetchTrack(page, id)
      .then(({ data }) => {
        dispatch({
          type: types.FETCH_TRACK_SUCCESS,
          tracks: data.data.items,
          page,
          id
        });
        dispatch(uiAction.stopFading());
      })
      .catch(() => {
        dispatch({ type: types.FETCH_TRACK_ERROR });

        if (id !== cachedId) {
          dispatch(uiAction.stopFading());
        }
      });
  };
}

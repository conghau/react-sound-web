/**
 * Created by hautruong on 7/31/18.
 */
import {songApi} from '../api/SongApi'
import * as types from '../constants/Actions'

export const songAction = {
  fetchSong,
};

// export function *fetchSong({name, id}) {
//   try {
//     const response = yield call(songApi.fetchSong({name, id}));
//     const {data} = response;
//     yield put(success({song: data}));
//   } catch (err) {
//     // TODO
//     put(failure(err));
//     throw err;
//   }
//
//   function success({song}) {
//     return {
//       type: types.FETCH_SINGLE_SONG_SUCCESS,
//       data: {song}
//     };
//   }
//
//   function failure(error) {
//     return {
//       type: types.FETCH_SINGLE_SONG_ERROR,
//       error
//     };
//   }
// }

function fetchSong({name, id}) {
  return dispatch => {
    return songApi
      .fetchSong({name, id})
      .then(({data}) => {
        dispatch(success({song: data}));

        data.cover = data.artist.cover;
        const ids = {
          songId: data.id,
          artistId: data.artist.id
        };
        dispatch(fetchSuggestSong(ids));

        // dispatch(queueAction.togglePushRoute(false));
        // dispatch({
        //   type: types.ADD_SONG_TO_QUEUE,
        //   song: {
        //     name: data.name,
        //     id,
        //     artists: data.artists,
        //     thumbnail: data.thumbnail
        //   }
        // });
      })
      .catch(err => {
        dispatch(failure(err));
        throw err;
      });
  };

  function success({song}) {
    return {
      type: types.FETCH_SINGLE_SONG_SUCCESS,
      data: {song}
    };
  }

  function failure(error) {
    return {
      type: types.FETCH_SINGLE_SONG_ERROR,
      error
    };
  }
}

function fetchSuggestSong({artistId, songId}) {
  return dispatch => {
    songApi
      .fetchSuggestSong({artistId, songId})
      .then(resp => {
        let {
          data: {data}
        } = resp;
        dispatch(success({suggest_song: data || []}));
      })
      .catch(err => {
        dispatch(failure(err));
        throw err;
      });
  };

  function success({suggest_song}) {
    return {
      type: types.FETCH_SUGGEST_SONG_SUCCESS,
      data: {suggest_song}
    };
  }

  function failure(error) {
    return {
      type: types.FETCH_SUGGEST_SONG_ERROR,
      error
    };
  }
}

function searchMedia(keyword) {
  console.log('searchMedia_ac');
  return dispatch => {
    searchApi
      .searchMedia(keyword)
      .then(resp => {
        console.log(resp);
        console.log(resp.headers);
        let {
          data: {data}
        } = resp;
        return data;
      })
      .catch(err => {
        throw err;
      });
  };
}

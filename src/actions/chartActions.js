import { trackApi } from '../api/trackApi';
import * as types from '../actions/actionConstant';

const popTypes = {
  pop: 'IWZ9Z0BW',
  kpop: 'IWZ9Z0BO',
  vpop: 'IWZ9Z08I'
};

export const chartActions = {
  fetchChart,
  changeActiveChart
};

function fetchChart(popType = 'pop') {
  return dispatch => {
    trackApi
      .fetchChart(popTypes[popType])
      .then(({ data: res }) => {
        if (res.msg === 'Success') {
          switch (popType) {
            case 'pop':
              dispatch({ type: types.FETCH_POP_CHART, pop: res.data });
              break;

            case 'kpop':
              dispatch({ type: types.FETCH_KPOP_CHART, kpop: res.data });
              break;

            case 'vpop':
              dispatch({ type: types.FETCH_VPOP_CHART, vpop: res.data });
              break;

            default:
              break;
          }
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

function changeActiveChart(popType) {
  return (dispatch, getState) => {
    const state = getState();

    if (Object.keys(state.chartReducer[popType]).length) {
      dispatch({ type: types.CHANGE_ACTIVE_CHART, activeChart: popType });
    } else {
      dispatch(fetchChart(popType));
    }
  };
}

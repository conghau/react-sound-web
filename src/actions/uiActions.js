/**
 * Created by hautruong on 7/7/18.
 */
import * as types from './actionConstant';

export const uiAction = {
  showAnalyzer,
  hideAnalyzer,
  toggleModal,
  toggleTrackDropDown,
  toggleQueue,
  slideInRight,
  startDownloading,
  updateDownloadProgress,
  resetSlideInRight,
  finishDownloading,
  finishLoading,
  startFading,
  stopFading,
  startLoading
};

function showAnalyzer() {
  return {
    type: types.SHOW_ANALYZER
  };
}

function hideAnalyzer() {
  return {
    type: types.HIDE_ANALYZER
  };
}

function toggleModal() {
  return {
    type: types.TOGGLE_MODAL
  };
}

function toggleTrackDropDown(id, where) {
  return {
    type: types.TOGGLE_TRACK_DROPDOWN,
    dropDown: { activeId: id, where }
  };
}

function toggleQueue() {
  return {
    type: types.TOGGLE_QUEUE
  };
}

function slideInRight() {
  return {
    type: types.SLIDE_IN_RIGHT
  };
}

function resetSlideInRight() {
  return {
    type: types.RESET_SLIDE_IN_RIGHT
  };
}

function startDownloading(id) {
  return {
    type: types.START_DOWNLOADING,
    id
  };
}

function updateDownloadProgress(percent) {
  return {
    type: types.UPDATE_DOWNLOAD_PROGRESS,
    percent
  };
}

function finishDownloading() {
  return {
    type: types.FINISH_DOWNLOADING
  };
}

function startLoading() {
  return {
    type: types.START_LOADING
  };
}

function finishLoading() {
  return {
    type: types.FINISH_LOADING
  };
}

function startFading() {
  return {
    type: types.START_FADING
  };
}

function stopFading() {
  return {
    type: types.STOP_FADING
  };
}

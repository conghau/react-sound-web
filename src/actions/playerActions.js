/**
 * Created by hautruong on 7/7/18.
 */
import * as types from './actionConstant';

export const playerAction = {
  updateLyric,
  updatePlayedPercent,
  updateLyricPercent
};

function updateLyric(lyric1, lyric2) {
  return {
    type: types.UPDATE_LYRIC,
    lyrics: { lyric1, lyric2 }
  };
}

function updatePlayedPercent(percent) {
  return {
    type: types.UPDATE_PLAYED_PERCENT,
    playedPercent: percent
  };
}

function updateLyricPercent(...percentages) {
  const payload = {};

  percentages.forEach((value, index) => {
    if (value !== null) {
      payload[`per${index + 1}`] = value;
    }
  });

  return {
    type: types.UPDATE_LYRIC_PERCENT,
    payload
  };
}

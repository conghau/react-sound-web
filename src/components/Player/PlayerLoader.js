/**
 * Created by hautruong on 7/4/18.
 */
import React from 'react';
import imgBarSvg from '../../themes/assets/bars.svg';

const PlayerLoader = () => (
  <div className="player-loading">
    <div className="player-overlay" />
    <div className="player-loader">
      <img src={imgBarSvg} alt="" />
      <span style={{ color: '#BFC9CA' }}>Loading...</span>
    </div>
  </div>
);

export default PlayerLoader;

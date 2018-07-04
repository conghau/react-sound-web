/**
 * Created by hautruong on 7/1/18.
 */
import React, { Component } from 'react';

class _Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <audio
          autoplay={false}
          src="//zmp3-mp3-s1.zadn.vn/d536b5e561a188ffd1b0/747385880158281145?authen=exp=1530517510~acl=/d536b5e561a188ffd1b0/*~hmac=519c33d40f01cc532d6f9f33bb2537e5"
          crossorigin="anonymous"
        />
        <img
          src="https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/2/b2c0638904fb8f20547dd66f8f18d279_1510887342.jpg"
          className="player-song-thumbnail"
          alt=""
        />
        <div className="player-info">
          <a
            className="ellipsis player-song-title"
            title="Thấy Là Yêu Thương"
            href="/song/Thay-La-Yeu-Thuong/ZW8W777E"
          >
            Thấy Là Yêu Thương
          </a>
          <div className="comma ellipsis player-info-artists comma">
            <a href="/artist/OnlyC">OnlyC</a>
            <a href="/artist/Lou-Hoang"> Lou Hoàng</a>
          </div>
        </div>
        <div className="player-btns">
          <button className="sc-ir player-btn">
            <i className="ion-ios-rewind" />
          </button>
          <button className="sc-ir player-btn">
            <i className="ion-play" />
          </button>
          <button className="sc-ir player-btn">
            <i className="ion-ios-fastforward" />
          </button>
        </div>
        <div className="player-seek">
          <span>0:17</span>
          <div aria-disabled="false" className="input-range">
            <span className="input-range__label input-range__label--min">
              <span className="input-range__label-container">0</span>
            </span>
            <div className="input-range__track input-range__track--background">
              <div
                className="input-range__track input-range__track--active"
                style={{ left: `0%`, width: `7%` }}
              />
              <span
                className="input-range__slider-container"
                style={{ position: `absolute`, left: `7%` }}
              >
                <span className="input-range__label input-range__label--value">
                  <span className="input-range__label-container">7</span>
                </span>
                <div
                  aria-valuemax="100"
                  aria-valuemin="0"
                  aria-valuenow="7"
                  className="input-range__slider"
                  draggable="false"
                  role="slider"
                  tabindex="0"
                />
              </span>
            </div>
            <span className="input-range__label input-range__label--max">
              <span className="input-range__label-container">100</span>
            </span>
          </div>
          <span>4:01</span>
        </div>
        <div className="player-other">
          <button className="sc-ir" title="Loop">
            <i className="ion-loop" style={{ color: `rgb(173, 181, 189)` }} />
          </button>
          <button className="sc-ir player-btn queue-btn">
            <span className="queue-circle">4</span>
            <img src="/svg/playlist.svg" />
          </button>
        </div>
      </div>
    );
  }
}

export default _Player;

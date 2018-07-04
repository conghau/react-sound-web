/**
 * Created by hautruong on 6/30/18.
 */
import React, { Component } from 'react';

class PlaylistPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="__playlist_page">
        <div className="album-playlist">
          <div className="album-playlist-header">
            <div className="album-playlist-thumb image-wrapper">
              <img
                src="https://zmp3-photo.zadn.vn/thumb/240_240/covers/4/4/44f914886aa4481469c11d072ac779e0_1517370518.jpg"
                alt=""
              />
            </div>
            <div className="ap-info">
              <div className="ap-title">
                The River (Single) - Axel Johansson
              </div>
              <div className="ap-artist" />
              <div className="ap-releaseY">
                <span>Release:</span>2017 Âu Mỹ, Pop
              </div>
              <div>Genres:Âu Mỹ, Pop, Thích, ,</div>
            </div>
          </div>
          <div className="album-playlist-content">
            <div
              className="bgImageContainer karaoke karaoke-album-playlist"
              src="https://zmp3-photo.zadn.vn/cover_artist/5/8/5814c3ce2547ab39d90ce3052c5baa9d_1514902334.jpg"
              style={{
                opacity: 1,
                backgroundImage: `url(&quot;https://zmp3-photo.zadn.vn/cover_artist/5/8/5814c3ce2547ab39d90ce3052c5baa9d_1514902334.jpg&quot;);`
              }}
            >
              <div />
              <div className="karaokeWrapper">
                <div style={{ position: `relative`, display: `inline-block` }}>
                  <div
                    style={{
                      whiteSpace: `nowrap`,
                      fontSize: 23,
                      color: `white`,
                      textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px;`
                    }}
                  />
                  <div
                    style={{
                      whiteSpace: `nowrap`,
                      fontSize: 23,
                      color: `white`,
                      textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px;`
                    }}
                  />
                </div>
                <br />
                <br />
                <div style={{ position: `relative`, display: `inline-block` }}>
                  <div
                    style={{
                      whiteSpace: `nowrap`,
                      fontSize: 23,
                      color: `white`,
                      textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px;`
                    }}
                  />
                  <div
                    style={{
                      whiteSpace: `nowrap`,
                      fontSize: 23,
                      color: `white`,
                      textShadow: `rgb(8, 13, 22) -1px 0px, rgb(8, 13, 22) 0px 1px;`
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="playlist-play-btn">
              <button className="sc-ir" title="play">
                <img
                  src="/svg/play-button-inside-a-circle.svg"
                  className="circle-play-icon"
                />
              </button>
            </div>
            <ul className="ap playlist-tracks">
              <li className="playlist-track">
                <span className="playlist-track-order">1</span>
                <div className="playlist-track-title ellipsis">
                  <a href="/song/The-River/ZW9AE770">The River</a>
                </div>
                <div className="playlist-track-artist">
                  <div className="comma ">
                    <a href="/artist/undefined">Axel Johansson</a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="album-playlist-artist-info">
              <div className="album-laylist-artist-thumb image-wrapper">
                <img src="https://zmp3-photo.zadn.vn/skins/zmp3-v4/images/default2/220x220.jpg" />
              </div>
              <div className="album-playlist-artist-description">
                <p />
                <button className="sc-ir show-info-btn">
                  Show full description
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistPage;

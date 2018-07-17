/**
 * Created by hautruong on 7/1/18.
 */
import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
// import {Link} from 'react-router-dom';
// import InputRange from 'react-input-range';
import InputRange from '../InputRange';
import PlayerLoader from './PlayerLoader';
import initAnalyzer from '../../helper/initAnalyzer';
import LinksByComma from '../LinksByComma';
import { Link } from '../Link';
import { get } from 'lodash';
import {
  requestInterval,
  clearRequestInterval
} from '../../helper/requestInterval';
import {
  changeAlias,
  getSongUrl,
  isTwoObjectEqual,
  formatTime
} from '../../helper/func';

import './_Player.scss';

class Player extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      isSeeking: false,
      isPlaying: false,
      loop: false,
      id: props.id || 0
    };
    this.audio = null;
  }

  componentDidMount() {
    window.addEventListener('blur', this.windowBlur.bind(this));
    // this.audio = this.refs.audio;
    this.audio.addEventListener('loadeddata', this.onLoadedData.bind(this));
    this.audio.addEventListener('play', this.onPlay.bind(this));
    this.audio.addEventListener('pause', this.onPause.bind(this));
    this.audio.addEventListener('ended', this.onEnded.bind(this));

    // initialize the audio analyzer
    initAnalyzer(this.audio);
    console.log(this.audio);
    this.setState({ audio: this.audio });
  }

  windowBlur() {
    if (this.state.isPlaying) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearRequestInterval(this.timer);
  }

  onLoadedData() {
    console.log('onLoadedData');
    console.log(this.audio.readyState);
    if (this.audio.readyState >= 2) {
      this.audio.play();
    }
  }

  onPlay() {
    console.log('onPlay');
    this.timer && clearRequestInterval(this.timer);
    this.timer = requestInterval(this.update.bind(this), 50);
    if (this.audio) {
      this.audio.play();
      this.setState({ isPlaying: true });
    }
  }

  onPause() {
    clearRequestInterval(this.timer);
    if (this.audio) {
      this.audio.pause();
      this.setState({ isPlaying: false });
    }
  }

  onEnded() {
    this.playPrevOrNextSong('next');
    clearRequestInterval(this.timer);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.state.id) {
      console.log('componentWillReceiveProps_pause_id');
      this.onPause();
      this.setState({ id: nextProps.id });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.isPlaying !== this.state.isPlaying) {
      if (nextState.isPlaying) {
        console.log('componentWillUpdate___play');
        this.onPlay();
        // this.audio.play();
      } else {
        console.log('componentWillUpdate___pause');
        this.onPause();
        // this.audio.pause();
      }
    }

    if (
      !isTwoObjectEqual(nextProps.queueIds, this.props.queueIds) &&
      !nextProps.queueIds.includes(this.props.id) &&
      nextProps.queue[0]
    ) {
      const { name, id } = nextProps.queue[0];
      this.props.fetchSong({ name: changeAlias(name), id }); // changeAlias {func}: escape ut8 character
      if (/\/song\//.test(window.location.href)) {
        // only redirect if is on the song route
        this.context.router.history.push(`/song/${changeAlias(name)}/${id}`);
      }
    }
    const nextPercent = get(nextProps, 'playedPercent', 0);
    const currentPercent = get(this.props, 'playedPercent', 0);

    if (nextPercent !== currentPercent && nextPercent) {
      this.audio.currentTime = (this.audio.duration * nextPercent) / 100;
    }
  }

  findSong(prevOrNext) {
    const queue = this.props.queue;
    const currId = this.props.id;
    let index;

    let length = queue.length;
    if (length <= 1) {
      return undefined;
    }

    for (let i = 0; i < length; i++) {
      if (queue[i].id === currId) {
        console.log(prevOrNext);
        switch (prevOrNext) {
          case 'next':
            console.log(i);
            console.log(length);
            index = (i + 1) % length;
            // replay the queue if the index is equal the queue length otherwise play the next song
            break;
          case 'prev':
            index = (i + length - 1) % length;
            // play the last song in the queue if the index is 0 otherwise play the prev song
            break;
          default:
            return null;
        }
        console.log(index);
        console.log(queue[index]);
        return queue[index];
      }
    }

    return undefined;
  }

  playPrevOrNextSong(prevOrNext) {
    const prevOrNextSong = this.findSong(prevOrNext);

    if (!prevOrNextSong) return;

    const { name, alias, id } = prevOrNextSong;

    this.props.togglePushRoute(true); // enable .push for browserHistory

    if (alias) {
      this.props.fetchSong({ name: alias, id });
    } else {
      this.props.fetchSong({ name: changeAlias(name), id }); // changeAlias {func}: escape ut8 character
    }
  }

  togglePlayBtn() {
    console.log('togglePlayBtn');
    this.setState({ isPlaying: !this.state.isPlaying });
  }

  updateProgressbar() {
    let val = 0;
    if (this.audio.currentTime > 0) {
      val = ((this.audio.currentTime / this.audio.duration) * 100).toFixed(2);
    }
    if (!this.state.isSeeking) {
      this.setState({ progress: val });
    }
  }

  update() {
    const lyric = this.props.lyric;
    this.updateProgressbar();
    if (!lyric.length) {
      clearInterval(this.timer);
      return;
    }

    // this.updateProgressbar();

    const { lyric1, lyric2, updateLyricPercent, updateLyric } = this.props;

    // reset lyric state
    if (
      this.audio.currentTime > lyric[lyric.length - 1].end ||
      this.audio.currentTime
    ) {
      // clear lyric when the this.audio is playing with beat only
      updateLyric('', '');
      // updateLyric([], []);
    }

    for (let i = 0; i < lyric.length; i++) {
      if (
        i < lyric.length - 1 &&
        i % 2 == 0 &&
        this.audio.currentTime >= lyric[i].start &&
        this.audio.currentTime <= lyric[i + 1].end
      ) {
        updateLyric(lyric[i], lyric[i + 1]);
      }
    }

    if (this.audio.currentTime <= lyric1.end) {
      let width =
        ((this.audio.currentTime - lyric1.start) /
          (lyric1.end - lyric1.start)) *
        100;
      width = Math.ceil(width);
      updateLyricPercent(width, 0);
    } else if (this.audio.currentTime <= lyric2.end) {
      updateLyricPercent(null, 0);
      let width =
        ((this.audio.currentTime - lyric2.start) /
          (lyric2.end - lyric2.start)) *
        100;
      width = Math.ceil(width);
      width = width <= 0 ? 0 : width > 96 ? 100 : width; // fill the karaoke text
      updateLyricPercent(100, width);
    }
  }

  handleChange = value => {
    this.setState({ progress: value, isSeeking: true });
  };

  handleChangeComplete = value => {
    if (value == 100) {
      this.props.updateLyric('', '');
      // this.props.updateLyric([], []);
    }

    this.audio.play();

    if (this.audio.duration) {
      this.audio.currentTime = (value / 100) * this.audio.duration;
    }

    this.setState({ isSeeking: false });
  };

  render() {
    const {
      name,
      id,
      source,
      thumbnail,
      artists,
      queue,
      isFetching,
      type
    } = this.props;
    let { isPlaying, loop, progress } = this.state;
    let queueLength = get(queue, 'length', 0);
    return (
      <div className="player">
        {type === 'audio' ? (
          <audio
            src={source && source['128']}
            crossOrigin="anonymous"
            // ref="audio"
            ref={c => {
              this.audio = c;
            }}
            loop={loop}
          />
        ) : (
          <video
            autoPlay={false}
            src={
              (source && source['mp4'] && source['mp4']['480p']) ||
              source['mp4']['360p']
            }
            crossOrigin="anonymous"
            ref={c => {
              this.audio = c;
            }}
            loop={loop}
            style={{ display: 'none' }}
          />
        )}
        <img src={thumbnail} className="player-song-thumbnail" alt="" />
        <div className="player-info">
          <Link
            to={getSongUrl(name, id)}
            className="ellipsis player-song-title"
            title={name}
          >
            {name}
          </Link>
          <LinksByComma
            className="ellipsis player-info-artists comma"
            data={artists}
            titleEntry="name"
            pathEntry="link"
            // definePath={link => link.replace('/nghe-si/', '/artist/')}
            // defineTitle={title =>
            //   title.replace('Nhiều nghệ sĩ', 'Various artists')
            // }
          />
          {/*  <Link
           to={`/artist/${changeAlias(artists[0])}`}
           className='ellipsis'
           title={songData.artist}
           >{songData.artist}
           </Link> */}
        </div>
        <div className="player-btns">
          <button
            className="sc-ir player-btn"
            onClick={this.playPrevOrNextSong.bind(this, 'prev')}
          >
            <i className="ion-ios-rewind" />
          </button>
          <button
            className="sc-ir player-btn"
            onClick={this.togglePlayBtn.bind(this)}
          >
            <i className={`ion-ios-${isPlaying ? 'pause' : 'play'}`} />
          </button>
          <button
            className="sc-ir player-btn"
            onClick={this.playPrevOrNextSong.bind(this, 'next')}
          >
            <i className="ion-ios-fastforward" />
          </button>
        </div>
        <div className="player-seek">
          <span>
            {this.audio && this.audio.currentTime
              ? formatTime(this.audio.currentTime)
              : '0:00'}
          </span>
          <InputRange
            maxValue={100}
            minValue={0}
            value={parseInt(progress, 10)}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <span>
            {this.audio &&
              (!isNaN(this.audio.duration) && formatTime(this.audio.duration))}
          </span>
        </div>
        <div className="player-other">
          <button className="sc-ir" title="Loop">
            <i
              className="ion-ios-infinite"
              style={{ color: loop ? '#23B89A' : '#adb5bd' }}
              onClick={() => this.setState({ loop: !loop })}
            />
          </button>
          <button
            className="sc-ir player-btn queue-btn"
            onClick={this.props.toggleQueue}
          >
            <span className="queue-circle">{queueLength || 0}</span>
            <i className="ion-ios-list" />
          </button>
        </div>
        {isFetching && <PlayerLoader />}
      </div>
    );
  }
}

Player.propTypes = {
  // playerState: PropTypes.object.isRequired,
  updateLyric: PropTypes.func.isRequired,
  updateLyricPercent: PropTypes.func.isRequired,
  // songData: PropTypes.object.isRequired,
  fetchSong: PropTypes.func.isRequired,
  queue: PropTypes.array.isRequired,
  queueIds: PropTypes.array,
  toggleQueue: PropTypes.func.isRequired,
  togglePushRoute: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  source: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired
};

export default Player;

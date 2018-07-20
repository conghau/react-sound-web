import React from 'react';
import PropTypes from 'prop-types';
import KaraokeLyric from './KaraokeLyric';
import WithBackgroundImg from '../WithBackgroundImage';
import './index.sass';

// const KLyric = ({text, per, fontSize}) =>
//   <KaraokeLyric
//     text={text || ''}
//     percentage={per || 0}
//     activeStyle={{color: 'skyblue', ...fontSize && {fontSize}}}
//     fontStyle={{...fontSize && {fontSize}}}
//   />;

class KLyric extends React.PureComponent {
  render() {
    const { text, per, fontSize } = this.props;
    return (
      <KaraokeLyric
        text={text || ''}
        percentage={per || 0}
        activeStyle={{ color: 'skyblue', ...(fontSize && { fontSize }) }}
        fontStyle={{ ...(fontSize && { fontSize }) }}
      />
    );
  }
}

class Karaoke extends React.PureComponent {
  render() {
    const {
      isFetching,
      fontSize,
      cover,
      className,
      showInfo,
      name,
      artists_names,
      per1,
      per2,
      lyric1,
      lyric2
    } = this.props;
    return (
      <WithBackgroundImg className={`karaoke ${className}`} src={cover}>
        <div>
          {isFetching ? (
            <div className="karaoke-loader">
              <img src="/svg/three-dots.svg" alt="loading" />
            </div>
          ) : showInfo ? (
            <div className="karaoke-info">
              <h2>{name || ''}</h2>
              <h3>{artists_names.toString() || ''}</h3>
            </div>
          ) : (
            <div className="karaokeWrapper">
              <KLyric {...{ fontSize, per: per1, text: lyric1.text }} />
              <br />
              <br />
              <KLyric {...{ fontSize, per: per2, text: lyric2.text }} />
            </div>
          )}
        </div>
      </WithBackgroundImg>
    );
  }
}

const propTypes = {
  playerState: PropTypes.object.isRequired,
  cover: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  className: PropTypes.string,
  fontSize: PropTypes.string
};

Karaoke.propTypes = propTypes;

export default Karaoke;

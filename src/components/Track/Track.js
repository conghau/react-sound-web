import React from 'react';
import PropTypes from 'prop-types';
import CircularProgressbar from 'react-circular-progressbar';
import { Link } from '../Link';
import { changeAlias } from '../../helper/func';
import LinksByComma from '../LinksByComma';
import LazyLoadImage from '../LazyLoadImage';
import './_Track.sass';

class Track extends React.PureComponent {
  render() {
    const { props } = this;
    const {
      name,
      thumbnail,
      order,
      id,
      artists,
      downloadProgress,
      renderDropDown
    } =
      props || {};

    return (
      <li>
        {renderDropDown('Track', { id, name, thumbnail, artists })}
        <div className="trackPosition">{order}</div>
        <LazyLoadImage src={thumbnail} className="track-thumb image-wrapper" />
        <div className="trackDetail">
          <div className="trackTitle">
            <Link to={`song/${changeAlias(name)}/${id}`}>{name}</Link>
          </div>
          <LinksByComma
            className="trackArtist"
            data={artists}
            titleEntry="name"
            pathEntry="link"
            // definePath={(link) => link.replace('/nghe-si/', '/artist/')}
            // defineTitle={(title) => title.replace('Nhiều nghệ sĩ', 'Various artists')}
          />
        </div>
        <div className="trackActions">
          <div className="hp-track-toolbar">
            {downloadProgress.isDownloading === true &&
            id === downloadProgress.id ? (
              <CircularProgressbar percentage={downloadProgress.percent} />
            ) : (
              <button
                className="sc-ir"
                onClick={() =>
                  props.download({
                    songName: changeAlias(name),
                    id
                  })
                }
              >
                <i
                  className="ion-ios-cloud-download"
                  title="download the track"
                />
              </button>
            )}
            <button className="sc-ir">
              <i className="ion-android-share" title="share" />
            </button>
            <button
              className="sc-ir ignore-react-onclickoutside"
              onClick={props.toggleTrackDropDown.bind(null, id, 'Track')}
            >
              <i className="ion-more" />
            </button>
          </div>
        </div>
      </li>
    );
  }
}
Track.propTypes = {
  renderDropDown: PropTypes.func.isRequired
};

export default Track;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
import { changeAlias } from '../../helper/func';
import WithBackgroundImage from '../WithBackgroundImage';
import LinksByComma from '../LinksByComma';
import { haveDropDown } from '../../HOC/index';
import './index.sass';

// @haveDropDown()
class Chart extends React.PureComponent {
  render() {
    const { props } = this;
    const { chart } = props || {};
    if (!chart.items) {
      return null;
    }

    return (
      <div className="chart">
        <WithBackgroundImage className="featured-image" src={chart.cover} />
        <ul className="chart-list">
          {chart.items.map((item, index) => {
            if (index === 0) {
              return (
                <ChartFirstItem key={`chart-${item.id}`} {...item} {...props} />
              );
            }
            return <ChartItem key={`chart-${item.id}`} {...item} {...props} />;
          })}
        </ul>
      </div>
    );
  }
}

Chart.propTypes = {
  renderDropDown: PropTypes.func.isRequired
};

const ChartFirstItem = ({
  name,
  order,
  id,
  artists,
  thumbnail,
  renderDropDown,
  toggleTrackDropDown
}) => (
  <li className="chart-item">
    <div className="chart-item-order order-first">{order}</div>
    <div className="chart-item-detail detail-first">
      <div className="chart-item-detail-left">
        <div className="chart-item-title ellipsis" title={name}>
          <Link to={`/song/${changeAlias(name)}/${id}`}>{name}</Link>
        </div>
        <LinksByComma
          className="chart-item-artist ellipsis"
          data={artists}
          // definePath={(url) => url.replace('nghe-si', 'artist')}
          // defineTitle={(title) => title.replace('Nhiều nghệ sĩ', 'Various artists')}
          pathEntry="link"
          titleEntry="name"
        />
      </div>
      <div className="chart-item-detail-right">
        <button className="sc-ir">
          <i className="ion-ios-cloud-download" title="download the track" />
        </button>
        <button
          className="sc-ir ignore-react-onclickoutside"
          onClick={() => toggleTrackDropDown(id, 'Chart')}
        >
          <i className="ion-more" />
        </button>
      </div>
    </div>
    {renderDropDown('Chart', { name, id, artists, thumbnail })}
  </li>
);

ChartFirstItem.propTypes = {
  renderDropDown: PropTypes.func.isRequired
};

const ChartItem = ({
  name,
  order,
  id,
  thumbnail,
  artists,
  renderDropDown,
  toggleTrackDropDown
}) => (
  <li className="chart-item">
    <div className="chart-item-thumb">
      <img src={thumbnail} alt={name} />
    </div>
    <div className="chart-item-detail">
      <div className="chart-item-detail-left">
        <div className="chart-item-order">{order}</div>
        <div className="chart-item-info">
          <div className="chart-item-title ellipsis" title={name}>
            <Link to={`/song/${changeAlias(name)}/${id}`}>{name}</Link>
          </div>
          <LinksByComma
            className="chart-item-artist ellipsis"
            data={artists}
            pathEntry="link"
            titleEntry="name"
            // definePath={(url) => url.replace('nghe-si', 'artist')}
            // defineTitle={(title) => title.replace('Nhiều nghệ sĩ', 'Various artists')}
          />
        </div>
      </div>
      <div className="chart-item-detail-right">
        <button className="sc-ir">
          <i className="ion-android-download" title="download the track" />
        </button>
        <button
          className="sc-ir ignore-react-onclickoutside"
          onClick={() => toggleTrackDropDown(id, 'Chart')}
        >
          <i className="ion-more" />
        </button>
      </div>
    </div>
    {renderDropDown('Chart', { name, id, artists, thumbnail })}
  </li>
);

ChartItem.propTypes = {
  renderDropDown: PropTypes.func.isRequired,
  toggleTrackDropDown: PropTypes.func.isRequired
};

export default haveDropDown(Chart);
// export default Chart;

/**
 * Created by hautruong on 6/30/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/Chart/Chart';
import ChartPanel from '../components/Chart/ChartPanel';
import TrackTabChoices from '../components/Track/TrackTabChoices';
import TrackList from '../components/Track/TrackList';
import { trackActions } from '../actions/trackActions';
import { chartActions } from '../actions/chartActions';
import { fetchOnScroll } from '../HOC';

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchTracks();
    this.props.fetchChart();
  }

  render() {
    const { props } = this;
    return (
      <div className="__home_page homepage home-container">
        <div className="home-nav">
          <TrackTabChoices
            fetchTracks={props.fetchTracks}
            activeChoiceId={props.activeChoiceId}
          />
        </div>
        <TrackList {...props} />
        <div className="chart-wrapper">
          <ChartPanel changeActiveChart={props.changeActiveChart} />
          <Chart chart={props.chart} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { activeChart } = state.chartReducer || {};
  const { isLoading, tracks } = state.trackReducer || {};
  // const { authenticated } = state.auth;

  return {
    chart: state.chartReducer[activeChart],
    downloadProgress: state.UIReducer.downloadProgress,
    isFading: state.UIReducer.isFading,
    activeChoiceId: state.trackReducer.activeId,
    isLoading,
    tracks
    // authenticated,
  };
}

function mapDispatchToProps(dispatch) {
  const { fetchTracks } = trackActions;
  const { changeActiveChart, fetchChart } = chartActions;
  return bindActionCreators(
    { fetchTracks, changeActiveChart, fetchChart },
    dispatch
  );
}

export default fetchOnScroll(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);

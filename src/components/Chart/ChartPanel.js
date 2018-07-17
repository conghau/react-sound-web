/**
 * Created by hautruong on 7/14/18.
 */
import React from 'react';
class ChartPanel extends React.PureComponent {
  state = { activeChart: 'pop' };

  handleOnClick(alias) {
    this.props.changeActiveChart(alias);
    this.setState({ activeChart: alias });
  }

  render() {
    const list = [
      { alias: 'pop', title: 'Top 10 Billboard' },
      { alias: 'kpop', title: 'K-Pop Chart' },
      { alias: 'vpop', title: 'V-Pop Chart' }
    ];
    const { activeChart } = this.state;
    return (
      <div className="chart-panel">
        {list.map(item => (
          <button
            key={item.alias}
            onClick={() => this.handleOnClick(item.alias)}
            className={`sc-ir ${
              activeChart === item.alias ? 'chart-panel-btn-active' : ''
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    );
  }
}

export default ChartPanel;

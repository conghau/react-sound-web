import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

const datas = {
  ZWZB96AB: 'Popular songs',
  ZWZB96DC: 'Popular Korean songs',
  ZWZB969E: 'Popular Vietnamese songs'
};

class TrackTabChoices extends React.PureComponent {
  state = { showMenu: false };

  handleClickOutside = () => {
    this.setState({ showMenu: false });
  };

  toggle() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleOnClick(id) {
    if (id === this.props.activeChoiceId) {
      return;
    }

    this.props.fetchTracks(1, id);
  }

  render() {
    const { activeChoiceId } = this.props;

    return (
      <div
        className={`choice ${this.state.showMenu ? 'choice-active' : null}`}
        onClick={this.toggle.bind(this)}
      >
        {datas[activeChoiceId] || Object.values(datas)[0]}
        <i className="ion-chevron-down" />
        {this.state.showMenu && (
          <ul className="choice-list">
            {Object.keys(datas).map(key => (
              <li key={key} onClick={this.handleOnClick.bind(this, key)}>
                {datas[key]}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

TrackTabChoices.propTypes = {
  fetchTracks: PropTypes.func.isRequired,
  activeChoiceId: PropTypes.string
};

export default onClickOutside(TrackTabChoices);

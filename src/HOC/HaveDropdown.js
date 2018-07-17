import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { uiAction } from '../actions/uiActions';
// import {addSongToStoreTemporarily} from '../actions/user_playlist';
import { queueAction } from '../actions/queueActions';
import Dropdown from '../components/Dropdown';

export default function(ComposedComponent) {
  class HaveDropDown extends Component {
    renderDropDown = (where, { id, name, thumbnail, artists }) => {
      const { showDropdown, dropDownActiveId } = this.props;

      return (
        showDropdown &&
        id === dropDownActiveId &&
        where === this.props.where && (
          <Dropdown
            name={name}
            id={id}
            thumbnail={thumbnail}
            addSongToQueue={this.props.addSongToQueue}
            toggleTrackDropDown={this.props.toggleTrackDropDown}
            toggleModal={this.props.toggleModal}
            artists={artists}
            addSongToStoreTemporarily={this.props.addSongToStoreTemporarily}
          />
        )
      );
    };

    render() {
      return (
        <ComposedComponent
          {...this.props}
          renderDropDown={this.renderDropDown}
        />
      );
    }
  }

  function mapStateToProps(state) {
    const { where, activeId, show } = state.UIReducer.dropDown;
    return {
      showDropdown: show,
      dropDownActiveId: activeId,
      where
    };
  }

  HaveDropDown.propTypes = {
    showDropdown: PropTypes.bool.isRequired,
    dropDownActiveId: PropTypes.string,
    toggleTrackDropDown: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    {
      toggleTrackDropDown: uiAction.toggleTrackDropDown,
      addSongToQueue: queueAction.addSongToQueue,
      addSongToStoreTemporarily: null,
      toggleModal: uiAction.toggleModal
    }
  )(HaveDropDown);
}

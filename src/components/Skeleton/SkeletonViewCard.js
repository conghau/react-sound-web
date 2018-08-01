/**
 * Created by hautruong on 7/26/18.
 */
import React from 'react';

export default class SkeletonViewCard extends React.PureComponent {
  render() {
    return (
      <div className="__skeleton_card ">
        <div className="__skeleton_img box-line" />
        <div className="__skeleton_label box-line" />
      </div>
    );
  }
}

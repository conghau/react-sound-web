/**
 * Created by hautruong on 7/26/18.
 */
/**
 * Created by hautruong on 7/26/18.
 */
import React from 'react';
import { chunk, range } from 'lodash';
import './_Skeleton.scss';
import SkeletonViewCard from './SkeletonViewCard';

export default class SkeletonListViewCard extends React.PureComponent {
  render() {
    let items = range(8);
    console.log('SkeletonListViewCard');
    return chunk(items, 4).map(chunk => {
      return (
        <div className="__skeleton_row">
          {chunk.map((i, item) => <SkeletonViewCard key={i} />)}
        </div>
      );
    });
  }
}

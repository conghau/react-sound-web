/**
 * Created by hautruong on 7/12/18.
 */
import React from 'react';
import { NavLink as ReactLink } from 'react-router-dom';

export class Link extends React.PureComponent {
  render() {
    const { to, className, title } = this.props;
    return (
      <ReactLink {...{ to, className, title }}>{this.props.children}</ReactLink>
    );
  }
}

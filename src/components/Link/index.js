/**
 * Created by hautruong on 7/12/18.
 */
import React from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Link extends React.PureComponent {
  // shouldComponentUpdate() {
  //   return false;
  // }
  // onClick = (to) => {
  //   this.context.router.history.push(to);
  // };

  render() {
    console.log('Link___');
    const { to, className, title } = this.props;
    // return <a {...{className, title}} onClick={() => this.onClick(to)}>{this.props.children}</a>
    return (
      <ReactLink {...{ to, className, title }}>{this.props.children}</ReactLink>
    );
  }
}
// Link.contextTypes = {
//   router: PropTypes.func.isRequired
// };
Link.propTypes = {};

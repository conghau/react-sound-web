/**
 * Created by hautruong on 7/7/18.
 */
import React, { PureCompoment, Component } from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from './SubMenu';

export default class GenreMenu extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //@todo implement logic here, currently always return false
    return false;
  }

  render() {
    let { genres, type } = this.props;
    return (
      <div>
        <ul className="genre-menu">
          <ul className="submenu">
            <li className="submenu-title">
              <Link
                to={`/${type}s`}
                activeClassName="submenu-link-active"
              >{`${type}s`}</Link>
            </li>
          </ul>
          {Object.keys(genres).map(origin => (
            <SubMenu
              key={origin}
              {...genres[origin]}
              title={origin}
              type={type}
            />
          ))}
        </ul>
      </div>
    );
  }
}

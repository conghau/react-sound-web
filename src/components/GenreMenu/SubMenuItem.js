/**
 * Created by hautruong on 7/7/18.
 */
import React from 'react';
import { changeAlias } from '../../helper/func';
import { Link } from 'react-router-dom';

export const SubMenuItem = props => (
  <li className="submenu-li">
    <Link
      to={`/${props.type}s/${changeAlias(props.title)}/${props.id}`}
      activeClassName="submenu-link-active"
    >
      {props.title}
    </Link>
  </li>
);

/**
 * Created by hautruong on 7/7/18.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenuItem } from './SubMenuItem';

export const SubMenu = ({ name, id, title, children, type }) => (
  <ul className="submenu">
    <li className="submenu-title">
      <Link
        to={`/${type}s/${name}/${id}`}
        activeclassname="submenu-link-active"
      >
        {title}
      </Link>
    </li>
    {children.map(obj => <SubMenuItem key={obj.id} {...obj} type={type} />)}
  </ul>
);

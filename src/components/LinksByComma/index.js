import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link/index';
import './index.sass';

export default class LinksByComma extends React.PureComponent {
  render() {
    let { data, pathEntry, titleEntry, className } = this.props;

    const definePath = link => {
      return link ? link.replace('/nghe-si/', '/artist/') : '#';
    };
    const defineTitle = title => {
      return title ? title.replace('Nhiều nghệ sĩ', 'Various artists') : null;
    };

    return (
      <div className={`comma ${className || ''}`}>
        {data &&
          data.map((element, index) => (
            <Link
              key={`${element[titleEntry]}-${index}`}
              to={
                (definePath && definePath(element[pathEntry])) ||
                element[pathEntry]
              }
            >
              {(defineTitle && defineTitle(element[titleEntry])) ||
                element[titleEntry]}
            </Link>
          ))}
      </div>
    );
  }
}

LinksByComma.propTypes = {
  data: PropTypes.array.isRequired,
  // definePath: PropTypes.func,
  pathEntry: PropTypes.string.isRequired,
  titleEntry: PropTypes.string.isRequired,
  // defineTitle: PropTypes.func,
  className: PropTypes.string
};

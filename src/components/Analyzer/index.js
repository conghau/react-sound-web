import React from 'react';
import PropTypes from 'prop-types';
import './_Analyzer.sass';

const Analyzer = ({ show }) => (
  <div id="analyzer" style={{ display: show ? 'block' : 'none' }}>
    <canvas id="analyser_render" />
  </div>
);

Analyzer.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Analyzer;

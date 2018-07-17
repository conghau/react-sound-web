/**
 * Created by hautruong on 7/12/18.
 */
import React, { PureComponent } from 'react';
import ReactInputRange from 'react-input-range';

class InputRange extends PureComponent {
  render() {
    return <ReactInputRange {...this.props} />;
  }
}

export default InputRange;

/**
 * Created by hautruong on 7/5/18.
 */
import React from 'react';
// import ReactLoading from 'react-loading';

export const Loading = props => {
  if (props.error) {
    return (
      <div>
        Error!
        <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time...
        <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>{`Loading pastDelay...`}</div>;
  } else {
    return <div>{`Loading ...`}</div>;
  }
};
export default Loading;

import React, { Fragment } from 'react';
import spinner from './3.gif';

export const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading"
        style={{
          width: '60px',
          margin: 'auto',
          display: 'block',
        }}
      />
    </Fragment>
  );
};

export default Spinner;

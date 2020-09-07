/** @format */

import React from 'react';
import { MDBIcon } from 'mdbreact';

const Stars = ({ rate }) => (
  <React.Fragment>
    <MDBIcon icon='star' className='text-warning' />
    <small className='text-light font-weight-bold ml-1'>({rate})</small>
  </React.Fragment>
);

export default Stars;

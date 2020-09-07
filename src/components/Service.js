/** @format */

import React from 'react';
import { MDBContainer } from 'mdbreact';

const Service = ({ img, title, caption }) => (
  <MDBContainer>
    <img src={img} className='m-auto' alt={title} />
    <p className='text-lighter mt-1 mb-0 font-weight-bold'>{title}</p>
    <p className='text-lighter m-0 text-justify'>{caption}</p>
  </MDBContainer>
);

export default Service;

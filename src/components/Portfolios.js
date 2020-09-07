/** @format */

import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import TextStacks from './TextStack';
import Stars from './Stars';

const Portfolio = ({ data, onShow }) => {
  return (
    <MDBCol sm='12' md='4' lg='4' className='text-center'>
      <span
        className='portfolio-btn cursor-pointer'
        onClick={() => onShow(data)}
      >
        <img
          src={data.img.list[0]}
          alt={data.title}
          className={`portfolio-img ${data.isMobile ? 'mobile' : ''}`}
        />
        <div className='w-100 h-100 cursor-pointer'>
          <p className='text-light font-weight-bold w-100'>{data.title}</p>
          <span className='left ml-3 mb-2'>
            <Stars rate={data.rate.toFixed(1)} />
          </span>
          <span className='right mr-3 mb-2'>
            <TextStacks data={data.textStacks} />
          </span>
        </div>
      </span>
    </MDBCol>
  );
};

const Portfolios = ({ data, onShow }) => (
  <MDBContainer fluid className='p-5'>
    <MDBRow>
      {data.map((e, i) => (
        <Portfolio data={e} key={i} onShow={onShow} />
      ))}
    </MDBRow>
  </MDBContainer>
);

export default Portfolios;

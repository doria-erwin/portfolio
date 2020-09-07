/** @format */

import React from 'react';
import { MDBContainer, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import SubTitle from './SubTitle';

const Education = ({ data }) => (
  <React.Fragment>
    <MDBCol>
      <p className='text-lighter m-0'>{data.course}</p>
      <small className='text-lighter float-right'>{data.duration}</small>
      <small className='text-lighter font-weight-500 d-block'>
        {data.school}
      </small>
      <small className='text-lighter'>{data.address}</small>
      <p>
        <a
          href={data.website}
          rel='noopener noreferrer'
          target='_blank'
          className='text-info'
        >
          <MDBIcon icon='globe-asia' />
        </a>
        <a
          href={`mailto:${data.email}`}
          rel='noopener noreferrer'
          className='text-info ml-1'
        >
          <MDBIcon icon='envelope' />
        </a>
        <a
          href={`tel:${data.phone}`}
          rel='noopener noreferrer'
          className='text-info ml-1'
        >
          <MDBIcon icon='phone-square-alt' />
        </a>
        <a
          href={data.facebook}
          rel='noopener noreferrer'
          target='_blank'
          className='text-info ml-1'
        >
          <MDBIcon fab icon='facebook-square' />
        </a>
      </p>
    </MDBCol>
  </React.Fragment>
);

const Educations = ({ data }) => (
  <React.Fragment>
    <SubTitle>Education</SubTitle>
    <MDBContainer className='p-0'>
      <MDBRow>
        {data.map((e, i) => (
          <Education data={e} key={i} />
        ))}
      </MDBRow>
    </MDBContainer>
  </React.Fragment>
);

export default Educations;

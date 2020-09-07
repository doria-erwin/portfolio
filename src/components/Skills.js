/** @format */

import React from 'react';
import { MDBContainer, MDBIcon } from 'mdbreact';
import SubTitle from './SubTitle';

import mysql from '../assets/img/mysql.png';
import jquery from '../assets/img/jquery.png';
import arduino from '../assets/img/arduino.png';
import grapql from '../assets/img/grapql.png';
import c from '../assets/img/c.png';

const CustomIcon = ({ name }) => {
  let Icon = null;
  switch (name) {
    case 'Mysql':
      Icon = <img src={mysql} alt={name} className='custom-logo' />;
      break;
    case 'JQuery':
      Icon = <img src={jquery} alt={name} className='custom-logo' />;
      break;
    case 'Arduino':
      Icon = <img src={arduino} alt={name} className='custom-logo' />;
      break;
    case 'C':
      Icon = <img src={c} alt={name} className='custom-logo' />;
      break;
    case 'GraphQL':
      Icon = <img src={grapql} alt={name} className='custom-logo' />;
      break;
    default:
      Icon = null;
  }
  return Icon;
};

const Skill = ({ data, index, isLast }) => (
  <li className={`d-inline-block ${index > 0 ? 'ml-2' : ''}`}>
    <small className='text-lighter'>
      {data.name !== 'JQuery' &&
      data.name !== 'Mysql' &&
      data.name !== 'Arduino' &&
      data.name !== 'C' &&
      data.name !== 'GraphQL' ? (
        <MDBIcon fab={data.fab} icon={data.icon} className={data.className} />
      ) : (
        <CustomIcon name={data.name} />
      )}
      <strong>
        &nbsp;{data.name}
        {!isLast ? ',' : '.'}
      </strong>
    </small>
  </li>
);

const Skills = ({ data }) => (
  <React.Fragment>
    <SubTitle>Skills</SubTitle>
    <MDBContainer className='p-0'>
      <p className='text-lighter m-0 p-0 font-weight-500 text-info'>
        <u>Proficients in:</u>
      </p>
      <ul className='list-unstyled d-inline-block mb-1'>
        {data.proficient.map((e, i) => (
          <Skill
            data={e}
            key={i}
            index={i}
            isLast={data.proficient.length - 1 === i}
          />
        ))}
      </ul>
      <p className='text-lighter m-0 p-0 font-weight-500 text-info'>
        <u>Experienced in:</u>
      </p>
      <ul className='list-unstyled d-inline-block mb-0'>
        {data.experienced.map((e, i) => (
          <Skill
            data={e}
            key={i}
            index={i}
            isLast={data.experienced.length - 1 === i}
          />
        ))}
      </ul>
    </MDBContainer>
  </React.Fragment>
);

export default Skills;

/** @format */

import React from 'react';

const Responsibilities = ({ list }) => (
  <ul>
    {list.map((e, i) => (
      <li className='text-lighter' key={i}>
        <small>{e}</small>
      </li>
    ))}
  </ul>
);

export default Responsibilities;

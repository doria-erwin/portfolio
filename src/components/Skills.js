import React from 'react';
import { MDBProgress, MDBContainer, MDBIcon } from 'mdbreact';
import SubTitle from './SubTitle';

import mysql from '../assets/img/mysql.png';
import jquery from '../assets/img/jquery.png';

const Skill = ({ data }) =>
    <li>
        <small className="text-lighter">
            {data.name !== "JQuery" && data.name !== "Mysql" && <MDBIcon fab={data.fab} icon={data.icon} className={data.className} />}
            {(data.name === "JQuery" || data.name === "Mysql") && <img src={data.name === "JQuery" ? jquery : mysql} alt={data.name} className="custom-logo" />}
            <strong>
                &nbsp;{data.name}
            </strong>
        </small>
        <MDBProgress material value={data.average} color="info" height="10px" />
    </li>


const Skills = ({ data }) =>
    <React.Fragment>
        <SubTitle>Skills</SubTitle>
        <MDBContainer className="p-0">
            <ul className="list-unstyled">
                {data.map((e, i) => <Skill data={e} key={i} />)}
            </ul>
        </MDBContainer>
    </React.Fragment>

export default Skills;
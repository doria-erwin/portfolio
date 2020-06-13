import React from 'react';
import { MDBProgress, MDBContainer, MDBIcon } from 'mdbreact';
import SubTitle from './SubTitle';

import mysql from '../assets/img/mysql.png';
import jquery from '../assets/img/jquery.png';
import arduino from '../assets/img/arduino.png';
import c from '../assets/img/c.png';

const CustomIcon = ({name}) =>{
    let Icon = null;
    switch(name){
        case 'Mysql':
            Icon = <img src={mysql} alt={name} className="custom-logo" />
        break;
        case 'JQuery':
            Icon = <img src={jquery} alt={name} className="custom-logo" />
        break;
        case 'Arduino':
            Icon = <img src={arduino} alt={name} className="custom-logo" />
        break;
        case 'C':
            Icon = <img src={c} alt={name} className="custom-logo" />
        break;
        default:
             Icon = null;
    }
    return Icon
}

const Skill = ({ data }) =>
    <li>
        <small className="text-lighter">
            {data.name !== "JQuery" && data.name !== "Mysql" && data.name !== "Arduino" && data.name !== "C" ? <MDBIcon fab={data.fab} icon={data.icon} className={data.className} /> :
            <CustomIcon name={data.name}/>
            }
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
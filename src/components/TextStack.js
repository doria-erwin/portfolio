import React from 'react';
import { MDBIcon } from 'mdbreact';
import mysql from '../assets/img/mysql.png';
import jquery from '../assets/img/jquery.png';
import arduino from '../assets/img/arduino.png';
import c from '../assets/img/c.png';

const Logo = ({data}) => {
    let logo = null;
    switch(data.name){
        case "Mysql":
            logo = <img src={mysql} alt={data.name} title={data.name} className="custom-logo-mysql" />;
        break;
        case "JQuery":
            logo = <img src={jquery} alt={data.name} title={data.name} className="custom-logo-jquery ml-1" />;
        break;
        case "Arduino":
            logo = <img src={arduino} alt={data.name} title={data.name} className="custom-logo-arduino ml-1" />;
        break;
        case "C":
            logo = <img src={c} alt={data.name} title={data.name} className="custom-logo-c ml-1" />;
        break;
        default:
            logo = <MDBIcon fab icon={data.icon} title={data.name} className={`${data.color} ml-1`} />
        break;
    }
    return logo;
}
    
const TextStacks = ({ data }) => data.map((e, i) => <Logo data={e} key={i}/>)

export default TextStacks;
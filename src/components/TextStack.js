import React from 'react';
import { MDBIcon } from 'mdbreact';
import mysql from '../assets/img/mysql.png';
import jquery from '../assets/img/jquery.png';

const Logo = ({data}) => {
    let logo = null;
    switch(data.name){
        case "Mysql":
            logo = <img src={mysql} alt="mysql" title="Mysql" className="custom-logo-mysql" />;
        break;
        case "JQuery":
            logo = <img src={jquery} alt="jquery" title="JQuery" className="custom-logo-jquery ml-1" />;
        break;
        default:
            logo = <MDBIcon fab icon={data.icon} title={data.name} className={`${data.color} ml-1`} />
        break;
    }
    return logo;
}
    
const TextStacks = ({ data }) => data.map((e, i) => <Logo data={e} key={i}/>)

export default TextStacks;
import React from 'react';
import Divider from './Divider';
import {MDBTypography} from 'mdbreact'

const Title = (props) =>
    <React.Fragment>
        <MDBTypography tag="h3" className="text-lighter font-weight-500 text-center">
            {props.children}
        </MDBTypography>
        <Divider type="title"/>
    </React.Fragment>

export default Title;
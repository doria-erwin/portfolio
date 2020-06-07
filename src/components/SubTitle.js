import React from 'react';
import {MDBTypography} from 'mdbreact'
const SubTitle = (props) =>
    <React.Fragment>
        <MDBTypography tag="h5" className="text-lighter font-weight-500">
            {props.children}:
        </MDBTypography>
    </React.Fragment>

export default SubTitle;
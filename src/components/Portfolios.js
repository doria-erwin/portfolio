import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import TextStacks from './TextStack';
import Stars from './Stars';

const Portfolio = ({ data }) =>
    <MDBCol sm="12" md="4" lg="3" className="p-0">
        <span className="portfolio-btn cursor-pointer">
            <img src={data.img} alt={data.title} className="w-100 h-100" />
            <div className="w-100 h-100">
                <p className="text-light font-weight-bold w-100">
                    {data.title}
                </p>
                <span className="left">
                    <Stars rate={data.rate} />
                </span>
                <span className="right">
                    <TextStacks data={data.textStacks} />
                </span>
            </div>
        </span>
    </MDBCol>


const Portfolios = ({ data }) =>
    <MDBContainer fluid className="p-5">
        <MDBRow>
            {data.map((e, i) => <Portfolio data={e} key={i} />)}
        </MDBRow>
    </MDBContainer>

export default Portfolios;


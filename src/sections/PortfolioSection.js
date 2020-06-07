import React from 'react';
import { MDBContainer } from 'mdbreact';
import Title from '../components/Title';
import Caption from '../components/Caption';
import data from '../data.json';
import Portfolios from '../components/Portfolios';

const { portfolioCaption, portfolios } = data;

const PortfolioSection = () =>
    <section id="portfolio" className="p-5 w-100 p-0 d-flex flex-row justify-content-center align-items-center elegant-color">
        <MDBContainer className="p-0 m-0 min-w-100">
            <Title>Portfolio</Title>
            <Caption>
                {portfolioCaption}
            </Caption>
            <Portfolios data={portfolios}/>
        </MDBContainer>
    </section>
export default PortfolioSection;
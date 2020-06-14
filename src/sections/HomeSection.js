import React from 'react';
import { MDBContainer, MDBIcon, MDBTypography } from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import data from '../data';
import cv from '../assets/others/resume.pdf';

const { jobTitle,quote } = data;

const HomeSection = () =>
    <section id="home" className="min-h-100 w-100 p-0 d-flex flex-row justify-content-center align-items-center">
        <MDBContainer className="mt-5">
            <MDBTypography tag="h1" id="app-author" className="title font-weight-bold text-center text-lighter m-0">
                Hello! I'm {process.env.REACT_APP_AUTHOR}
            </MDBTypography>
            <MDBTypography tag="h2" className="sub-title font-weight-bold text-center text-lighter m-0">
                -{jobTitle}-
            </MDBTypography>
            <MDBTypography tag="h6" className="quote text-center text-lighter font-weight-500">
               {quote}
            </MDBTypography>

            <MDBContainer className="text-center">
                <a href={cv} download="ErwinDoria.resume.pdf" className="btn btn-info btn-sm">Download Resume</a>
            </MDBContainer>
            <MDBContainer id="more-about" className="text-center position-absolute">
                <AnchorLink offset="60" href="#about" className="text-lighter font-weight-bold">
                    Learn more about what I do
                    <MDBIcon icon="chevron-down" className="d-block mt-1" />
                </AnchorLink>
            </MDBContainer>
        </MDBContainer>
    </section>
export default HomeSection;
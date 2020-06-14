import React from 'react';
import { MDBContainer, MDBIcon } from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import data from '../../data';
import cv from '../../assets/others/resume.pdf';

const { personal } = data;
const { email, mobileNumber, facebook, instagram, google, twitter, youtube } = personal;

const Footer = () =>
    <React.Fragment>
        <MDBContainer fluid className="elegant-color-dark text-center pt-5 pb-5">
            <ul className="list-unstyled list-inline" id="social-icons">
                <li className="list-inline-item bg-info">
                    <a href={facebook} target="_blank" rel="noopener noreferrer" className="text-dark w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                </li>
                <li className="list-inline-item bg-info">
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-dark w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <MDBIcon fab icon="twitter" />
                    </a>
                </li>
                <li className="list-inline-item bg-info">
                    <a href={youtube} target="_blank" rel="noopener noreferrer" className="text-dark w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <MDBIcon fab icon="youtube" />
                    </a>
                </li>
                <li className="list-inline-item bg-info">
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-dark w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <MDBIcon fab icon="instagram" />
                    </a>
                </li>
                <li className="list-inline-item bg-info">
                    <a href={google} target="_blank" rel="noopener noreferrer" className="text-dark w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <MDBIcon fab icon="google-plus-g" />
                    </a>
                </li>
            </ul>
            <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                    <AnchorLink href="#home" target="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            HOME
                    </small>
                    </AnchorLink>
                </li>
                <li className="list-inline-item">
                    <a href={cv} download="ErwinDoria.resume.pdf" arget="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            RESUME
                        </small>
                    </a>
                </li>
                <li className="list-inline-item">
                    <AnchorLink offset="60" href="#about" target="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            ABOUT
                    </small>
                    </AnchorLink>
                </li>
                <li className="list-inline-item">
                    <AnchorLink offset="60" href="#services" target="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            SERVICES
                    </small>
                    </AnchorLink>
                </li>
                <li className="list-inline-item">
                    <AnchorLink offset="60" href="#portfolio" target="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            PORTFOLIO
                    </small>
                    </AnchorLink>
                </li>
                <li className="list-inline-item">
                    <AnchorLink offset="60" href="#contacts" target="_blank" rel="noopener noreferrer" className="text-lighter w-100 h-100 d-flex flex-row justify-content-center align-items-center">
                        <small>
                            CONTACTS
                    </small>
                    </AnchorLink>
                </li>
            </ul>

            <a href={`mailto:${email}`} className="text-info d-block">
                <small>
                    <MDBIcon icon="envelope" />
                    &nbsp;
                    {email}
                </small>
            </a>
            <a href={`tel:${mobileNumber}`} className="text-info d-block">
                <small>
                    <MDBIcon icon="phone" />
                    &nbsp;
                    {mobileNumber}
                </small>
            </a>
        </MDBContainer>
        <MDBContainer fluid className="special-color-dark p-2 text-center">
            <small className="text-lighter">Copyright &copy; {new Date().getFullYear()}, All Right Reserved.</small>
        </MDBContainer>
    </React.Fragment>
export default Footer;
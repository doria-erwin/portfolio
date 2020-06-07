import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Service from '../components/Service';
import Title from '../components/Title';
import Caption from '../components/Caption';

// Images
import website from '../assets/img/website.png';
import mobile from '../assets/img/mobile.png';
import laptop from '../assets/img/laptop.png';
import iot from '../assets/img/iot.png';

import data from '../data.json';

const { servicesCaption, websiteCaption, mobileCaption, desktopCaption, iotCaption } = data;

const ServicesSection = () =>
    <section id="services" className="p-5 w-100 p-0 d-flex flex-row justify-content-center align-items-center special-color-dark">
        <MDBContainer className="p-0 m-0 min-w-100">
            <Title>Services</Title>
            <Caption>
                {servicesCaption}
            </Caption>
            <MDBRow className="mt-4 mr-auto ml-auto">
                <MDBCol sm="12" lg="3" md="6" className="text-center">
                    <Service img={website} title="Websites" caption={websiteCaption} />
                </MDBCol>
                <MDBCol sm="12" lg="3" md="6" className="text-center">
                    <Service img={mobile} title="Mobile apps" caption={mobileCaption} />
                </MDBCol>
                <MDBCol sm="12" lg="3" md="6" className="text-center">
                    <Service img={laptop} title="Laptop and Desktop" caption={desktopCaption} />
                </MDBCol>
                <MDBCol sm="12" lg="3" md="6" className="text-center">
                    <Service img={iot} title="Internet of Things" caption={iotCaption} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </section>
export default ServicesSection;
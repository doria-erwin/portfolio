import React from 'react';
import { MDBContainer } from 'mdbreact';
import Header from '../components/includes/Header';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import PortfolioSection from '../sections/PortfolioSection';
import ContactsSection from '../sections/ContactsSection';
import Footer from '../components/includes/Footer';

const Home = () =>
    <React.Fragment>
        <Header />
        <MDBContainer fluid className="p-0">
            <HomeSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactsSection />
        </MDBContainer>
        <Footer />
    </React.Fragment>

export default Home;
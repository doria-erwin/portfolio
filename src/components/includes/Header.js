import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
class Header extends Component {
    state = {
        isOpen: false
    }

    toggleCollapse = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    render() {
        return (
            <MDBNavbar color="elegant-color" dark expand="md" className="fixed-top" id="header">
                <MDBNavbarBrand>
                    <a className="nav-link" href="/">
                        <strong className="white-text">
                            {process.env.REACT_APP_NAME}
                        </strong>
                    </a>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> 
                        <Scrollspy className="navbar-nav ml-auto" items={ ['home', 'about', 'services','portfolio','contacts'] } offset={-70} currentClassName="active-item">
                            <MDBNavItem>
                                <AnchorLink className="nav-link" href="#home">Home</AnchorLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <AnchorLink offset='60' className="nav-link" href="#about">About</AnchorLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <AnchorLink offset='60' className="nav-link" href="#services">Services</AnchorLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <AnchorLink offset='60' className="nav-link" href="#portfolio">Portfolio</AnchorLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <AnchorLink offset='60' className="nav-link" href="#contacts">Contacts</AnchorLink>
                            </MDBNavItem>
                        </Scrollspy> 
                </MDBCollapse>
            </MDBNavbar>

        )
    }

}

export default Header;
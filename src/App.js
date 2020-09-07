/** @format */

import React, { Component } from 'react';
import Routes from './Routes';
import { isMobile } from 'react-device-detect';
import './assets/css/style.css';

class App extends Component {
  componentDidMount() {
    this.handleScroll();
    this.resize();
    window.addEventListener('resize', this.resize.bind(this));
    window.addEventListener('scroll', this.handleScroll);
  }

  resize() {
    const header = document.getElementById('header');
    if (isMobile) {
      header.classList.add('elegant-color');
      header.classList.remove('shadow-none');
      header.classList.remove('not-scrolled');
    }
    this.setState({ isMobile });
  }

  handleScroll = () => {
    const header = document.getElementById('header');
    if (!isMobile) {
      if (window.pageYOffset > 60) {
        if (header) {
          header.classList.add('elegant-color');
          header.classList.remove('shadow-none');
          header.classList.remove('not-scrolled');
        }
      } else {
        if (header) {
          header.classList.add('shadow-none');
          header.classList.add('navbar-light');
          header.classList.remove('elegant-color');
          header.classList.add('not-scrolled');
        }
      }
    } else {
      if (header) {
        header.classList.add('elegant-color');
        header.classList.remove('shadow-none');
        header.classList.remove('not-scrolled');
      }
    }
  };

  render() {
    return <Routes />;
  }
}

export default App;

import React, { Component } from 'react';
import Routes from './Routes';
import './assets/css/style.css';

class App extends Component {

  state = {
    isMobile: false
  }

  componentDidMount() {
    this.handleScroll();
    this.resize();
    window.addEventListener("resize", this.resize.bind(this));
    window.addEventListener("scroll", this.handleScroll);
  }

  resize() {
    const isMobile = window.innerWidth <= 760;
    const header = document.getElementById("header");
    if (isMobile) {
      header.classList.add("elegant-color");
      header.classList.remove("shadow-none");
      header.classList.remove("not-scrolled");
    }
    this.setState({ isMobile });
  }

  handleScroll = () => {
    const { isMobile } = this.state;
    const header = document.getElementById("header");
    if (!isMobile) {
      if (window.pageYOffset > 60) {
        if (header) {
          header.classList.add("elegant-color");
          header.classList.remove("shadow-none");
          header.classList.remove("not-scrolled");
        }
      } else {
        if (header) {
          header.classList.add("shadow-none");
          header.classList.add("navbar-light");
          header.classList.remove("elegant-color");
          header.classList.add("not-scrolled");
        }
      }
    }else{
      if (header) {
        header.classList.add("elegant-color");
        header.classList.remove("shadow-none");
        header.classList.remove("not-scrolled");
      }
    }

  }

  render() {
    return (
      <Routes />
    )
  }
}

export default App;

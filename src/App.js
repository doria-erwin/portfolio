import React, {Component} from 'react'; 
import Routes from './Routes';
import './assets/css/style.css';

class App extends Component{

  componentDidMount(){
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }
  
  handleScroll=()=>{
    const header = document.getElementById("header");
    if (window.pageYOffset > 60) {
        if(header){
          header.classList.add("elegant-color");
          header.classList.remove("shadow-none");
          header.classList.remove("not-scrolled");
        }
    }else{ 
      if(header){
        header.classList.add("shadow-none");
        header.classList.add("navbar-light");
        header.classList.remove("elegant-color");
        header.classList.add("not-scrolled");
      }
    }
   
  }

  render(){
    return(
      <Routes/>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import logo from './images/logo.png';
import shape from './images/shape.png';
import { FaDiscord, FaEnvelope, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";





const Home = () => {
  return (
    <div class="background">


    <div className='hero'>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
   <span></span>
        <nav>
            <img src={logo} className="logo" />
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/'>ABOUT</a></li>
                <li><a href='/'>PORTFOLIO</a></li>
                <li><a href='/'>SERVICES</a></li>
                <li><a href='/'>HIRE ME</a></li>
            </ul>
        </nav>
        <div className="detail">
            <h1>I'm Ankur <span1 className="style">Saini</span1></h1>
            <p>This is my portfolio website to show my all
                <br/>Details & Work Experience
                </p>
                <a href="#" className="button">DOWNLOAD MY CV</a>
                <div className="images">
                  <img src={shape} className="shape"/>
                  <img src={1} className="imagemain"/>
                </div>
        </div>
        
    </div>
    
     <footer>
      <div className="container">
        <div className="sec aboutme">
          <h2>About Me</h2>
          <p>Lorem Ipsum is simply dummy text of the 
            printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy
            text ever since the 1500s. when an unknown printer 
            took a galley of type and scrambled it to make a type 
            specimen book.</p>
            <ul className="sci">
            <li><a href='#'><FaDiscord className='fa' color='#7289d9' aria-hidden="true"/></a></li>
            <li><a href='#'><FaInstagram className='fa' color='#d6249f'id="insta" aria-hidden="true"/></a></li>
            <li><a href='#'><FaYoutube className='fa' color='#FF0000' aria-hidden="true"/></a></li>
            <li><a href='#'><FaLinkedinIn className='fa' color='#0A66C2' aria-hidden="true"/></a></li>
            </ul>
        </div>
        <div className="sec quickLinks">
          <h2>Quick Links</h2>
          <ul>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>Portfolio</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Hire Me</a></li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span2><FaMapMarkerAlt color='red' aria-hidden="true"/></span2>
              <span2>Herbertpur Vikas Nagar<br/>
              Dehradun, UK 248142,<br/>INDIA</span2>
            </li>
            <li>
              <span2><FaPhoneAlt aria-hidden="true"/></span2>
              <p><a href='tel:12345678900'>+917017885037</a></p>
            </li>
            <li>
              <span2><FaEnvelope color='#EA4335'aria-hidden="true"/></span2>
              <p><a href='maito:ankursaini795@gmail.com'>ankursaini795@gmail.com</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div className="date">
              <p>
                @{new Date().getFullYear()} AnkurDev. All Rights Reserved
              </p>
              </div>
     </footer>

    </div>
    
  )
};

export default Home;
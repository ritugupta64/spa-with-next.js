import React from 'react';
// import logo from './logo.svg';

import BannerImg from '../../static/media/banner1.jpg';
import Card1 from '../../static/media/Card1.jpg';
import Card2 from '../../static/media/card2.jpg';
import Card3 from '../../static/media/Card3.jpg';
import Card4 from '../../static/media/Card4.jpg';

import '../../styles/style.css';

const clickEventHander =() => {
  console.log('button clicked')
}

function Defects() {
  return (
    <div className="App">
      <a class="skip-main" href="#mainSection">Skip to main content</a>

      <button id="hamburger" aria-label="Navigation Menu" aria-expanded="false">☰</button>

      <div class="sidenav" role="navigation" aria-label="Menu">
        <a href="#home" aria-label="Navigate to home section">Home</a>
        <a href="#service" aria-label="Navigate to Services section">Services</a>
        <a href="#cards" aria-label="Navigate to Cards section">Cards</a>
      </div>
      {/* <nav class="sidenav">
        <a href="#home" aria-label="Navigate to home section">Home</a>
        <a href="#service" aria-label="Navigate to Services section">Services</a>
        <a href="#cards" aria-label="Navigate to Cards section">Cards</a>
      </nav> */}

      <div id="mainSection" className="main">

        <section>
            <div className="banner" aria-label="banner">
             <img className="hero-img" src={BannerImg} alt="banner showing the details"/>
            </div>
        </section>
        <h1>XYZ bank's Website</h1>
        <section id="service" className="App-aboutUs">
              <h3 class="w3l-sub">Offering the most </h3>
              <p class="sub-p">competitive rates and fees</p>
              <p class="sub-p2">Lorem ipsum dolor sit amet, do eiusmod magna aliqua</p>
              <p class="sub-p3">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

        <div id="pass1" className="scroll-region">
            <div tabindex="0" aria-label="Press arrow up and down key to scroll"> 
                scrollable region
            </div>
        </div>

        <form action="#" method="post" id="defects-form">
          <div class="wthree_contact_left_grid">
            <label for="name">Enter Your Name<input type="text" name="Name" placeholder="Name" id="name" required=""/></label>
            <label for="age">Enter Your Age<input type="number" name="Age" placeholder="Age" id="age" min="0" max="90" required=""/></label>
          </div>
          <button aria-label="click to submit form" onClick={(event)=>{event.preventDefault()}}> Submit </button>
        </form>


      <section id="cards" className="App-cards">
          <h2 class="w3l-sub">Available Cards for you </h2>
              <img src={Card1} alt="Visa Gold Card ending with 9010"></img>
              <img src={Card2} alt="Prepaid card ending with 3454"></img>
              <img src={Card3} alt="Visa Card ending with 0000"></img>
              <img src={Card4} alt="Scene scotia Card ending with 6789"></img>
        </section>

        </div>
    </div>
  );
}

export default Defects;

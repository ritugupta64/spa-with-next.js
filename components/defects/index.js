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
      {/* 6: Skip to main content link not present*/}
      <a class="skip-main" href="#mainSection">Skip to main content</a>
      {/* <header id="home" className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <div className="sidenav">
      {/* 3: Links must have discernible text*/}
        <a href="#home" aria-label="Navigate to home section">Home</a>
        <a href="#service" aria-label="Navigate to Service section">Services</a>
        <a href="#cards" aria-label="Navigate to Cards section">Cards</a>
      </div>

      <div id="mainSection" className="main">

        <section>
           {/* 7: Document must not have more than one banner landmark*/}
            <header role="banner">
             <img className="hero-img" src={BannerImg} alt="banner showing the details"/>
            </header>
        </section>

        <section id="service" className="App-aboutUs">
              <h3 class="w3l-sub">Offering the most </h3>
              <p class="sub-p">competitive rates and fees</p>
              <p class="sub-p2">Lorem ipsum dolor sit amet, do eiusmod magna aliqua</p>
              <p class="sub-p3">Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>

      {/* 5: Ensure that scrollable region has keyboard access*/}
        <div id="pass1" className="scroll-region" tabindex="0">
            <div>
                <p>scrollable region</p>
            </div>
        </div>

        <form action="#" method="post">
					<div class="wthree_contact_left_grid">
						<input type="text" name="Name" placeholder="Name" required=""/>
            {/* 9: Missing Mobile Keyboard Usability Enhancements for Input types */}
						<input type="number" name="Age" placeholder="Age" required=""/>
					</div>
          <button aria-label="click to submit form" onClick={(event)=>{event.preventDefault()}}> Submit </button>
				</form>


        <section id="cards" className="App-cards">
          <h3 class="w3l-sub">Available Cards for you </h3>
              <img src={Card1} alt="Visa Gold Card ending with 9010"></img>
              <img src={Card2} alt="Prepaid card ending with 3454"></img>
              <img src={Card3} alt="Visa Card ending with 0000"></img>
              <img src={Card4} alt="Scene scotia Card ending with 6789"></img>
        </section>

        </div>
    </div>
  );
}

export default Defects;

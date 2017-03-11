import React, { Component } from 'react';

import Icon from 'parts/Icon';
import Navbar from 'parts/Navbar';

import Logo from 'img/Logos/Logo_Type_Light.svg';
import Stars from 'img/stars.svg';
import MLHBadge from 'img/mlh-badge.svg';

import About from 'sections/About';
import Schedule from 'sections/Schedule';
import Judging from 'sections/Judging';
import Prizes from 'sections/Prizes';
import FAQ from 'sections/FAQ';
import Sponsors from 'sections/Sponsors';
import Contact from 'sections/Contact';

export default class Home extends Component {
  // static propTypes = {
  // }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static defaultProps = {
  // }

  render() {
    return (
      <div className="home">
        <main className="content" style={{ backgroundImage: `url(${Stars})` }}>
          <div className="container">
            <div className="columns">
              <div className="column col-10 col-sm-8">
                <Navbar />
              </div>
            </div>
          </div>
          <a id="mlh-trust-badge" href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank" rel="noopener noreferrer">
            <img src={MLHBadge} alt="Major League Hacking 2017 Hackathon Season" />
          </a>
          <div className="hero">
            <div>
              <h1>
                <img src={Logo} alt="HackUVic Logo" />
                <br /><br />
                <small>
                  March 11th and 12th at the University of Victoria
                </small>
              </h1>
            </div>
          </div>
          {/* Sections */}
          <About />
          <Schedule />
          <FAQ />
          <Sponsors />
          <Contact />
        </main>
      </div>
    );
  }
}

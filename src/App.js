import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const dallas = require("./img/dallas-boudreaux-hero-image.jpg");
    const dallasMobile = require("./img/dallas-boudreaux-hero-image-mobile.jpg");

    return (
      <div className="App bg-white br2 ma4">
        <div className="cf pa5-l pa4">
          {/* Left Side */}
          <div className="fl-l w-40-l w-100">
            <img src={dallas} className="dib-l dn" alt="Dallas Boudreaux with glasses leaning against wall smiling forward"/>
            <img src={dallasMobile} className="dn-l dib" alt="Dallas Boudreaux with glasses leaning against wall smiling forward"/>
          </div>
          {/* Right Side */}
          <div className="fl-l pl5-l w-60-l w-100">
            <header className="lemonde mb4">
              <h1 className="f2-ns f3 gold mb3-ns mb2">Dallas Boudreaux</h1>
              <h2 className="black-60 f3-ns f4 fw4 i mt3-ns mt2">Actor, Singer, Voice Actor</h2>
            </header>
            <p className="black-60 lh-copy">
              Dallas Boudreaux is a Tennesee-raised, Louisiana-bred actor. She is currently
              pursuing a BS in Theatre Performance at Middle Tennessee State University, and
              is a part of the Lamda Gamma cast of Alpha Psi Omega. When Dallas isn't belting
              her soul out on the stage, she enjoys reading and writing poetry, hiking, and
              playing with her one-eyed cat (Fetty Wap). She hopes to continue her studies in
              Los Angeles, California upon graduation.
            </p>
            <p className="black-60 lh-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mv5">
              <h3 className="f3 gold lemonde mb3">Contact</h3>
              <div className="flex flex-wrap f6">
                <p className="b dib mr4">
                  Email<br />
                  <a href="mailto:hi@dallasboudreaux.com" className="dib fw4 gold link mv2 underline-hover">
                    hi@dallasboudreaux.com
                  </a>
                </p>
                <p className="b dib">
                  Instagram<br />
                  <a href="https://instagram.com/dallybou" className="dib fw4 gold link mv2 underline-hover">
                    instagram.com/dallybou
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bt b--black-10 pa5-l pa4">
          <h3 className="f3 gold lemonde mb4">Career Experience</h3>
          <h4 className="f4 black-60 lemonde mb4">Acting</h4>
          <div className="flex flex-wrap justify-between">
            <div className="mb3 pr3-ns w-25-l w-50-m w-100">
              <div className="bg-black-10 br2 h5"></div>
              <p className="f6">
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div className="mb3 pr3-ns w-25-l w-50-m w-100">
              <div className="bg-black-10 br2 h5"></div>
              <p className="f6">
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div className="mb3 pr3-ns w-25-l w-50-m w-100">
              <div className="bg-black-10 br2 h5"></div>
              <p className="f6">
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div className="mb3 pr3-ns w-25-l w-50-m w-100">
              <div className="bg-black-10 br2 h5"></div>
              <p className="f6">
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

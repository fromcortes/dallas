import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const dallas = require("./img/dallas-boudreaux-hero-image.jpeg");

    return (
      <div className="App bg-white br2 ma4">
        <div className="cf pa5">
          {/* Left Side */}
          <div className="fl w-40-l">
            <img src={dallas} alt="Dallas Boudreaux with glasses leaning against wall smiling forward"/>
          </div>
          {/* Right Side */}
          <div className="fl pl5 w-60-l">
            <header className="lemonde mb4">
              <h1 className="f2 gold mb3">Dallas Boudreaux</h1>
              <h2 className="black-60 f3 fw4 i mt3">Actor, Singer, Voice Actor</h2>
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
              <div className="flex f6">
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
        <div className="bt b--black-10 pa5">
          <h3 className="f3 gold lemonde mb4">Career Experience</h3>
          <h4 className="f4 black-60 lemonde mb4">Acting</h4>
          <div className="flex justify-between">
            <div>
              <div className="bg-black-10 br2 h5"></div>
              <p>
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div>
              <div className="bg-black-10 br2 h5"></div>
              <p>
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div>
              <div className="bg-black-10 br2 h5"></div>
              <p>
                <b className="dib mb2">Next to Normal (Musical 2016)</b><br />
                <em>Diana, Lead Role</em>
              </p>
            </div>
            <div>
              <div className="bg-black-10 br2 h5"></div>
              <p>
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

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App bg-white br2 ma5 pa5">
        <div className="cf">
          {/* Left Side */}
          <div className="fl">
            Left
          </div>
          {/* Right Side */}
          <div className="fl">
            <header className="lemonde">
              <h1 className="f2 gold mb3">Dallas Boudreaux</h1>
              <h2 className="black-60 f3 fw4 i mt3">Actor, Singer, Voice Actor</h2>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

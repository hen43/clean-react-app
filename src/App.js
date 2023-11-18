import './App.css';
import React from 'react'

import Kevilry from './assets/kevilry.jpg'

function App() {
  return (
      <div className="app">
        <div className="thingy">
          <img src={Kevilry} className="robot" alt="kevilry"></img>
          <div className="text">
            <h1>WSG MY BRO</h1>
            <p>FRC is love, FRC is life. Joe mama!!! Something... filler text... Lorem ipsum something else blehh... joe !!! xdddd something somethung asidjsaiodjsaiodj ioasjd osaasioj sad</p>
          </div>
        </div>
      </div>
  );
}

export default App;

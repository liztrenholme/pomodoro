import React, { Component } from 'react';
import './pomodoro.css';
import Display from '../display/index';
import InfoIconCircle from './assets/infoicon.png';
// import { } from '../modules/index.js';
import json from '../../../package.json';

class Pomodoro extends Component {
state = {
  
}

render() {
  return (
    <div className="main">
      <h1 className='header' style={{color: contrast}}>Pomodoro</h1>
      <div className='infoIcon'>
        <img 
          src={InfoIconCircle} 
          onClick={this.handleShowMobileInstructions}
          width='20px'
          height='20px'
          alt='info-icon' />
      </div>
      <div><h3 style={{color: 'darkRed'}}>{error}</h3></div>
      <Display color={color} />
      <h3>Version: {json.version}</h3>
    </div>
  );
}
}


export default Pomodoro;
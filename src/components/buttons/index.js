import React, { Component } from 'react';
import './buttons.css';
// import PropTypes from 'prop-types';

class Buttons extends Component {
  render() {
    return (
      <div className='buttons'>
        <button className='start basic'>Start</button>
        <button className='stop basic'>Stop</button>
        <button className='reset basic'>Reset</button>
      </div>
    );
  }
}

Buttons.propTypes = {
//   color: PropTypes.string
};

export default Buttons;
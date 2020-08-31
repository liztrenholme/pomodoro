import React, { useEffect } from 'react';
import './display.css';
import PropTypes from 'prop-types';

const Display = (props) => {
  useEffect((time) => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!')
      alert(time)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

    return (
      <div className='display'>
        <div style={{
          width: '20em', 
          height: '10em', 
          backgroundColor: props.color, 
          border: '5px solid #fff',
          borderRadius: '15px'
        }}
        />
      </div>
    );
}

Display.propTypes = {
  color: PropTypes.string,
  time: PropTypes.number
};

export default Display;
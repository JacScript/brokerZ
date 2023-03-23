import React from 'react';
const house = require("./images/house3.jpg");

import './OptionItems.styles.scss';

const OptionItems = () => (
    <div className='option-container'>
       <div className="options">
          <img src={house} alt="HOUSE" />
          <div className='option-details'>
          <span className='name'>Houses</span>
          <span className='arrow'>arrow</span>
          </div>
        </div>
    </div>
)

export default OptionItems 
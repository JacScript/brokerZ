import React, { useState } from 'react'
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined';


import OptionDropDown from '../option-dropdown-component/OptionDropDown-component';

import './NavBar.style.scss'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <div className='nav-container'>
            <div className='nav-content'>
                <div className='left-content'>
                    <button className='button'>
                        <DensitySmallOutlinedIcon onClick={handleClick} />
                    </button>
                    <h1>SC BROKERZ</h1>
                </div>
                <div className='right-content'>
                    <div className='sign-in'>SIGN IN</div>
                    <span>|</span>
                    <div className='register'>REGISTER </div>
                </div>
            {
                isOpen
                    ?
                    <OptionDropDown className='optiondropdown' />
                    : null
            }
            </div>
        </div>
    )
}



export default NavBar;
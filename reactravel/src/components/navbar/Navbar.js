import React, {useState} from 'react'
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube} from 'react-icons/fa'

import './NavbarStyles.css'


function NavBar()
{
    return(
    <div className='navbar'>
    
        <div className="logo">
            <h2>REACTRAVEL</h2>
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>Booking</li>
            <li>Views</li>
        </ul>
        <div className="nav-menu-icons">
            <BiSearch className='menu-icon' />'
            <BsPerson className='menu-icon' />'
        </div>
        <div className="full-menu">
            <HiOutlineMenuAlt4 className='menu-icon' />
        </div>

        <div className="mobile-menu">
            <ul className="mobile-navbar">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>Booking</li>
                <li>Views</li>
            </ul>
            <div className="mobile-menu-bottom">
                <div className="mobile-menu-icons">
                <button>Search</button>
                <button>My Account</button>
                </div>
                <div className="social-media-icons">
                    <FaFacebook className='menu-icon' />
                    <FaTwitter className='menu-icon' />
                    <FaYoutube className='menu-icon' />
                </div>
            </div>
        </div>

    </div>
    )
}

export default NavBar
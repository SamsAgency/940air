import React from 'react'
import './Mainnav.css'
import {NavLink} from 'react-router-dom'
import LOGO from '../../assets/940 air cargo logo.png'

const Mainnav = () => {
    return (
        <div className="main-nav">
            <div className="main-nav-logo">
                <NavLink to="/">
                 <img className="main-nav-logo-img" src={LOGO} alt="940 air logo"/>
                </NavLink>
            </div>
            <ul className="main-nav-ul">
                <NavLink to ="/" className="main-nav-li">Home</NavLink><hr/>
                <NavLink to ="/about" className="main-nav-li">About</NavLink><hr/>
                <NavLink to ="/air" className="main-nav-li">Air</NavLink><hr/>
                <NavLink to ="/ground" className="main-nav-li">Ground</NavLink><hr/>
                <NavLink to ="/contact" className="main-nav-li">Contact</NavLink> <hr/>
            </ul>
            
        </div>
    )
}

export default Mainnav

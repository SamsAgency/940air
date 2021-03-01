import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar-logo">LOGO</h2>
            <ul className="navbar-ul">
                <li className="navbar-li">Search</li>
                <li className="navbar-li">Blogs</li>
                <li className="navbar-li">Request a quote</li>
                <li className="navbar-li">Customer resources</li>
            </ul>
        </div>
    )
}

export default navbar

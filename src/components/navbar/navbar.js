import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar-logo">NINE FORTY AIR</h2>
            <ul className="navbar-ul">
                <Link to='/blogs' className="navbar-li">Blogs</Link>
                <Link to='/contact' className="navbar-li">Request a quote</Link>
                <Link to="/customer-resources" className="navbar-li">Customer resources</Link>
            </ul>
        </div>
    )
}

export default navbar

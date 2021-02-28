import React from 'react'
import './footer.css'
import logo from '../../../assets/940-AIR-LOGO.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="footer-logo">
                    <img className="footer-image" src={logo} alt='logo'/>
                </div>
            
                <div className="footer-middle">
                    <h2>News Letter</h2>
                    <p>Get our latest news & market updates delivered directly to your inbox.</p>
                    <input className="footer-input" placeholder="Enter your email"/>
                </div>
                <div className="footer-right">
                    <h2>Follow us</h2>
                    <h2>#AirCargo</h2>
                    <div className="social-icons">
                        <i href="#" className="social-btns">F</i>
                        <i href="#" className="social-btns">T</i>
                        <i href="#" className="social-btns">L</i>
                        <i href="#" className="social-btns">Y</i>
                    </div>
                </div>
            </div>

            <hr width="90%" />

            <div className="lower-footer">
                <ul className="footer-nav">
                    <li className="footer-nav-list">Privacy Policy</li>
                    <li className="footer-nav-list">Terms & Condition</li>
                    <li className="footer-nav-list">Responsible disclosure</li>
                    <li className="footer-nav-list">FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-div text-center '>
            <div className="row">
                <div className='col-lg-3 footer-card'>
                    <h6>Discover</h6>
                </div>

                <div className='col-lg-3 footer-card'>
                    <h6>Learn About</h6>
                </div>

                <div className='col-lg-3 footer-card'>
                    <h6>Connect With Us</h6>
                </div>

                <div className='col-lg-3'>
                    <h6>About </h6>
                </div>
            </div>
            <div>
                <p> {new Date().getFullYear()} </p>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed veniam a repudiandae illum laborum ratione ad vel recusandae impedit eum saepe tenetur natus officia cupiditate dolor, nobis fugit omnis error.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="fb-icon" />
                    <img src={assets.twitter_icon} alt="tweeter icon" />
                    <img src={assets.linkedin_icon} alt="linkedin icon" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-1234567890</li>
                    <li>tomato@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
        Copyright © 2024 Tomato. All rights reserved.
        </p>
    </div>
  )
}

export default Footer

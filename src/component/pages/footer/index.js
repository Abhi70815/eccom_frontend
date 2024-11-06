import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="column">
                <h3>Shoppee</h3>
            </div>
            <div className="column">
                <h3>Learn More</h3>
                <p><p>About Us</p></p>
                <p><p>Categories</p></p>
                <p><p>Exchange Policy</p></p>
                <p><p>Order Now</p></p>
                <p><p>FAQ</p></p>
                <p><p>Privacy Policy</p></p>
            </div>
            <div className="column">
                <h3>Our Community</h3>
                <p><p>Terms and Conditions</p></p>
                <p><p>Special Offers</p></p>
                <p><p>Customer Reviews</p></p>
            </div>
            <div className="column">
                <h3>Contact Us</h3>
                <p>Contact Number: 123-456-7890</p>
                <p>Email Address: mailto:info@shoppee.com" info@shoppee.com</p>
            </div>
            <div className="column">
                <h3>Social</h3>
                <div className="social">
                    <p><i className="fab fa-facebook-f"></i></p>
                    <p><i className="fab fa-instagram"></i></p>
                    <p><i className="fab fa-youtube"></i></p>
                    <p><i className="fab fa-twitter"></i></p>
                    <p><i className="fab fa-linkedin-in"></i></p>
                </div>
            </div>
        </div>
        <div className="bottom">
            2024 Shoppee | All rights reserved.
        </div>
    </div>
  )
}

export default Footer
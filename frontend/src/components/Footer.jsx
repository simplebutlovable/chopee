import React, { Component } from 'react';
import "../css/footer.css";



function Footer(){
    

return(
<footer>
    <div className="subfooter">
        <div className="custumer-service">
            <p>Custumer Service</p>
            <div className="service-menu">
                <ul>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">Payment Method</a></li>
                    <li><a href="#">ChopeePay</a></li>
                    <li><a href="#">Order Tracking</a></li>
                    <li><a href="#">Free Shipping</a></li>
                    <li><a href="#">Return & Refund</a></li>
                    <li><a href="#">Chopee Guarantee</a></li>
                    <li><a href="#">Overseas Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className="about-chopee">
            <p>About Chopee</p>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Chopee Blog</a></li>
                <li><a href="#">Chopee Careers</a></li>
                <li><a href="#">Chopee Policy</a></li>
                <li><a href="#">Chopee Mall</a></li>
                <li><a href="#">Seller Centre</a></li>
                <li><a href="#">Flash Deals</a></li>
                <li><a href="#">Media Contact</a></li>
            </ul>
        </div>
        <div className="payment">
            <p>Payment</p>
            <div className="payments-slot"></div>
        </div>
        <div className="follow">
            <div className="follow-title">
                <p>Follow Us</p>
            </div>
            <ul>
                <li>
                    <a href="#">
                        <img  src={`${process.env.PUBLIC_URL}/images/fb_sub.png`} />
                        <p>Facebook</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img  src={`${process.env.PUBLIC_URL}/images/insta_sub.png`} />
                        <p>Instagram</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img  src={`${process.env.PUBLIC_URL}/images/twitter.png`} />
                        <p>Twitter</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <img  src={`${process.env.PUBLIC_URL}/images/linkedin_sub.png`} />
                        <p>Linked In</p>
                    </a>
                </li>
            </ul>
        </div>
        <div className="chopee-download">
            <p>Chopee App Download</p>
            <div className="download-grid">
                <div className="qrcode"></div>
                <div className="stores">
                    <img  src={`${process.env.PUBLIC_URL}/images/apple-store.png`} />
                    <img  src={`${process.env.PUBLIC_URL}/images/google-play.png`} />
                </div>
            </div>
        </div>
    </div>
    <div className="footer-separator"></div>
   <div className="main-footer">
        <div className="left-footer">
            <p>&copy; 2020 Chopee</p>
            <p>(THIS IS A SHOPEE WEBSITE CLONE)</p>
            <p>All Rights Researved</p>
        </div>
    </div>
</footer>
);
}

export default Footer
import React from 'react';

function Footer() {
  return (
    <>
        <div className="containerss">
        <div className="nav-item">
            <h3>WHO ARE WE</h3>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
        </div>
        <div className="nav-item">
            <h3>HELP</h3>
            <a href="#">Shipping & Return Policy</a>
            <a href="#">Help Center</a>
            <a href="#">Terms & Conditions</a>
        </div>
        <div className="nav-item">
            <h3>QUICKLINKS</h3>
            <a href="#">Offers</a>
            <a href="#">Sitemap</a>
            <a href="#">Style Files</a>
        </div>
        <div className="nav-item">
            <h3>FOLLOW US</h3>
            <div id="footericon">
            <a href="#"><i class="fa fa-instagram"></i></a>
            <a href="#"><i class="fa fa-facebook"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a></div>
        </div>
    </div>
    <div className="footer">
    <p>© 2024 Clothify. All Rights Reserved</p>
    </div>
    </>
 
  );
}

export default Footer;

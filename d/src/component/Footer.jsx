import React from 'react';
import './style.css';
import fbImage from '../assest/fbimg.png';
import instagramImage from '../assest/instagram.png';
import linkedinImage from '../assest/linkedinimg.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h2>Training <span className="blog-title">Blog</span></h2>
          <p>Welcome to our technical blog, where we delve into the world of cutting-edge technologies and explore their practical applications.</p>
        </div>
        <div className="footer-column">
          <h2>Category</h2>
          <ul id="cat">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">VS Code</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <p>+91 -8XXXX-XX-XXX</p>
          <p><a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
        </div>
        <div className="footer-column">
          <h2>Follow us on</h2>
          <div className="social-media">
            <a href="#"><img src={fbImage} alt="Facebook" /></a>
            <a href="#"><img src={instagramImage} alt="Instagram" /></a>
            <a href="#"><img src={linkedinImage} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>© 2023 Training Blog</p>
        <p>Made With ❤ Mohali, India</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Pinteress</h3>
          <p>Discover and share the world's most inspiring photos. Join our community of photographers and visual storytellers.</p>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Photos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500K</span>
              <span className="stat-label">Artists</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/t/nature">Nature</Link></li>
            <li><Link to="/t/architecture-interior">Architecture</Link></li>
            <li><Link to="/t/monochromatic">Black & White</Link></li>
            <li><Link to="/t/experimental">Experimental</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li><a href="#">Submit a Photo</a></li>
            <li><a href="#">Licensing</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Collections</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-link">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
          <div className="newsletter">
            <h4>Join Our Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Pinteress. All rights reserved.</p>
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
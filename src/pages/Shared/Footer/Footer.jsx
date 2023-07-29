import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Medibay</h1>
              
          <h2>Contact</h2>
          
          <address>
            East kazipara, kafrul, Dhaka<br/>
                
            <a class="footer__btn" href="mailto:sanjoyroynisan@gmail.com">Email Us</a>
          </address>
        </div>
        
        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Useful Links</h2>
      
            <ul class="nav__ul">
              <li>
                <a href="/">Home</a>
              </li>
      
              <li>
                <a href="/menu">Our shop</a>
              </li>
                  
              <li>
                <a href="/order/OTC-Medicines">Order</a>
              </li>
            </ul>
          </li>
          
          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Categories</h2>
            
            <ul class="nav__ul nav__ul--extra">
              
              
              <li>
                <Link to="/order/OTC-Medicines">OTC-Medicines</Link>
              </li>
              
              <li>
              <Link to="/order/Personal Care">Personal Care</Link>
              </li>
              
              <li>
              <Link to="/order/Vitamins & Supplements">Vitamins & Supplements</Link>
              </li>
              
              <li>
              <Link to="/order/Medical Device">Medical Device</Link>
              </li>
              
              <li>
              <Link to="/order/Dental Care">Dental Care</Link>
              </li>
              
            </ul>
          </li>
          
        </ul>
        <br/>
        <div class="legal">
          <p>&copy; 2023 MediBay. All rights reserved.</p>
          
          <div class="legal__links">
            <span>Made by MediBay</span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
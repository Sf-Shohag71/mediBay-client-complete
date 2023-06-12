import "./Footer.css";
const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Medibay</h1>
              
          <h2>Contact</h2>
          
          <address>
            5534 Somewhere In. The World 22193-10212<br/>
                
            <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
          </address>
        </div>
        
        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Media</h2>
      
            <ul class="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
      
              <li>
                <a href="#">Print</a>
              </li>
                  
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          
          <li class="nav__item nav__item--extra">
            <h2 class="nav__title">Categories</h2>
            
            <ul class="nav__ul nav__ul--extra">
              <li>
                <a href="#">OTC-Medicine</a>
              </li>
              
              <li>
                <a href="#">Personal Care</a>
              </li>
              
              <li>
                <a href="#">Vitamin and Supliments</a>
              </li>
              
              <li>
                <a href="#">Dental Care</a>
              </li>
              
              <li>
                <a href="#">Medical Devices</a>
              </li>
              
            </ul>
          </li>
          
          <li class="nav__item">
            <h2 class="nav__title">Legal</h2>
            
            <ul class="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              
              <li>
                <a href="#">Terms of Use</a>
              </li>
              
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <br/>
        <div class="legal">
          <p>&copy; 2023 MediBay. All rights reserved.</p>
          
          <div class="legal__links">
            <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
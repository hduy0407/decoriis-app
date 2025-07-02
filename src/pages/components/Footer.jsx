import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">DECORIIS WOODCRAFT</h3>
          <p className="footer-description">
            Crafting timeless interiors with precision and passion.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">LIÊN HỆ</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <Phone className="footer-icon" />
              <span>(+98) 093 463 2664 <br /> (+84) 098 203 2695 </span>
            </li>
            <li className="footer-contact-item">
              <Mail className="footer-icon" />
              <span>contact@decoriis.com</span>
            </li>
            <li className="footer-contact-item">
              <MapPin className="footer-icon" />
              <span>Ngách 15, ngõ 7 Độc Lập, Cự Khôi, Long Biên, Hà Nội</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subheading">THEO DÕI</h4>
          <div className="footer-socials">
            <a href="#" className="social-link">
              <Instagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Facebook className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <MessageCircle className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <Phone className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DECORIIS WOODCRAFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
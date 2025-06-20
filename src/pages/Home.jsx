import "./../styles/Home.css";
import React from "react";
import Header from "./components/Header.jsx";
import { Instagram, Facebook, MessageCircle, Phone } from 'lucide-react';
import mainkitchen from '../assets/mainkitchen.jpeg';
import mainkitchen2 from '../assets/mainkitchen2.jpeg';
import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animatedElements, setAnimatedElements] = useState({
    title: false,
    subtitle: false,
    description: false,
    button: false,
    social: false
  });

  const navigate = useNavigate()

  const handleNavigateMore = () => {
    navigate('/more')
  }

  useEffect(() => {
    setShowOverlay(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
    
  }, []);

  return (
    <div className="home-wrapper">
      <Header />
      <div className="home-container">
        <section className="hero-section">
          {/* Mobile Background Image */}
          {isMobile && (
            <div className="hero-bg-image">
              <img src={mainkitchen} alt="Modern kitchen interior" />
            </div>
          )}

          <div className="hero-container">
            <div className="hero-grid">
              {/* Text Content */}
              <div className="hero-text">
                <div>
                  <h1 className="hero-title">DECORIIS WOODCRAFT</h1>
                  <p className="hero-subtitle">IN PARTNERSHIP FOR BEAUTIFUL INTERIORS</p>
                </div>
                
                <div className="hero-description-box">
                  <p className="hero-description">
                    Decoriis Woodcraft là công ty chuyên sản xuất và cung cấp vật liệu gỗ plywood
                    phủ laminate cao cấp, có trụ sở tại Singapore. Với nhiều năm kinh nghiệm trong 
                    ngành nội thất, Decoriis Woodcraft đã khẳng định vị thế là đối tác đáng tin cậy
                    của các nhà thiết kế, kiến trúc sư và nhà sản xuất nội thất trên toàn khu vực.
                  </p>
                  
                  <button className="hero-button" onClick={handleNavigateMore}>
                    <span className="hero-button-text">XEM THÊM</span>
                  </button>
                </div>

                <div className="hero-social">
                  {[Instagram, Facebook, MessageCircle, Phone].map((Icon, idx) => (
                    <div key={idx} className="hero-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Image Section */}
              {!isMobile && (
                <div className="hero-image-wrapper">
                  <div className="hero-image-overlay-wrapper">
                    <div className="hero-banner">
                      <div className="banner-bar"></div>
                      <p className="banner-text">LET'S MAKE YOUR DREAM A REALITY.</p>
                    </div>
                    
                    <div className="main-image-container">
                      <img 
                        src={mainkitchen}
                        alt="Modern kitchen interior"
                        className={`hero-img base-img ${showOverlay ? 'slide-in' : ''}`}
                      />
                      <img 
                        src={mainkitchen2}
                        alt="Interior detail"
                        className={`hero-img overlay-img ${showOverlay ? 'slide-in' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
    
  );
}
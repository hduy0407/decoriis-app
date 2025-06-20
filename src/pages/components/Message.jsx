import React from 'react';
import { Quote, Heart } from 'lucide-react';
import '../../styles/Message.css'; // Import the CSS
import image2 from '../../assets/image2.jpeg'

const MessagePage = () => {
  return (
    <section className="message-section">
      <div className="message-container">
        {/* Header */}
        <div className="message-header">
          <h1 className="message-title">
            THÔNG ĐIỆP TỪ CHÚNG TÔI
          </h1>
          <div className="message-line"></div>
          <p className="message-subtitle">
            Triết lý và tầm nhìn định hướng mọi hoạt động của Decoriis Woodcraft
          </p>
        </div>

        {/* Main Message Section */}
        <div className="message-card">
          <div className="message-grid">
            {/* Left - Image */}
            <div className="message-image-wrapper">
              <img 
                src={image2}
                alt="Modern Interior Design Philosophy"
                className="message-image"
              />
              <div className="image-overlay"></div>
              <div className="quote-icon-box">
                <Quote className="quote-icon" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="message-content">
              <div className="content-line"></div>
              <blockquote className="content-quote">
                "Vật liệu không chỉ là nền móng cho thiết kế, mà còn là linh hồn của không gian sống."
              </blockquote>
              <p className="content-description">
                Đó là lý do vì sao từng tấm gỗ của chúng tôi được tạo ra với sự chỉn chu, đam mê và tầm nhìn dài hạn. 
                Chúng tôi không ngừng đổi mới để mang đến những giải pháp vật liệu vừa đẹp - vừa bền - vừa đảm bảo sức khỏe.
              </p>
              <div className="content-footer">
                <div className="heart-icon-box">
                  <Heart className="heart-icon" />
                </div>
                <span className="footer-brand">DECORIIS WOODCRAFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;

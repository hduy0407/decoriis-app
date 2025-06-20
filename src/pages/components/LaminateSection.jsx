import React from 'react';
import { Instagram } from 'lucide-react';
import '../../styles/LaminateSection.css';
import Logo from '../../assets/Logo.png';
import laminate1 from '../../assets/laminate1.jpg';
import laminate2 from '../../assets/laminate2.jpg'

const LaminateSection = () => {
  return (
    <section className="laminate-section">
      <div className="laminate-container">
        <div className="laminate-border">
          {/* Logo in top right */}
          <div className="logo-container">
            <image src={Logo} />
          </div>

          {/* DECORIS WOODCRAFT vertical text */}
          <div className="vertical-text">
            <p className="vertical-text-content">
              DECORIIS WOODCRAFT
            </p>
          </div>

          <div className="laminate-grid">
            {/* Left side */}
            <div className="laminate-left">
              <div className="top-image">
                <img 
                  src={laminate1}
                  alt="Modern Bedroom Design with Laminate"
                />
              </div>

              <div className="bottom-section">
                <div className="bottom-text">
                  <div className="decor-line"></div>
                  <div>
                    <h1 className="title">LAMINATE</h1>
                    <p className="subtitle">SỰ LỰA CHỌN CỦA TƯƠNG LAI</p>
                  </div>
                  <div className="website">
                    <p>WWW.DECORIIS.VN</p>
                  </div>
                </div>

                <div className="secondary-image">
                  <img 
                    src={laminate2}
                    alt="Luxury Bedroom Interior"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="laminate-right">
              <p className="description">
                LAMINATE LÀ GIẢI PHÁP BỀ MẶT HIỆN ĐẠI, KẾT HỢP VẺ ĐẸP 
                THẨM MỸ VỚI ĐỘ BỀN VƯỢT TRỘI. ĐA DẠNG MÀU SẮC, CHỐNG 
                CHÁY XƯỚC, KHÁNG ẨM VÀ THÂN THIỆN VỚI MÔI TRƯỜNG. SỰ 
                LỰA CHỌN LÝ TƯỞNG CHO MỌI KHÔNG GIAN SỐNG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaminateSection;

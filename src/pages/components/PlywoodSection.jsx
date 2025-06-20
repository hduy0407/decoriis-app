import React from 'react';
import { Instagram } from 'lucide-react';
import '../../styles/PlywoodSection.css';
import plywood1 from '../../assets/plywood1.png'
import plywood3 from '../../assets/plywood3.jpg'

const PlywoodSection = () => {
  return (
    <section className="plywood-section">
      <div className="plywood-container">
        <div className="plywood-border">
          {/* Logo in top right */}
          <div className="logo-container">
          </div>

          <div className="plywood-grid">

            {/* left side */}
            <div className="plywood-right">
              <p className="description">
                GỖ PLYWOOD VƯỢT TRỘI HƠN MDF TRONG THI CÔNG NỘI 
                THẤT ẤM TƯỢNG NHỜ ĐỘ BỀN CAO, CHỊU ẨM TỐT VÀ ÍT CONG 
                VÊNH. CẤU TRÚC ÉP CHÉO GIÚP PLYWOOD BẢM VỊT CHẮC, 
                CHỊU LỰC TỐT, ĐẶC BIỆT PHÙ HỢP VỚI CÁC HẠNG MỤC TREO 
                TƯỜNG. VẬT LIỆU NÀY CŨNG DỄ THI CÔNG, ÍT TẠO BỤI ĐỘC 
                HẠI, THÂN THIỆN VỚI SỨC KHỎE VÀ MÔI TRƯỜNG HƠN MDF.
              </p>
            </div>

            {/* right side */}
            <div className="plywood-left">
              <div className="top-image">
                <img 
                  src={plywood1}
                  alt="Modern Office Design"
                />
              </div>

              <div className="bottom-section">
                <div className="bottom-text">
                  <div className="decor-line"></div>
                  <div>
                    <h1 className="title">PLYWOOD</h1>
                    <p className="subtitle">NHẸ NHÀNG NHƯNG CHẮC CHẮN</p>
                  </div>
                  <div className="website">
                    <p>WWW.DECORIIS.VN</p>
                  </div>
                </div>

                <div className="office-image">
                  <img 
                    src={plywood3}
                    alt="Modern Kitchen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlywoodSection;

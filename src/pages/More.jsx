import React from 'react';
import '../styles/More.css';
import { Instagram, Facebook, MessageCircle, Phone } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import MessagePage from './components/Message';
import laminate2 from '../assets/laminate2.jpg'

const More = () => {
    return (
        <div className="more-page">
            <Header />
            <section className="more-hero">
                
                <div className="more-container">
                <div className="more-grid">
                    {/* Left Content - Image */}
                    <div className="more-image-wrapper">
                    <img 
                        src={laminate2}
                        alt="Modern Interior Design"
                        className="more-image"
                    />
                    </div>

                    {/* Right Content */}
                    <div className="more-content">

                    <div className="more-website">
                        <p>WWW.DECORIS.VN</p>
                    </div>

                    <div className="more-socials">
                        <a href="#" className="more-social"><Instagram className="more-icon" /></a>
                        <a href="#" className="more-social"><Facebook className="more-icon" /></a>
                        <a href="#" className="more-social"><MessageCircle className="more-icon" /></a>
                        <a href="#" className="more-social"><Phone className="more-icon" /></a>
                    </div>

                    <div className="more-brand">
                        <p>DECORIS WOODCRAFT</p>
                    </div>

                    <div className="more-heading">
                        <h1>VẺ ĐẸP TOÀN CẦU<br />KHÔNG GIAN VIỆT</h1>
                        <p className="more-subheading">LUÔN SẴN SÀNG ĐỒNG HÀNH CÙNG BẠN.</p>
                    </div>

                    <div className="more-description">
                        <p>
                        Biến mọi không gian thành tác phẩm nghệ thuật với nội thất gỗ plywood 
                        phủ laminate cao cấp - giải pháp tối ưu cho độ bền và thẩm mỹ.
                        </p>
                        <p>
                        Cốt plywood chắc chắn, chống cong vênh - kết hợp bề mặt laminate hiện 
                        đại, dễ vệ sinh, sang trọng theo thời gian.
                        </p>
                        <p className="more-highlight">
                        Decoris Woodcraft - Tỉ mỉ trong từng chi tiết, đẳng cấp trong từng thiết kế.
                        </p>
                    </div>

                    <div className="more-line"></div>
                    </div>
                </div>
                </div>
            </section>
            <MessagePage />
            <Footer />
        </div>
    );
};

export default More;

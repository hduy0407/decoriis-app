import React from 'react';
import { Instagram, Award, Shield, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/Portfolio.css';
import Header from './components/Header';
import Footer from './components/Footer';

const Portfolio = () => {
  const coreValues = [
    {
      icon: <Award className="icon" />,
      title: "Chất lượng dẫn đầu",
      description: "Mỗi sản phẩm được kiểm định nghiêm ngặt, bảo đảm độ chính xác và tính ổn định tối đa."
    },
    {
      icon: <Shield className="icon" />,
      title: "Thẩm mỹ tinh tế",
      description: "Mẫu mã laminate đa dạng, kết cấu sắc sảo, phù hợp với nhiều phong cách kiến trúc."
    },
    {
      icon: <Users className="icon" />,
      title: "Bền vững & trách nhiệm",
      description: "Vật liệu thân thiện với môi trường, quy trình sản xuất tiết kiệm tài nguyên."
    },
    {
      icon: <Globe className="icon" />,
      title: "Đồng hành cùng khách hàng",
      description: "Lắng nghe - Hiểu biết - Tư vấn - Đồng sáng tạo."
    }
  ];

  const capabilities = [
    "Nhà máy sản xuất đạt chuẩn Singapore với hệ thống máy móc CNC và dây chuyền ép laminate hiện đại.",
    "Kho mẫu đa dạng với hàng trăm lựa chọn vân gỗ, màu sắc và kết cấu bề mặt.",
    "Đội ngũ kỹ thuật giàu kinh nghiệm, đáp ứng các đơn hàng tùy biến cao.",
    "Đối tác đáng tin cậy của nhiều thương hiệu nội thất lớn tại Việt Nam, Malaysia, Thái Lan và Trung Quốc."
  ];

  return (
    <div className="porfolio-page">
        <Header />
        <section className="portfolio-section">
            <div className="portfolio-container">
                <div className="portfolio-header">
                    <h1 className="portfolio-header-title">GIÁ TRỊ CỐT LÕI</h1>
                <div className="portfolio-header-line"></div>
                <p className="portfolio-header-subtitle">
                    Những nguyên tắc định hướng mọi hoạt động của Decoriis Woodcraft
                </p>
                </div>

                <div className="portfolio-core-values">
                {coreValues.map((value, index) => (
                    <div key={index} className="portfolio-value-card">
                    <div className="portfolio-value-content">
                        <div className="portfolio-value-icon">{value.icon}</div>
                        <h3 className="portfolio-value-title">{value.title}</h3>
                        <p className="portfolio-value-description">{value.description}</p>
                    </div>
                    </div>
                ))}
                </div>

                <div className="portfolio-capabilities-section">
                    <div className="portfolio-capabilities-header">
                        <h2 className="portfolio-capabilities-title">NĂNG LỰC & THẾ MẠNH</h2>
                        <div className="portfolio-capabilities-line"></div>
                        <p className="portfolio-capabilities-subtitle">
                        Sức mạnh công nghệ và kinh nghiệm tạo nên vị thế dẫn đầu
                        </p>
                    </div>

                    <div className="portfolio-capabilities-grid">
                        <div className="portfolio-capabilities-list">
                            {capabilities.map((capability, index) => (
                                <div key={index} className="portfolio-capability-item">
                                <div className="portfolio-capability-icon">
                                    <CheckCircle className="portfolio-check-icon" />
                                </div>
                                    <p className="portfolio-capability-text">{capability}</p>
                                </div>
                            ))}
                        </div>

                        <div className="portfolio-capabilities-image-container">
                        <div className="portfolio-capabilities-image-wrapper">
                            <img 
                            src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Modern Manufacturing Facility"
                            className="portfolio-capabilities-image"
                            />
                        </div>

                        <div className="portfolio-floating-box">
                            <div className="portfolio-floating-content">
                            <div className="portfolio-floating-icon">
                                <ArrowRight className="portfolio-floating-arrow" />
                            </div>
                            <div>
                                <p className="portfolio-floating-title">Singapore Standard</p>
                                <p className="portfolio-floating-subtitle">Quality finishing</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-global-reach">
                    <div className="portfolio-global-box">
                        <div className="portfolio-global-header">
                            <div className="portfolio-global-line"></div>
                            <Globe className="portfolio-global-icon" />
                            <div className="portfolio-global-line"></div>
                        </div>
                        <h3 className="portfolio-global-title">Tầm nhìn toàn cầu</h3>
                        <p className="portfolio-global-description">
                            Từ Việt Nam đến Malaysia, Thái Lan và Trung Quốc - Decoriis Woodcraft đã và đang khẳng định 
                            vị thế của mình trên bản đồ nội thất khu vực, mang đến những giải pháp gỗ công nghiệp 
                            chất lượng cao cho các đối tác quốc tế.
                        </p>
                        <div className="portfolio-global-links">
                            <span className="portfolio-global-link">WWW.DECORIIS.VN</span>
                            <div className="portfolio-dot"></div>
                            <span className="portfolio-global-link">DECORIIS WOODCRAFT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  );
};

export default Portfolio;

import React from 'react';
import { Instagram, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/Factory.css';
import Header from './components/Header';
import Footer from './components/Footer';
import factory1 from '../assets/factory1.jpg'


const Factory = () => {
  const features = [
    "Độ bền kết cấu",
    "Bề mặt laminate hoàn thiện cao",
    "Kháng ẩm - ổn định kích thước - thân thiện với môi trường",
    "Đáp ứng tiêu chuẩn xuất khẩu và các chứng chỉ quốc tế liên quan"
  ];

  return (
    <div className="factory-page">
        <Header />
        <section className="factory-section">
            <div className="container">
                {/* Header Section */}
                <div className="header-section">
                    <h1 className="section-title">
                        NHÀ XƯỞNG SẢN XUẤT
                    </h1>

                    <p className="section-subtitle">
                        Nơi hội tụ công nghệ - Kỹ thuật - Chất lượng quốc tế
                    </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="main-grid">
                    <div className="image-wrapper group">
                        <div className="image-container">
                        <img 
                            src={factory1}
                            alt="Modern Woodcraft Factory"
                            className="factory-image"
                        />
                        </div>
                    </div>

                    <div className="description">
                        <div className="separator"></div>

                        <div className="description-text">
                        <p>
                            Tại Decoriis Woodcraft, nhà xưởng không chỉ là nơi sản xuất, mà là trái tim của toàn bộ quy trình tạo ra giá trị. 
                            Được đặt tại Long Biên, nhà máy của chúng tôi được đầu tư hệ thống thiết bị hiện đại theo tiêu chuẩn quốc tế.
                        </p>
                        <p>
                            Chúng tôi áp dụng quy trình kiểm tra đa tầng, từ khâu chọn lọc nguyên liệu đến hoàn thiện thành phẩm, 
                            đảm bảo mỗi tấm ván đều đạt các tiêu chí cao nhất.
                        </p>
                        </div>
                    </div>
                    </div>

                    {/* Features */}
                    <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                        <div className="feature-content">
                            <CheckCircle className="feature-icon" />
                            <p>{feature}</p>
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Professional Team */}
                    <div className="team-section">
                    <div className="team-grid">
                        <div>
                        <h2 className="team-title">Đội ngũ vận hành chuyên nghiệp</h2>
                        <p className="team-description">
                            Nhà xưởng Decoriis được vận hành bởi đội ngũ kỹ sư, kỹ thuật viên lành nghề với nhiều năm kinh nghiệm 
                            trong ngành gỗ công nghiệp. Chúng tôi không ngừng cập nhật công nghệ mới và áp dụng quy trình Lean Manufacturing 
                            để tối ưu hiệu suất và giảm thiểu sai sót trong sản xuất.
                        </p>

                        <div className="team-link">
                            <div className="team-arrow">
                            <ArrowRight className="team-arrow-icon" />
                            </div>
                            <span className="team-url">LIÊN HỆ CHÚNG TÔI</span>
                        </div>
                        </div>

                        <div>
                        <img 
                            src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800" 
                            alt="Professional Team at Work"
                            className="team-image"
                        />
                        </div>
                    </div>
                    </div>

                    {/* Quality Commitment */}
                    <div className="commitment-section">
                    <div className="commitment-content">
                        <h3 className="commitment-title">Cam kết chất lượng</h3>
                        <p className="commitment-description">
                        Decoriis Woodcraft cam kết: mỗi sản phẩm rời khỏi nhà máy là kết quả của một chu trình sản xuất bài bản - 
                        tỉnh gọn - chất lượng cao, sẵn sàng đáp ứng kỳ vọng của những khách hàng khó tính nhất trong ngành nội thất.
                        </p>
                        <div className="commitment-divider">
                        <div className="divider-line"></div>
                        <span className="divider-text">DECORIIS WOODCRAFT</span>
                        <div className="divider-line"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>

  );
};

export default Factory

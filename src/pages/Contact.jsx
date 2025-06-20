import React from 'react';
import { Instagram, MapPin, Globe, Mail, Phone, Clock, Award, MessageCircle } from 'lucide-react';
import '../styles/Contact.css'
import Header from './components/Header';
import Footer from './components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="icon" />,
      title: "Head Office & Factory",
      content: "Nghách 15 ngõ 7 Đọc Lập, Cự Khối, Long Biên, Hà Nội",
      color: "red"
    },
    {
      icon: <Globe className="icon" />,
      title: "Website",
      content: "www.decoriis.com.vn",
      color: "blue"
    },
    {
      icon: <Mail className="icon" />,
      title: "Email",
      content: "contact@decoriis.com",
      color: "green"
    },
    {
      icon: <Phone className="icon" />,
      title: "Telephone",
      content: "+98 093 463 2664",
      color: "purple"
    }
  ];

  const businessHours = [
    { day: "Thứ 2 - Thứ 6", time: "8:00 - 17:30" },
    { day: "Thứ 7", time: "8:00 - 12:00" },
    { day: "Chủ nhật", time: "Nghỉ" }
  ];

  return (
    <div className="contact-page">
        <Header />
        <section className="contact-section">
            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                <h1 className="contact-title">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                <div className="contact-line"></div>
                <p className="contact-subtitle">
                    Chúng tôi tin rằng mỗi công trình đều xứng đáng được hoàn thiện bằng những vật liệu tốt nhất. 
                    Hãy để Decoris đồng hành cùng bạn kiến tạo nên không gian sống đẳng cấp và bền vững.
                </p>
                </div>

                {/* Main Content */}
                <div className="contact-grid">
                <div className="info-section">
                    <div className="info-card">
                    <div className="info-line"></div>
                    <div className="info-list">
                        {contactInfo.map((info, index) => (
                        <div key={index} className="info-item">
                            <div className={`info-icon ${info.color}`}>{info.icon}</div>
                            <div>
                            <h3>{info.title}</h3>
                            <p>{info.content}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>

                    <div className="hours-card">
                    <div className="hours-header">
                        <Clock className="hours-icon" />
                        <h3>Giờ làm việc</h3>
                    </div>
                    <div className="hours-list">
                        {businessHours.map((hour, index) => (
                        <div key={index} className="hours-item">
                            <span>{hour.day}</span>
                            <span>{hour.time}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>

                {/* CTA */}
                <div className="cta">
                <h3>Bắt đầu dự án của bạn ngay hôm nay</h3>
                <p>
                    Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của bạn. 
                    Decoriis Woodcraft - Đối tác đáng tin cậy cho mọi không gian sống.
                </p>
                <div className="cta-footer">
                    <Instagram className="cta-icon" />
                    <span>DECORIIS WOODCRAFT</span>
                </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
    
  );
};

export default Contact;

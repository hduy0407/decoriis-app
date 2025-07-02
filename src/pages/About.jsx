import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChevronRight } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        '.about-title, .about-info, .about-content1, .about-content2, .about-cta'
      );

      elements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.95) { // more forgiving threshold
          el.style.transitionDelay = `${index * 0.1}s`;
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page">
      <Header />

      <section className="about-section">
        <div className="about-title">
          <h1 className="title">VỀ CHÚNG TÔI</h1>
          <h5 className="subtitle">
            Decoriis Woodcraft - In partnership for beautiful interiors.
          </h5>
        </div>

        <div className="about-info">
          <p className="info-text">
            Decoriis Woodcraft là thương hiệu đến từ Singapore, chuyên sản xuất và cung ứng vật liệu gỗ plywood phủ laminate 
            cao cấp cho nghành nội thất trong nước và quốc tế. Với nền tảng vững chắc hơn một thập kỷ, Decoriis đã và đang không ngừng 
            khẳng định vị thế thông qua chất lượng sản phẩm vượt trội, quy trình sản xuất hiện đại và sự cam kết mạnh mẽ về tính thẩm 
            mỹ, độ bền cũng như trách nhiệm môi trường.
          </p>
        </div>

        <div className="about-content1">
          <div className="content-title">TẦM NHÌN</div>
          <div className="content-text">
            Trở thành thương hiệu dẫn đầu khu vực Việt Nam trong lĩnh vực vật liệu gỗ kỹ thuật cao, góp phần nâng tầm chất lượng
            không gian sống và làm việc thông qua những giải pháp nội thất bền vững và giàu tính thẩm mỹ.
          </div>
        </div>

        <div className="about-content2">
          <div className="content-title">SỨ MỆNH</div>
          <div className="content-text">
            Cung cấp giải pháp vật liệu gỗ cao cấp, sáng tạo và bền vững cho các kiến trúc sư, nhà thiết kế và nhà sản xuất nội thất, 
            góp phần tạo nên những không gian sống và làm việc đẳng cấp quốc tế tại Việt Nam và khu vực.
          </div>
        </div>

        <div className="about-cta">
          <Link to="/contact" className="cta-button">
            LIÊN HỆ VỚI CHÚNG TÔI
            <ChevronRight size={20} />
          </Link>
          <p className="cta-subtext">
            Đội ngũ chuyên gia sẵn sàng tư vấn giải pháp phù hợp cho dự án của bạn
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

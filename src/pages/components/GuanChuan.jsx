import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import guanChuan1 from '../../assets/portfolio/guanchuan1.png';
import guanChuan2 from '../../assets/portfolio/guanchuan2.png';
import guanChuan3 from '../../assets/portfolio/guanchuan3.png';
import guanChuan4 from '../../assets/portfolio/guanchuan4.png';
import guanChuan5 from '../../assets/portfolio/guanchuan5.png';
import guanChuan6 from '../../assets/portfolio/guanchuan6.png';
import '../../styles/OldProject.css';

export default function GuanChuan() {
  return (
    <div className="old-project-content-container" id="tranding">
      <div className="container">
        <div className="text-center section section-heading">
          <h2 className="guan-chuan-title">GUAN CHUAN</h2>
        </div>
      </div>

      <div className="container">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="tranding-slider"
        >
          {[guanChuan1, guanChuan2, guanChuan3, guanChuan4, guanChuan5, guanChuan6].map((img, idx) => (
            <SwiperSlide key={idx} className="tranding-slide">
              <div className="tranding-slide-img">
                <img src={img} alt={`image${idx + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

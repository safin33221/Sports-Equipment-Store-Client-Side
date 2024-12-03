
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider1 from "../assets/1.png";
import slider2 from "../assets/2.png";
import slider3 from "../assets/3.png";
import slider4 from "../assets/4.png";
import slider5 from "../assets/5.png";
import slider6 from "../assets/6.png";
import slider7 from "../assets/7.png";
import slider8 from "../assets/8.png";
import slider9 from "../assets/9.png";
import slider10 from "../assets/10.png";
import slider11 from "../assets/11.png";
import slider12 from "../assets/12.png";
const Banner = () => {
    return (
        <div className='w-6/12 mx-auto'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide><img src={slider1} /></SwiperSlide>
                <SwiperSlide><img src={slider2} /></SwiperSlide>
                <SwiperSlide><img src={slider3} /></SwiperSlide>
                <SwiperSlide><img src={slider4} /></SwiperSlide>
                <SwiperSlide><img src={slider5} /></SwiperSlide>
                <SwiperSlide><img src={slider6} /></SwiperSlide>
                <SwiperSlide><img src={slider7} /></SwiperSlide>
                <SwiperSlide><img src={slider8} /></SwiperSlide>
                <SwiperSlide><img src={slider9} /></SwiperSlide>
                <SwiperSlide><img src={slider10} /></SwiperSlide>
                <SwiperSlide><img src={slider11} /></SwiperSlide>
                <SwiperSlide><img src={slider12} /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
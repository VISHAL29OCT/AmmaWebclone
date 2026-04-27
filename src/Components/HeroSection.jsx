import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  return (
    <>
    <div className="w-full h-screen object-cover">
      <Swiper modules={[Autoplay]} autoplay={{ delay: 5000 }} loop={true} >
        <SwiperSlide>
          <img src="image1.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="image2.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="image3.jpg" className="w-full h-full object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image4.jpg" className="w-full h-full object-cover" />
        </SwiperSlide>

      </Swiper>
    </div>
    </>
  );
}
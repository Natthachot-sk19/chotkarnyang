;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Heroslide } from "../../Data/data";
function Tophero() {
  return (
    <div className="w-full md:h-[650px] bg-zinc-600">
      <Swiper
        // install Swiper modules
        effect={"coverflow"}
        autoplay={{
            delay: 3000, // ระยะเวลาในการเลื่อน (มิลลิวินาที)
            disableOnInteraction: false, // ไม่หยุด autoplay เมื่อผู้ใช้โต้ตอบ

          }}
          
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed= {1000}
        navigation

        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {Heroslide.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="w-full md:h-[650px]">
              <img
                src={data.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tophero;

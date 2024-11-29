import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { callAction } from "../../../db/fakeData";


const CallAction: React.FC = () => {
  return (
    <div className="container mx-auto border py-5 rounded">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {callAction.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="overflow-hidden flex items-center justify-center gap-2 ">
              <figure className="w-10 h-10">
                <img src={data.icon} alt="" className="w-full rounded-full" />
              </figure>
              <div>
                <h5 className="font-semibold text-sm text-left">
                  {data.title}
                </h5>
                <p className="font-medium text-xs text-left">{data.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CallAction;

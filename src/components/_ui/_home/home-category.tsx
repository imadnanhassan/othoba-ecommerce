import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { categoriesData } from "../../../db/fakeData";


const Categories: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, Keyboard]}
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }}
      >
        {categoriesData.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="overflow-hidden flex flex-col items-center justify-center gap-2 pb-6">
              <figure className="lg:w-32 w-24 lg:h-32 h-24">
                <Link to="/category">
                  <img
                    src={category.image}
                    alt=""
                    className="w-full rounded-full"
                  />
                </Link>
              </figure>
              <h4 className="text-sm">{category.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { hotDealProductTwo } from "../../../db/fakeData";

const HotDealsTwo: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {hotDealProductTwo.map((product) => (
          <SwiperSlide key={product.id}>
            {/* <ProductCardTwo {...product} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotDealsTwo;

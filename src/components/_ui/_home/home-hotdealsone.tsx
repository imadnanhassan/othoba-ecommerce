import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../../common/SectionTitle";
import { hotDealProductOne } from "../../../db/fakeData";
import ProductCard from "./ProductCard";


const HotDealsOne: React.FC = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle leftText="Hot Deal Today" rightText="More Products" />

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
        {hotDealProductOne.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotDealsOne;

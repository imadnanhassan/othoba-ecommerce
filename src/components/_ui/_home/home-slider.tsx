import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCreative,
  Navigation,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import { homepageBannerData } from "../../../db/fakeData";
import { Link } from "react-router-dom";
import images from "../../../assets/images/images";

const HomePageSlider: React.FC = () => {
  return (
    <div className="container mx-auto ">
      <div className="lg:flex  gap-3">
        <Swiper
          grabCursor={true}
          effect={"creative"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
        >
          {homepageBannerData.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="w-[100%]  overflow-hidden">
                <div className="rounded">
                  <figure className="">
                    <Link to="/category">
                      <img
                        src={banner.images}
                        alt=""
                        className="w-full rounded"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col gap-[4px]">
          <Link to={"/shop"}>
            <img src={images.homebanner5} alt="" className="rounded" />
          </Link>
          <Link to={"/shop"}>
            <img src={images.homebanner5} alt="" className="rounded" />
          </Link>
          <Link to={"/shop"}>
            <img src={images.homebanner5} alt="" className="rounded" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageSlider;

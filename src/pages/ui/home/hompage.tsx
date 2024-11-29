import HotDealsOne from "../../../components/_ui/_home/home-hotdealsone";
import HotDealsTwo from "../../../components/_ui/_home/home-hotdealstwo";
import HomePageSlider from "../../../components/_ui/_home/home-slider";
import HomeBanner from "../../../components/_ui/_home/home-banner";
import Categories from "../../../components/_ui/_home/home-category";
import CallAction from "../../../components/_ui/_home/home-callaction";
import HomeAdd from "../../../components/_ui/_home/home-add";
import HomeProducts from "../../../components/_ui/_home/home-products";

const HomePage: React.FC = () => {
  return (
    <>
      {/* category */}
      <section className="py-5">
        <Categories />
      </section>

      {/* slider */}
      <section className="py-5">
        <HomePageSlider />
      </section>

      {/* call action */}
      <section className="py-5">
        <CallAction />
      </section>

      {/* add banner */}
      <section className="py-5">
        <HomeAdd />
      </section>

      {/* hot deals product */}
      <section className="py-5">
        <HotDealsOne />
      </section>
      {/* hot deals product */}
      <section className="py-5">
        <HotDealsTwo />
      </section>
      <section className="py-5">
        <HomeBanner />
      </section>

      <section className="py-5">
        <HomeProducts />
      </section>
    </>
  );
};

export default HomePage;

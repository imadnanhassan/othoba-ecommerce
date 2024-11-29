import images from "../../../assets/images/images";

const HomeBanner: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:flex items-center gap-4 mb-4">
        <figure className="w-1/2">
          <img src={images.homeBanner6} alt="" className="w-full rounded" />
        </figure>
        <figure className="w-1/2">
          <img src={images.homeBanner7} alt="" className="w-full rounded" />
        </figure>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <figure className="w-ful">
          <img src={images.homeBanner8} alt="" className="w-ful rounded" />
        </figure>
        <figure className="w-ful">
          <img src={images.homeBanner9} alt="" className="w-ful rounded" />
        </figure>
        <figure className="w-ful">
          <img src={images.homeBanner10} alt="" className="w-ful rounded" />
        </figure>
      </div>
    </div>
  );
};

export default HomeBanner;

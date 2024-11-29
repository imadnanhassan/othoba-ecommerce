import SectionTitle from "../../common/SectionTitle";
import { products } from "../../../db/fakeData";
import CategoryProductCard from "../_categories/category-ProductCard";

const HomeProducts = () => {
  return (
    <div className="container mx-auto">
      <SectionTitle leftText="Just For You" rightText={""} />

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <CategoryProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;

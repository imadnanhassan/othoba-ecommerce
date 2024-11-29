import { products } from "../../../db/fakeData";
import Dropdown from "./category-dropdown";
import CategoryProductCard from "./category-ProductCard";

const CategoryProducts = () => {
  console.log(products, "products");

  return (
    <div>
      {/* sort by */}
      <div className="flex lg:justify-between mb-4">
        <span className="border rounded p-1 lg:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            height="33px"
            width="33px"
            fill="#5f6368"
          >
            <path d="M646-496.5 498.5-644 646-791.5 793.5-644 646-496.5Zm-436-44V-750h209.5v209.5H210ZM540.5-210v-210h210v210h-210ZM210-210v-209.5h209.5V-210H210Zm25.5-356H394v-158.5H235.5V-566ZM647-531l112-112-112-112-112 112 112 112Zm-81 295.5h159v-159H566v159Zm-330.5 0H394V-394H235.5v158.5ZM394-566Zm141-77ZM394-394Zm172-.5Z" />
          </svg>
        </span>
        <Dropdown
          label="Sort by"
          options={[
            "Position",
            "Name: A to Z",
            "Name: Z to A",
            "Price: Low to High",
            "Price: High to Low",
            "New Arrivals",
            "Rating",
          ]}
        />
        <Dropdown label="Show" options={["10", "20", "40"]} />
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <CategoryProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;

import { useState } from "react";
import { products } from "../../../db/fakeData";
import Dropdown from "./category-dropdown";
import CategoryProductCard from "./category-ProductCard";

const CategoryProducts = () => {
  console.log(products, "products");
  const [view, setView] = useState("grid-4"); // Default view: 4-grid

  return (
    <div>
      {/* sort by */}
       <div className="flex flex-wrap lg:justify-between items-center mb-4">
        {/* View Toggle Buttons */}
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setView("grid-2")}
            className={`p-2 border ${
              view === "grid-2" ? "bg-gray-300" : ""
            }`}
          >
            2 Grid
          </button>
          <button
            onClick={() => setView("grid-3")}
            className={`p-2 border ${
              view === "grid-3" ? "bg-gray-300" : ""
            }`}
          >
            3 Grid
          </button>
          <button
            onClick={() => setView("grid-4")}
            className={`p-2 border ${
              view === "grid-4" ? "bg-gray-300" : ""
            }`}
          >
            4 Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-2 border ${
              view === "list" ? "bg-gray-300" : ""
            }`}
          >
            List
          </button>
        </div>

        {/* Sort By and Show Dropdowns */}
        <div className="flex gap-2">
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
      </div>
      {/* Product Grid */}
      <div className={`${
          view === "list"
            ? "grid grid-cols-1"
            : view === "grid-2"
            ? "grid grid-cols-2"
            : view === "grid-3"
            ? "grid grid-cols-3"
            : "grid grid-cols-4"
        } gap-4`}>
        {products.map((product, index) => (
          <CategoryProductCard key={index} {...product} />
        ))}
      </div>



























    </div>
  );
};

export default CategoryProducts;

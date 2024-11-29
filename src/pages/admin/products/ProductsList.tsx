import React from "react";
import * as Progress from "@radix-ui/react-progress";
import {
  MagnifyingGlassIcon,
  Pencil1Icon,
  EyeOpenIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { adminProduct } from "../../../db/fakeData";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";

const ProductsList: React.FC = () => {
  const getStockStatus = (stock: number, maxStock: number) => {
    const stockPercentage = (stock / maxStock) * 100;
    if (stock === 0) {
      return {
        label: "Out of Stock",
        color: "bg-gray-300",
        textColor: "text-gray-500",
      };
    } else if (stockPercentage <= 20) {
      return {
        label: "Low Stock",
        color: "bg-orange-400",
        textColor: "text-orange-600",
      };
    } else {
      return {
        label: "In Stock",
        color: "bg-green-500",
        textColor: "text-green-600",
      };
    }
  };

  return (
    <section>
      <AdminBreadcrumbs
        pageTitle="Products List"
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products List"
      />
      <div className="px-6 rounded">
        <div className="bg-white dark:bg-[#1A1B1E] rounded">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-lg font-bold">Product List</h1>
            <div className="flex justify-between items-center p-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse dark:bg-[#1A1B1E]">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">Product</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Category
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">SKU</th>
                  <th className="px-4 py-2 text-left font-semibold">Stock</th>
                  <th className="px-4 py-2 text-left font-semibold">Price</th>
                  <th className="px-4 py-2 text-left font-semibold">Rating</th>
                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminProduct.map((product) => {
                  const stockStatus = getStockStatus(
                    product.stock,
                    product.maxStock
                  );
                  return (
                    <tr
                      key={product.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-2 flex items-center gap-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-10 h-10 rounded-md"
                        />
                        <div>
                          <div className="font-semibold">{product.name}</div>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <div className="text-sm text-gray-500">
                          {product.category}
                        </div>
                      </td>
                      <td className="px-4 py-2">{product.sku}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Progress.Root className="relative w-full h-3 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <Progress.Indicator
                              className={`h-full ${stockStatus.color} rounded-full`}
                              style={{
                                width: `${
                                  (product.stock / product.maxStock) * 100
                                }%`,
                              }}
                            />
                          </Progress.Root>
                          <span
                            className={`text-sm font-medium ${stockStatus.textColor}`}
                          >
                            {product.stock > 0
                              ? `${
                                  product.stock
                                } ${stockStatus.label.toLowerCase()}`
                              : stockStatus.label}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2 flex items-center">
                        <span className="text-yellow-500">
                          {"★".repeat(Math.floor(product.rating))}
                        </span>
                        <span className="text-gray-400">
                          {"★".repeat(5 - Math.floor(product.rating))}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          ({product.reviews})
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span className="flex items-center gap-1 lowercase">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              product.status === "Pending"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          ></span>
                          <span
                            className={`${
                              product.status === "Pending"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {product.status}
                          </span>
                        </span>
                      </td>
                      <td className="px-4 flex items-center gap-2">
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-surface">
                          <Pencil1Icon />
                        </button>
                        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#eab3081a] hover:bg-[#eab308] text-[#eab308] hover:text-surface ">
                          <EyeOpenIcon />
                        </button>
                        <button className="focus:outline-none transition-all duration-300 p-2 rounded-full bg-[#f43f5e1a] text-[#f43f5e] hover:bg-[#f43f5e] hover:text-surface">
                          <TrashIcon />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;

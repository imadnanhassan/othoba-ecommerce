import React from 'react';
import AdminBreadcrumbs from '../../../components/common/AdminBreadcrumbs';
import { EyeOpenIcon, MagnifyingGlassIcon, Pencil1Icon, TrashIcon } from '@radix-ui/react-icons';
import { adminURL } from '../../../utils/adminURL';
import { Link } from 'react-router-dom';
import { adminbrands } from '../../../db/fakeData';

const ProductBrandList: React.FC = () => {
  return (
    <section>
      <AdminBreadcrumbs
        pageTitle="Products Brand "
        iconTitle="<></>"
        parentTitle="Products"
        childTitle="Products Brand List"
      />
      <div className="px-6 rounded">
        <div className="bg-white dark:bg-[#1A1B1E] rounded">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-lg font-bold">Brand List</h1>
            <div className="flex justify-between items-center gap-3 p-4 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-md border-[1px] border-uxBgMenu dark:border-gray-700 bg-white dark:bg-transparent text-sm text-gray-700 dark:text-gray-300 focus:outline-none"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <button className="btn">
                <Link to={`${adminURL}/product/category-brand`}>
                  Create Brand
                </Link>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse dark:bg-[#1A1B1E]">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left font-semibold">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 py-2 text-left font-semibold">Logo</th>
                  <th className="px-4 py-2 text-left font-semibold">
                    Name
                  </th>

                  <th className="px-4 py-2 text-left font-semibold">Status</th>
                  <th className="px-4 py-2 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminbrands.map((brand) => {
                  return (
                    <tr
                      key={brand.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-4 py-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <input
                            type="checkbox"
                            id="checkbox"
                            className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-2 flex items-center gap-2">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="w-10 h-10 rounded-md"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="text-sm text-gray-500">
                          {brand.name}
                        </div>
                      </td>

                      <td className="px-4 py-2">
                        <span className="flex items-center gap-1 lowercase">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              brand.status === "inactive"
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          ></span>
                          <span
                            className={`${
                              brand.status === "inactive"
                                ? "text-yellow-600"
                                : "text-green-600"
                            }`}
                          >
                            {brand.status}
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

export default ProductBrandList;
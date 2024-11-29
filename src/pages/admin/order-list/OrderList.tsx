import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import {
  MagnifyingGlassIcon,
  DotsVerticalIcon,
  Pencil1Icon,
  TrashIcon,
} from "@radix-ui/react-icons";

type Order = {
  id: string;
  customer: string;
  product: string;
  date: string;
  actualPrice: string;
  salePrice: string;
  status: "Pending" | "Completed" | "Shipping" | "Refund";
};

const OrderList: React.FC = () => {
  const orders: Order[] = [
    {
      id: "#5209801",
      customer: "Natali Craig",
      product: "8 Items",
      date: "Jun 4, 2024",
      actualPrice: "$60.76",
      salePrice: "$253.82",
      status: "Pending",
    },
    {
      id: "#5209802",
      customer: "Kate Morrison",
      product: "5 Items",
      date: "Jun 10, 2024",
      actualPrice: "$66.41",
      salePrice: "$556.24",
      status: "Completed",
    },
    {
      id: "#5209803",
      customer: "Drew Cano",
      product: "7 Items",
      date: "Jun 14, 2024",
      actualPrice: "$95.66",
      salePrice: "$115.26",
      status: "Pending",
    },
    {
      id: "#5209804",
      customer: "Orlando Diggs",
      product: "3 Items",
      date: "Jun 29, 2024",
      actualPrice: "$84.80",
      salePrice: "$556.24",
      status: "Shipping",
    },
    {
      id: "#5209805",
      customer: "Andi Lane",
      product: "4 Items",
      date: "Jun 30, 2024",
      actualPrice: "$46.52",
      salePrice: "$675.51",
      status: "Refund",
    },
  ];

 const statusColors: Record<Order["status"], { bg: string; text: string }> = {
   Pending: { bg: "bg-blue-100", text: "text-blue-700" },
   Completed: { bg: "bg-green-100", text: "text-green-700" },
   Shipping: { bg: "bg-yellow-100", text: "text-yellow-700" },
   Refund: { bg: "bg-red-100", text: "text-red-700" },
 };


  return (
    <div className="px-6 rounded">
      <div className="bg-white dark:bg-[#1A1B1E] rounded">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-lg font-bold">Order List</h1>
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
                <th className="px-4 py-2 text-left font-semibold">Order ID</th>
                <th className="px-4 py-2 text-left font-semibold">Customer</th>
                <th className="px-4 py-2 text-left font-semibold">Product</th>
                <th className="px-4 py-2 text-left font-semibold">Date</th>
                <th className="px-4 py-2 text-left font-semibold">
                  Actual Price
                </th>
                <th className="px-4 py-2 text-left font-semibold">
                  Sale Price
                </th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.customer}</td>
                  <td className="px-4 py-2">{order.product}</td>
                  <td className="px-4 py-2">{order.date}</td>
                  <td className="px-4 py-2">{order.actualPrice}</td>
                  <td className="px-4 py-2">{order.salePrice}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`inline-block w-20 text-center px-3 py-1 text-sm font-medium lowercase rounded-full ${
                        statusColors[order.status].bg
                      } ${statusColors[order.status].text}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <DropdownMenu.Root>
                      <DropdownMenu.Trigger>
                        <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
                      </DropdownMenu.Trigger>
                      <DropdownMenu.Content className="bg-white dark:bg-gray-700 rounded-md shadow-md">
                        <DropdownMenu.Item className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                          <Pencil1Icon /> Edit
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                          <TrashIcon /> Delete
                        </DropdownMenu.Item>
                      </DropdownMenu.Content>
                    </DropdownMenu.Root>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderList;

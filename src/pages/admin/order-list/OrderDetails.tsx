import React from "react";
import AdminBreadcrumbs from "../../../components/common/AdminBreadcrumbs";
import images from "../../../assets/images/images";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}

const OrderDetails: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Snövalla", price: 252.0, quantity: 2 },
    { id: 2, name: "Maneki Neko Poster", price: 389.0, quantity: 1 },
    { id: 3, name: "Ektöra", price: 869.0, quantity: 1 },
  ];

  const orderSummary: OrderSummary = {
    subtotal: 1762.0,
    shipping: 15.0,
    tax: 105.72,
    total: 1870.72,
  };

  const activityData = [
    {
      date: "Sunday, 06 March",
      events: [
        {
          time: "02:13 PM",
          text: "Parcel has been delivered",
          recipient: "Recipient: Steve Sutton",
          status: "delivered",
        },
        {
          time: "09:32 AM",
          text: "Parcel is out for delivery",
          status: "in-progress",
        },
        {
          time: "07:15 AM",
          text: "Parcel has arrived at delivery station",
          status: "in-progress",
        },
      ],
    },
    {
      date: "Saturday, 05 March",
      events: [
        {
          time: "12:43 PM",
          text: "Parcel has been picked up by courier",
          status: "in-progress",
        },
        {
          time: "09:32 AM",
          text: "Seller is preparing to ship your parcel",
          status: "in-progress",
        },
      ],
    },
  ];

  return (
    <section>
      <AdminBreadcrumbs pageTitle="Order Details" />
      <div className="px-6 rounded">
        <div className="flex justify-between items-start gap-10">
          <div className="w-[60%]  ">
            <div className="bg-white dark:bg-[#1A1B1E] shadow-sm py-4 px-4 rounded">
              <h2 className="text-lg font-bold mb-2">Products ordered</h2>
              <ul>
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex justify-between px-3 py-2 border-b  bg-slate-100"
                  >
                    <div className="flex items-center">
                      <img
                        src={images.product5}
                        alt={product.name}
                        className="w-12 h-12 mr-4 rounded"
                      />
                      <div>
                        <p className="text-lg font-bold">{product.name}</p>
                        <p>ID: {product.id}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="font-bold">$ {product.price}</p>
                      <p>Qty: {product.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1A1B1E] shadow-sm py-4 px-4 rounded mt-4">
              <h2 className="text-lg font-bold mb-2">Order summary</h2>
              <ul>
                <li className="flex justify-between py-2 border-b">
                  <p>Subtotal</p>
                  <p>$ {orderSummary.subtotal}</p>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <p>Shipping</p>
                  <p>$ {orderSummary.shipping}</p>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <p>Tax</p>
                  <p>$ {orderSummary.tax}</p>
                </li>
                <li className="flex justify-between py-2 border-b">
                  <p>Total</p>
                  <p>$ {orderSummary.total}</p>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1A1B1E] shadow-sm py-4 px-4 rounded mt-4">
              <div>
                <div className="flex items-center mb-4">
                  <h2 className="text-lg font-semibold">Activity</h2>
                  <span className="ml-2 px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    Fulfilled
                  </span>
                </div>
                {activityData.map((day, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">
                      {day.date}
                    </h3>
                    <div className="space-y-3">
                      {day.events.map((event, i) => (
                        <div key={i} className="flex items-start">
                          <div
                            className={`w-4 h-4 rounded-full mt-1.5 ${
                              event.status === "delivered"
                                ? "bg-green-500"
                                : "bg-blue-500"
                            }`}
                          ></div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {event.text}
                            </p>
                            {event.recipient && (
                              <p className="text-sm text-gray-500">
                                {event.recipient}
                              </p>
                            )}
                            <p className="text-xs text-gray-400">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[40%]  bg-white dark:bg-[#1A1B1E] shadow-sm py-4 px-4 rounded ">
            <div className=" rounded-lg p-4 bg-white max-w-sm">
              <h2 className="text-lg font-semibold mb-4">Customer</h2>
              <div className="flex items-center mb-4">
                <img
                  src="https://ecme-react.themenate.net/img/avatars/thumb-1.jpg"
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    Steve Sutton
                  </p>
                  <p className="text-xs text-gray-500">11 previous orders</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 21v-2a4 4 0 00-8 0v2m8-10a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  handsome-obrien@hotmail.com
                </p>
                <p className="flex items-center text-sm text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10l1.664-2.788a4 4 0 016.672 0L13 10m5 0a3.978 3.978 0 00-2-3.464M19 10l-1.664-2.788a4 4 0 00-6.672 0L11 10M7 10v10m10 0V10"
                    />
                  </svg>
                  +1 (541) 754-3010
                </p>
              </div>
              <hr className="my-4" />
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Shipping Address
                </h3>
                <p className="text-sm text-gray-500">
                  100 Main ST <br />
                  PO Box 1022 <br />
                  Seattle WA 98104 <br />
                  United States of America
                </p>
              </div>
              <hr className="my-4" />
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  Billing Address
                </h3>
                <p className="text-sm text-gray-500">
                  1527 Pond Reef Rd <br />
                  Ketchikan <br />
                  Alaska 99901 <br />
                  United States of America
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;

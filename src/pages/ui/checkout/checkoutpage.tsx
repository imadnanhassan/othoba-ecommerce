import React from "react";
import images from "../../../assets/images/images";

const CheckoutPage = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between p-4 lg:p-10 gap-4">
        {/* Address Form */}
        <div className="w-full lg:w-2/3 border p-4 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">ADDRESS</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="phone"
                >
                  Phone number: <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border rounded p-2"
                  placeholder="+8801602121038"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="firstName"
                >
                  First name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="lastName"
                >
                  Last name: <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="country"
                >
                  Country:
                </label>
                <select id="country" className="w-full border rounded p-2">
                  <option>Bangladesh</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="division"
                >
                  Division:
                </label>
                <select id="division" className="w-full border rounded p-2">
                  <option>Dhaka</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="state"
                >
                  State / province:
                </label>
                <select id="state" className="w-full border rounded p-2">
                  <option>Dhaka City North</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="area"
                >
                  Area/Upzilla:
                </label>
                <select id="area" className="w-full border rounded p-2">
                  <option>Select area/upzilla</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1" htmlFor="zip">
                Zip / postal code:
              </label>
              <input
                type="text"
                id="zip"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="address"
              >
                Address: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                className="w-full border rounded p-2"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 border p-4 lg:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">YOUR ORDER</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Product</h3>
            <p>Shipment 1</p>
            <div className="flex items-center mt-4">
              <img
                src={images.product1} // Replace with actual image path
                alt="Product Image"
                className="w-16 h-16 mr-4 object-cover"
              />
              <div>
                <p>
                  Imported Free Size Stylish Soft Comfortable Padded Bra For
                  Women
                </p>
                <p className="font-bold">Tk 494</p>
                <p className="text-sm text-gray-500">You save: Tk 456</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Shipping Methods</h3>
            <p className="text-red-500">Please add your address.</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Payment Methods</h3>
            <p className="text-red-500">Please add your address.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

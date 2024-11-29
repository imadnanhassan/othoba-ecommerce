import images from "../../../assets/images/images";
import { IoIosArrowForward } from "react-icons/io";

const CartPage: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        {/* Breadcrumb */}
        <nav className=" p-3 rounded-md w-full mb-6">
          <ol className="list-reset flex items-center justify-center">
            <li>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Shopping Cart
              </a>
            </li>
            <li>
              <span className="mx-2">
                <IoIosArrowForward />
              </span>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Checkout
              </a>
            </li>
            <li>
              <span className="mx-2">
                <IoIosArrowForward />
              </span>
            </li>
            <li className="text-gray-500">Order Complete</li>
          </ol>
        </nav>

        {/* Cart Content */}
        <div className="flex justify-between">
          {/* Left Section: Cart Items */}
          <div className="w-2/3 p-4">
            <div className="border-b pb-2 mb-4">
              <p>Your purchase will be delivered in 1 shipment(s)</p>
            </div>
            <div className="flex justify-between items-center font-bold text-gray-700 border-b py-2">
              <div className="w-2/5">Product</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-center">Subtotal</div>
            </div>
            {/* Cart Item */}
            <div className="flex justify-between items-center border-b py-4">
              <div className="flex items-center w-2/5">
                <img
                  src={images.product4}
                  alt="Item Name"
                  className="w-16 h-16 rounded"
                />
                <div className="ml-4">
                  <h3 className="font-bold">
                    Imported Free Size Stylish Soft Comfortable Padded Bra For
                    Women White
                  </h3>
                  <p className="text-gray-600">Tk 494</p>
                </div>
              </div>
              <div className="w-1/5 text-center">
                <span className="text-gray-600">Tk 494</span>
              </div>
              <div className="w-1/5 text-center">
                <input
                  type="number"
                  value="1"
                  className="w-12 text-center border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="w-1/5 text-center">
                <span className="text-gray-600">Tk 494</span>
                <p className="text-sm text-green-500">You save: Tk 456</p>
              </div>
            </div>
            {/* End Cart Item */}

            {/* Control Buttons */}
            <div className="mt-4 flex justify-between">
              <button className="bg-gray-500 text-white py-2 px-4 rounded">
                <span className="mr-2">←</span>CONTINUE SHOPPING
              </button>
              <div>
                <button className="bg-gray-500 text-white py-2 px-4 rounded mr-4">
                  SHOP MORE PRODUCTS
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded">
                  UPDATE SHOPPING CART
                </button>
              </div>
            </div>

            {/* Discount Code */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">DISCOUNT CODE</h3>
              <input
                type="text"
                placeholder="Enter coupon code here..."
                className="w-full border rounded px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gray-500 text-white py-2 px-4 rounded mt-2">
                APPLY COUPON
              </button>
            </div>
          </div>

          {/* Right Section: Cart Totals */}
          <div className="w-1/3 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Cart Totals</h2>
              <div className="flex justify-between mb-2">
                <span>Sub-Total</span>
                <span>Tk 494</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Will be calculated during checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Will be calculated during checkout</span>
              </div>
              <button className="w-full mt-4 bg-black text-white py-2 rounded">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

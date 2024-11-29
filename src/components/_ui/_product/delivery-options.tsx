import React from "react";
import {
  FaMapMarkerAlt,
  FaInfoCircle,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";

const DeliveryOptions: React.FC = () => {
  return (
    <div className="px-3">
      <h2 className="text-lg font-semibold mb-2 border-b">Delivery Options</h2>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="text-blue-500 mr-2" />
        <span>Available Delivery Area: All over Bangladesh.</span>
      </div>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="text-blue-500 mr-2" />
        <span>
          Dhaka Dhaka City North{" "}
          <a href="#" className="text-blue-500">
            CHANGE
          </a>
        </span>
      </div>
      <div className="flex items-center mb-2">
        <FaInfoCircle className="text-blue-500 mr-2" />
        <span>Delivery Time: 1-7 Working days</span>
      </div>
      <div className="flex items-center mb-2">
        <FaDollarSign className="text-blue-500 mr-2" />
        <span>Shipping Charge: Tk 90</span>
      </div>
      <div className="flex items-center mb-4">
        <FaTruck className="text-blue-500 mr-2" />
        <span>Cash on Delivery Available</span>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://play-lh.googleusercontent.com/1CRcUfmtwvWxT2g-xJF8s9_btha42TLi6Lo-qVkVomXBb_citzakZX9BbeY51iholWs"
          alt="Bkash"
          className="h-8"
        />
        <img
          src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?height=512&width=711&fit=bounds"
          alt="Bkash"
          className="h-8"
        />

        <img
          src="https://play-lh.googleusercontent.com/9GNDxgkN8hWzBub3bYbmFummUAHRFTe0vhLNv8wYL1-ESxKx1zJLL6eGhn8oAWiEZLNj=w240-h480-rw"
          alt="Nagad"
          className="h-8"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2 border-b">Return & Warranty</h2>
      <div className="mb-2 ml-4">
        <span className="text-sm font-medium">7 Days Returns</span>
        <br />
        <span className="text-sm font-medium">Change of mind is not applicable</span>
      </div>
      <div className="mb-4">
        <span>Warranty Not Available</span>
      </div>
    </div>
  );
};

export default DeliveryOptions;

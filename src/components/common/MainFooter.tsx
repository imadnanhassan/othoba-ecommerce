import React from "react";
import images from "../../assets/images/images";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const MainFooter: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img
            src={images.mainLogo}
            alt="Othoba Logo"
            // className="h-10 mr-4"
            className="h-12 mb-4"
          />
          <p className="text-gray-700 text-sm">
            Got Question? Call us 9 AM - 10 PM
          </p>
          <p className="text-lg font-semibold text-gray-900">09613-800800</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white bg-[#1B4F9B] rounded-full p-2">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white bg-[#00ADEF] rounded-full p-2">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-white bg-[#2C567E] rounded-full p-2">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-white bg-[#9b1b1b] rounded-full p-2">
              <FaYoutube size={20} />
            </a>
          </div>
          <a href="#" className="flex items-center gap-1 mt-2">
            See our reviews on{" "}
            <svg
              width="17"
              height="17"
              viewBox="0 0 102 94"
              fill="#04da8d"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z"
                fill="#04da8d"
              ></path>
            </svg>{" "}
            <span className="font-semibold">Trustpilot</span>
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">COMPANY</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Othoba Certified</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Next/Same day delivery TC</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            MY ACCOUNT
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Addresses</a>
            </li>
            <li>
              <a href="#">My Wishlist</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Track My Order</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            CUSTOMER SERVICE
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <a href="#">Payment Methods</a>
            </li>
            <li>
              <a href="#">Support Center</a>
            </li>
            <li>
              <a href="#">How To Shop On Othoba</a>
            </li>
            <li>
              <a href="#">Featured Recommendation</a>
            </li>
            <li>
              <a href="#">Cancellation, Return & Refund</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-700">Othoba.com Pvt Ltd</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p className="text-gray-700">We're using safe payment for</p>
          <img
            src="https://www.othoba.com/Themes/Othoba/Content/images/payment.png"
            alt="Payment Methods"
            className="h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default MainFooter;

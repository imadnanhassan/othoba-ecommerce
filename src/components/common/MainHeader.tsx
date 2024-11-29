import { useState } from "react";
import images from "../../assets/images/images";
import {
  FaHeart,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { UserAuth } from "../../pages/ui/userAuth/userAuth";

const MainHeader: React.FC = () => {
  const [openAuth, setOpenAuth] = useState(false);

  const handleOpenAuth = () => {
    setOpenAuth(!openAuth);
  };

  return (
    <>
      <div className=" bg-[#F5F6F8]">
        <div className="container mx-auto flex items-center justify-between py-4">
          <h5>Welcome To Othoba.com</h5>
          <h5>Sell on Othoba</h5>
        </div>
      </div>
      <div className="bg-gradient-to-r from-primary to-secondary p-4 lg:block hidden">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={images.mainLogo}
              alt="Othoba Logo"
              className="h-10 mr-4"
            />
          </div>

          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none"
            />
            <button className="absolute -right-[27px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded p-2">
              <FaSearch />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-white">
              <FaUser className="inline-block mr-1" />
              <button onClick={handleOpenAuth} className="hover:underline">
                Sign In
              </button>{" "}
              |{" "}
              <button onClick={handleOpenAuth} className="hover:underline">
                Register
              </button>
            </div>
            <div className="text-white">
              <FaHeart className="inline-block mr-1" />
              <a href="/wishlist" className="hover:underline">
                Wishlist
              </a>
            </div>
            
            <div className="text-white relative">
              <FaShoppingCart className="inline-block mr-1" />
              <a href="/cart" className="hover:underline  ">
                Cart
              </a>
              <span className="absolute -top-3 -right-2 bg-primary text-white font-medium text-xs rounded-full px-2 py-1">
                3
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* user sign in signup modal is here  */}
      {openAuth && <UserAuth />}
    </>
  );
};

export default MainHeader;

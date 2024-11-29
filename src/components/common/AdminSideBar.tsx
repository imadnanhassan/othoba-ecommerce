import React from "react";
import { Link } from "react-router-dom";
import images from "../../assets/images/images";
import { AdminMenu } from "../_admin/admin-menu/AdminMenu";

type AdminSideBarProps = {
  isSidebarOpen: boolean;
};
const AdminSideBar: React.FC<AdminSideBarProps> = ({ isSidebarOpen }) => {
  return (
    <aside>
      <div
        className={`bg-sideBarColor h-screen lg:block hidden bg-uxBgMain text-lightText dark:bg-darkBg dark:text-darkText ${
          isSidebarOpen
            ? "w-0 transition-width duration-500 ease-in-out sm:block"
            : "w-60 transition-width duration-500 ease-in-out sm:block "
        }`}
      >
        {isSidebarOpen ? (
          <></>
        ) : (
          <>
            <div className="py-4 flex items-center justify-center">
              <Link to={"/admin"}>
                <img src={images.mainLogo} alt="Othoba Logo" className="" />
              </Link>
            </div>
            <div>
              <AdminMenu />
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default AdminSideBar;

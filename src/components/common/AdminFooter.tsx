import React from "react";

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uxBgMain text-lightText dark:bg-darkBg dark:text-darkText py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} <strong>Othoba</strong>. Developed by{" "}
          <strong>IT Lab Industry</strong>.
        </p>
      </div>
    </footer>
  );
};

export default AdminFooter;

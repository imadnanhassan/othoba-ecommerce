import { Outlet } from "react-router-dom";
import MainHeader from "../components/common/MainHeader";
import MainFooter from "../components/common/MainFooter";

const RootLayout: React.FC = () => {
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <main>
        <Outlet />
      </main>
      <footer >
        <MainFooter />
      </footer>
    </>
  );
};

export default RootLayout;

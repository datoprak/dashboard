import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

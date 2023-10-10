import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = () => {
  const { comments, notifications } = useLoaderData();

  return (
    <>
      <Header comments={comments} notifications={notifications} />
      <main>
        <SideMenu />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

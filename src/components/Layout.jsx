import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <Content />
      </main>
      <Footer />
    </>
  );
};
export default Layout;

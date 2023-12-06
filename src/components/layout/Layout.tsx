import { S } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../../hooks/useScrollTop";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;

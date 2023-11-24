import { S } from "./styled";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
};

export default Layout;

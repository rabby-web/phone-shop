import { Outlet } from "react-router-dom";
import Header from "../Page/Header/Header";
import Footer from "../Page/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

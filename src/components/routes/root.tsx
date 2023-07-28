import { Outlet } from "react-router-dom";
import Inspx from "inspx";
import Header from "../header";
import Footer from "../footer";

const Root = () => {
  return (
    <Inspx>
      <Header />
      <Outlet />
      <Footer />
    </Inspx>
  );
};

export default Root;

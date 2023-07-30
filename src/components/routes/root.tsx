import { Outlet, ScrollRestoration } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Inspx from "inspx";
import Header from "../header";
import Footer from "../footer";

const Root = () => {
  return (
    <Inspx>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
      <ScrollRestoration />
    </Inspx>
  );
};

export default Root;

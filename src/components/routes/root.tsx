import { Outlet } from "react-router-dom";
import Inspx from "inspx";
import Header from "../header";

const Root = () => {
  return (
    <Inspx>
      <Header />
      <Outlet />
    </Inspx>
  );
};

export default Root;

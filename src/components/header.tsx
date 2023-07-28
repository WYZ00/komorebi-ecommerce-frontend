import { Link } from "react-router-dom";
import Icon from "./icons";
import Logo from "./icons/logo";
import Text from "./text";

const Header = () => {
  return (
    <header className="p-[22px] flex items-center justify-between rounded-[26px] my-[18px] mx-[50px] bg-[#f5f5f5] backdrop-blur-[10px]">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex flex-row items-center space-x-[38px]">
        <Link to={"/shop"}>
          <Text varient="caption-one">Shop</Text>
        </Link>
        <a href="">
          <Text varient="caption-one">About</Text>
        </a>
        <Link to={"/cart"}>
          <Icon name="cart-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;

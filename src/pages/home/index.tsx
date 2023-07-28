import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Icon from "../../components/icons";
import Text from "../../components/text";

const Home = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate("/shop");
  };

  return (
    <section className="relative">
      <img
        className="absolute -top-[102px] -z-10"
        src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743571/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_2_mf5tty.png"
        alt=""
      />
      <div className="mx-[50px] min-h-screen flex flex-col items-start justify-end pb-56">
        <Text varient="heading-two">HOODIE HEAVEN</Text>
        <Button className="mt-7" onClick={navigateToShop}>
          <span className="flex">
            <Icon name="arrow-small-right" />
            <span className="ml-[10px]">Shop Now</span>
          </span>
        </Button>
      </div>
    </section>
  );
};

export default Home;

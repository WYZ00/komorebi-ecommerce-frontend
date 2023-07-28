import Inspx from "inspx";
import Text from "./components/text";
import Button from "./components/button";

function App() {
  return (
    <>
      <Inspx>
        <Text className="my-4" varient="heading-one">
          Custom reusable components
        </Text>
        <Text className="my-6" varient="heading-two">
          Custom reusable components
        </Text>
        <Text className="my-6" varient="heading-three">
          Custom reusable components
        </Text>
        <Text className="my-6" varient="heading-four">
          Custom reusable components
        </Text>
        <Text className="my-6" varient="subheading-one">
          Custom reusable subheading components
        </Text>
        <Text className="my-6" varient="subheading-two">
          Custom reusable subheading components
        </Text>
        <Text className="my-6" varient="subheading-three">
          Custom reusable subheading components
        </Text>
        <Button size="large">Proceed to checkout</Button>
        <Button size="small" className="border-4 border-pink-500 mx-4" onClick={() => {}} disabled>
          Proceed to checkout
        </Button>
      </Inspx>
    </>
  );
}

export default App;

import Inspx from "inspx";
import Text from "./components/text";

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
      </Inspx>
    </>
  );
}

export default App;

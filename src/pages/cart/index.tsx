import Button from "../../components/button";
import Icon from "../../components/icons";
import Text from "../../components/text";
import { getCartTotal } from "../../helpers";
import useGlobalStore from "../../store";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { cart, addItemToCart, removeItemFromCart } = useGlobalStore();
  const cartTotal = getCartTotal(cart);
  return (
    <section className="mx-[50px]">
      <Text varient="heading-one" className="my-[82px]">
        Shopping Cart
      </Text>
      <div className="space-y-[164px]">
        {cart.map((cartItem) => (
          <div className="grid grid-cols-3" key={cartItem.id}>
            <div>
              <img
                className="w-[378px] h-[378px] rounded-[18px] mr-[46px]"
                src={cartItem.image}
                width={378}
                height={378}
                alt={cartItem.name}
              />
            </div>
            <div className="col-span-2">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                  <Text varient="subheading-two">{cartItem.name}</Text>
                  <Text varient="subheading-two">
                    ${cartItem.price * cartItem.quantity}
                  </Text>
                </div>
                <div className="mt-[124px] flex items-center space-x-7">
                  <button
                    onClick={() => {
                      removeItemFromCart(cartItem);
                      toast.error("Cart item removed!");
                    }}>
                    <Icon name="minus-icon" />
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() => {
                      addItemToCart({
                        image: cartItem.image,
                        name: cartItem.name,
                        price: cartItem.price,
                        product: cartItem.product,
                      });
                      toast.success("Item added to Cart!");
                    }}>
                    <Icon name="plus-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[82px]">
        <div className="border-[1.8px] border-black"></div>
      </div>
      <div className="flex items-center justify-between mb-[82px]">
        <Text varient="subheading-two">Subtotal</Text>
        <Text varient="subheading-two">USD ${cartTotal}</Text>
      </div>
      <Button className="mb-[180px] w-full" size="large">
        Proceed to CheckOut
      </Button>
    </section>
  );
};

export default Cart;

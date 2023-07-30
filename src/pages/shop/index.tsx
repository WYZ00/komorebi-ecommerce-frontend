import { useEffect, useState } from "react";
import Text from "../../components/text";
import { IProduct, RawCartItem } from "../../types";
import axios from "../../api/axios";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import useGlobalStore from "../../store";
import { toast } from "react-hot-toast";

const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { addItemToCart } = useGlobalStore();

  const getProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log("error in getProducts", error);
      throw error;
    }
  };

  useEffect(() => {
    getProducts();

    return () => {};
  }, []);

  return (
    <>
      <section className="relative w-full h-[768px] flex items-end">
        <img
          className="absolute -z-10 aspect-[1.6] object-cover"
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743570/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_1_2_exnour.png"
          alt=""
        />
        <div className="mx-[50px] mb-40">
          <Text varient="heading-three" className="mb-3">
            Latest Hoodie styles online
          </Text>
          <Text varient="body-two">Suit your unique preference</Text>
        </div>
      </section>
      <section className="mx-[50px] bg-white">
        <Text varient="heading-one" className="mt-[82px]">
          Experience comfort and style
        </Text>
        <Text varient="body-two" className="mb-[82px]">
          Perfect blend of comfort,style,and quality
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px]">
          {products.map((product) => (
            <div key={product._id}>
              <Link to={`/shop/${product._id}`}>
                <div className="rounded-[18px]">
                  <img
                    className="w-[368px] h-[368px]"
                    src={product.image}
                    alt={product.name}
                    width={368}
                    height={368}
                  />
                </div>
              </Link>
              <Text varient="heading-three" className="mt-7 mb-2">
                {product.name}
              </Text>
              <Text varient="body-three">$ {product.price}</Text>
              <Button
                size="small"
                className="mt-7"
                onClick={() => {
                  const cartItem: RawCartItem = {
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    product: product._id,
                  };
                  addItemToCart(cartItem);
                  toast.success("Item added to cart");
                }}>
                Add to bag
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Shop;

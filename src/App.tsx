import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/routes/root";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import ProductDetails from "./pages/product-details";
import ShippingAddress from "./pages/shipping-address";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "/checkout/shipping",
        element: <ShippingAddress />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

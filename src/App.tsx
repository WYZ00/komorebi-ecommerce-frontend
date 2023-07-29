import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/routes/root";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Shop from "./pages/shop";
import ProductDetails from "./pages/product-details";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

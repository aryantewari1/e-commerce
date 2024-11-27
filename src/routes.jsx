import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import ErrorPage from "./Components/ErrorPage.jsx";
import Body from "./Components/Body.jsx";
import ProductInfo from "./Components/ProductInfo/ProductInfo.jsx";
import Cart from "./Components/cart/Cart.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/product",
        element: <ProductInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;

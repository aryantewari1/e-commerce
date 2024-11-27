import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import ErrorPage from "./Components/ErrorPage.jsx";
import Body from "./Components/Body.jsx";
import ProductInfo from "./Components/ProductInfo/ProductInfo.jsx";

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
    ],
  },
]);

export default appRouter;

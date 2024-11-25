import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import ErrorPage from "./Components/ErrorPage.jsx";
import Body from "./Components/Body.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Body />,
      },
    ],
  },
]);

export default appRouter;

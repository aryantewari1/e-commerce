import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Homepage from "./Components/homepage/Homepage.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
    ],
  },
]);

export default appRouter;

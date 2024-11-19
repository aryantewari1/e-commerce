import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import appRouter from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import appStore from "./store/appStore.js";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

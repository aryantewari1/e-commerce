import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import appRouter from "./routes.jsx";
import { RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);

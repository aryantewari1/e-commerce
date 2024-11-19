import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/appData";
import sideBarReducer from "./Slices/sideBarSlice";
const appStore = configureStore({
  reducer: {
    products: productReducer,
    sidebar: sideBarReducer,
  },
});

export default appStore;

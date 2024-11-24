import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/appData";
import sideBarReducer from "./Slices/sideBarSlice";
import carouselReducer from "./Slices/CarouselSlice";
const appStore = configureStore({
  reducer: {
    products: productReducer,
    sidebar: sideBarReducer,
    carousel: carouselReducer,
  },
});

export default appStore;

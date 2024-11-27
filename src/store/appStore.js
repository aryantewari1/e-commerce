import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/appData";
import sideBarReducer from "./Slices/sideBarSlice";
import carouselReducer from "./Slices/CarouselSlice";
import cartReducer from "./Slices/cartSlice";
const appStore = configureStore({
  reducer: {
    products: productReducer,
    sidebar: sideBarReducer,
    carousel: carouselReducer,
    cart: cartReducer,
  },
});

export default appStore;

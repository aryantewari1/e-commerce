import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Slices/appData";
const appStore = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default appStore;

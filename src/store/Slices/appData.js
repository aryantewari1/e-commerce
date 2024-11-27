import { createSlice } from "@reduxjs/toolkit";

const appData = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.product = action.payload;
    },
    removeProduct: (state) => {
      state.product = {};
    },
  },
});

export const { addProducts, addProduct, removeProduct } = appData.actions;
export default appData.reducer;

import { createSlice } from "@reduxjs/toolkit";

const appData = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProducts } = appData.actions;
export default appData.reducer;

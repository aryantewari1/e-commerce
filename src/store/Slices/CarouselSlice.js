import { createSlice } from "@reduxjs/toolkit";

const CarouselSlice = createSlice({
  name: "carousel",
  initialState: {
    activeIndex: 0,
  },

  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActiveIndex } = CarouselSlice.actions;
export default CarouselSlice.reducer;

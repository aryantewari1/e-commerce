import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    showSideBar: false,
  },
  reducers: {
    setShowSideBar: (state, action) => {
      state.showSideBar = action.payload;
    },
  },
});

export const { setShowSideBar } = sideBarSlice.actions;
export default sideBarSlice.reducer;

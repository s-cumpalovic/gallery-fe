import { createSlice } from "@reduxjs/toolkit";

export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
  },
  reducers: {
    setGalleries: (state, action) => {
      state.galleries = action.payload;
    },
  },
});

export const { setGalleries } = galleriesSlice.actions;

export default galleriesSlice.reducer;

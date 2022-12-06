import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initGetGalleries: () => {},
};

export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
  },
  reducers: {
    setGalleries: (state, action) => {
      state.galleries = action.payload;
    },
    ...middlewareActions,
  },
});

export const { setGalleries, initGetGalleries } = galleriesSlice.actions;

export default galleriesSlice.reducer;

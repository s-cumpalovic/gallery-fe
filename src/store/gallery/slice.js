import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initGetGalleries: () => {},
  initGetSingleGallery: () => {},
  initStoreGallery: () => {},
  initEditGallery: () => {},
  initDeleteGallery: () => {},
};

export const galleriesSlice = createSlice({
  name: "galleries",
  initialState: {
    galleries: [],
    singleGallery: {},
  },
  reducers: {
    setGalleries: (state, action) => {
      state.galleries = action.payload.data;
    },
    setSingleGallery: (state, action) => {
      state.singleGallery = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  setGalleries,
  setSingleGallery,
  initGetGalleries,
  initGetSingleGallery,
  initStoreGallery,
  initEditGallery,
  initDeleteGallery,
} = galleriesSlice.actions;

export default galleriesSlice.reducer;

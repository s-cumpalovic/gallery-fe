import { configureStore } from "@reduxjs/toolkit";

import galleriesReducer from "./gallery/slice";
export default configureStore({
  reducer: {
    galleries: galleriesReducer,
  },
});

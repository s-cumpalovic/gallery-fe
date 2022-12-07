import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initLoginUser: () => {},
  initRegisterUser: () => {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {},
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
    register: (state, action) => {
      state.user = action.payload.user;
    },
    ...middlewareActions,
  },
});

export const { initLoginUser, initRegisterUser, login, register } =
  usersSlice.actions;

export default usersSlice.reducer;

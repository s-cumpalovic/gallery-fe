import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initLoginUser: () => {},
  initRegisterUser: () => {},
  initLogoutUser: () => {},
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
    logout: (state) => {
      state.user = {};
    },
    ...middlewareActions,
  },
});

export const {
  initLoginUser,
  initRegisterUser,
  initLogoutUser,
  login,
  register,
  logout,
} = usersSlice.actions;

export default usersSlice.reducer;

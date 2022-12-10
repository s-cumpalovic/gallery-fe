import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initLoginUser: () => {},
  initRegisterUser: () => {},
  initLogoutUser: () => {},
  initRefreshToken: () => {},
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
    refresh: (state, action) => {
      state.user = action.payload;
    },
    ...middlewareActions,
  },
});

export const {
  initLoginUser,
  initRegisterUser,
  initLogoutUser,
  initRefreshToken,
  login,
  register,
  logout,
  refresh,
} = usersSlice.actions;

export default usersSlice.reducer;

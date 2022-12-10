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
    isAuth: false,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
    },
    register: (state, action) => {
      state.user = action.payload.user;
    },
    refresh: (state, action) => {
      state.user = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
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
  setIsAuth,
} = usersSlice.actions;

export default usersSlice.reducer;

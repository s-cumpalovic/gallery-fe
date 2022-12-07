import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
  initLoginUser: () => {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {
        user: {
            name: "",
        },
        authorisation: {
            token: "",
        }
    },
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    ...middlewareActions,
  },
});

export const { initLoginUser, login } = usersSlice.actions;

export default usersSlice.reducer;

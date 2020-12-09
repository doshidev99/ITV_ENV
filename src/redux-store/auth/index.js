import { createSlice } from "@reduxjs/toolkit";

const clearLocalUserInfo = () => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("isLogedIn");
  localStorage.removeItem("token");
};

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: true,
  },
  reducers: {
    login: (state, action) => {
      state.isLogedIn = true;
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isLogedIn", "true");
    },
    logout: (state, action) => {
      state.isLogedIn = false;
      state.userInfo = undefined;
      clearLocalUserInfo();
    },
  },
});

export { actions };
export default reducer;

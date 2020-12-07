import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const { actions, reducer } = createSlice({
  name: "auth",
  initialState: {
    isLogedIn: true,
  },
  reducers: {},
});

export { actions };
export default reducer;

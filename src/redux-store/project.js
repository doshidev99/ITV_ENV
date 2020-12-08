import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "project",
  initialState: {
    listProjects: [],
  },
  reducers: {
    getAllProject: (state, action) => {
      state.listProjects = action.payload?.results;
    },
  },
});

export { actions };
export default reducer;

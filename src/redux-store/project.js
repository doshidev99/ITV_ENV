import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "project",
  initialState: {
    listProjects: [],
    total: 0,
  },
  reducers: {
    getAllProject: (state, action) => {
      state.listProjects = action.payload?.results;
      state.total = action.payload?.total;
    },
  },
});

export { actions };
export default reducer;

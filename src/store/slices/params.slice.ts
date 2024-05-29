import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  static: {
    client_width: 0,
    client_height: 0,
  },
};

export const ParamsSlice = createSlice({
  name: "params",
  initialState: initialState,
  reducers: {
    setClientResolution: (state, action) => {
      state.static.client_width = action.payload.width;
      state.static.client_height = action.payload.height;
    },
  },
});

export const ParamsSliceReducer = ParamsSlice.reducer;
export const ParamsSliceActions = ParamsSlice.actions;

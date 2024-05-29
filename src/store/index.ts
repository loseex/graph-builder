import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ParamsSliceReducer } from "./slices/params.slice";

const rootReducer = combineReducers({
  ParamsSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypedRootState = ReturnType<typeof store.getState>;

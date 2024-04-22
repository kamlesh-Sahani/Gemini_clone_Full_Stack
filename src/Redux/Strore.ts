import { configureStore } from "@reduxjs/toolkit";
import geminiSlice from "./Slice/Reducer";
const Store = configureStore({
  reducer: {
    geminiSlice,
  },
});

export default Store;

export type AppDispatch = typeof Store.dispatch;
export type RootType = ReturnType<typeof Store.getState>

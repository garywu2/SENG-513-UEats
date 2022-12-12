import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import appStateSlice from "./features/appStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

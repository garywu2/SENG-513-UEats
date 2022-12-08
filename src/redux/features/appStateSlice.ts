import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  cartFoodItems: any;
};

const initialState: appState = {
  appState: "",
  cartFoodItems: [],
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setFoodItemsState: (state, action: any) => {
      state.cartFoodItems = action.payload;
    },
  },
});

export const { setAppState, setFoodItemsState } = appStateSlice.actions;

export default appStateSlice.reducer;

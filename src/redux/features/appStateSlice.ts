import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  cartFoodItems: any;
  userInfo: any;
};

const initialState: appState = {
  appState: "",
  cartFoodItems: [],
  userInfo: {},
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
    setUserInfoState: (state, action: any) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setAppState, setFoodItemsState, setUserInfoState } =
  appStateSlice.actions;

export default appStateSlice.reducer;

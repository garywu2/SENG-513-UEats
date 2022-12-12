import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type appState = {
  appState: string;
  cartFoodItems: any;
  orders: any;
  restaurants: any;
  userInfo: any;
  foodItems: any;
};

const initialState: appState = {
  appState: "",
  cartFoodItems: [],
  orders: [],
  restaurants: [],
  userInfo: {},
  foodItems: {},
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setCartFoodItemsState: (state, action: any) => {
      state.cartFoodItems = action.payload;
    },
    setOrdersState: (state, action: any) => {
      state.orders = action.payload;
    },
    setRestaurantsState: (state, action: any) => {
      state.restaurants = action.payload;
    },
    setUserInfoState: (state, action: any) => {
      state.userInfo = action.payload;
    },
    setFoodItemsState: (state, action: any) => {
      state.foodItems = action.payload;
    },

    resetState: (state) => {
      state.appState = "";
      state.cartFoodItems = [];
      state.orders = [];
      state.restaurants = [];
      state.userInfo = {};
      state.foodItems = {};
    },
  },
});

export const {
  setAppState,
  setCartFoodItemsState,
  setRestaurantsState,
  setUserInfoState,
  setFoodItemsState,
  setOrdersState,
  resetState,
} = appStateSlice.actions;

export default appStateSlice.reducer;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFoodItemsState } from "../redux/features/appStateSlice";
import axios from "axios";

export default function useFoodItemsListener() {
  const FOOD_ITEMS_ENDPOINT = "http://localhost:5000/food-items";
  const dispatch = useDispatch();
  const foodItems = useSelector((state: any) => state.appState.foodItems);

  useEffect(() => {
    axios.get(FOOD_ITEMS_ENDPOINT).then((result: any) => {
      console.log(result.data);
      dispatch(setFoodItemsState(result.data));
    });
  }, [dispatch]);
  return { foodItems };
}

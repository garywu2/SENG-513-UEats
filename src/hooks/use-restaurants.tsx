import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRestaurantsState } from "../redux/features/appStateSlice";
import axios from "axios";

export default function useRestaurantsListener() {
  const RESTAURANTS_ENDPOINT = "http://localhost:5000/stores";
  const dispatch = useDispatch();
  const restaurants = useSelector((state: any) => state.appState.restaurants);

  useEffect(() => {
    axios.get(RESTAURANTS_ENDPOINT).then((result: any) => {
      console.log(result.data);
      dispatch(setRestaurantsState(result.data));
    });
  }, [dispatch]);
  return { restaurants };
}

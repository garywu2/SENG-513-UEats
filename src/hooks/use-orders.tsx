import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrdersState } from "../redux/features/appStateSlice";
import axios from "axios";

export default function useOrdersListener() {
  const userInfo = useSelector((state: any) => state.appState.userInfo);
  // const { data: ordersData } = useGetOrdersQuery(userInfo._id);
  const [orders, setOrders]: any = useState([]);
  const storeOrders = useSelector((state: any) => state.appState.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo._id) {
      axios
        .get(`http://localhost:5000/orders/user/${userInfo._id}`)
        .then((result: any) => {
          dispatch(setOrdersState(result.data));
          setOrders(result.data);
        });
    }
  }, [dispatch, userInfo]);

  return { orders };
}

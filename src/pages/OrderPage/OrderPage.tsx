// import { useGetOrdersQuery } from "../../redux/features/apiSlice";
import Grid from "@mui/material/Unstable_Grid2";
import { Chip, Divider } from "@mui/material";
import OrderCard from "../../components/order/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { setOrdersState } from "../../redux/features/appStateSlice";

const OrderPage = () => {
  const userInfo = useSelector((state: any) => state.appState.userInfo);
  // const { data: ordersData } = useGetOrdersQuery(userInfo._id);
  const [orders, setOrders]: any = useState([]);
  const storeOrders = useSelector((state: any) => state.appState.foodItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeOrders && storeOrders.length > 0) {
      setOrders(orders);
    } else {
      if (userInfo && userInfo._id) {
        axios
          .get(`http://localhost:5000/orders/user/${userInfo._id}`)
          .then((result: any) => {
            dispatch(setOrdersState(result.data));
            setOrders(result.data);
          });
      }
    }
  }, [dispatch, storeOrders, userInfo]);

  return (
    <>
      <h1>Order Page</h1>
      <Divider sx={{ margin: "2em" }}>
        <Chip label="Active Orders" color="success" />
      </Divider>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {orders &&
          orders
            .filter((order: any) => order.status === "active")
            .map((order: any, index: number) => (
              <Grid xs={12} sm={4} md={4} lg={3} xl={2} key={index}>
                <OrderCard order={order} />
              </Grid>
            ))}
      </Grid>
      <Divider sx={{ margin: "2em" }}>
        <Chip label="Processed Orders" />
      </Divider>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {orders &&
          orders
            .filter((order: any) => order.status === "processed")
            .map((order: any, index: number) => (
              <Grid xs={12} sm={4} md={4} lg={3} xl={2} key={index}>
                <OrderCard order={order} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default OrderPage;

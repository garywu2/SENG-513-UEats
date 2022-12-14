// import { useGetOrdersQuery } from "../../redux/features/apiSlice";
import { Chip, Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../../components/order/OrderCard";
import { setOrdersState } from "../../redux/features/appStateSlice";

const OrderPage = () => {
  const userInfo = useSelector((state: any) => state.appState.userInfo);
  // const { data: ordersData } = useGetOrdersQuery(userInfo._id);
  const [orders, setOrders]: any = useState([]);
  const storeOrders = useSelector((state: any) => state.appState.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (storeOrders && storeOrders.length > 0) {
      setOrders(storeOrders);
    } else {
      if (userInfo && userInfo._id) {
        if (userInfo.type && userInfo.type === "vendor") {
          axios
            .get(`http://localhost:5000/stores/${userInfo.store}/orders`)
            .then((result: any) => {
              dispatch(setOrdersState(result.data));
              setOrders(result.data);
            });
        } else {
          axios
            .get(`http://localhost:5000/orders/user/${userInfo._id}`)
            .then((result: any) => {
              dispatch(setOrdersState(result.data));
              setOrders(result.data);
            });
        }
      }
    }
  }, [dispatch, userInfo]);

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
              <Grid xs={12} sm={5} md={5} lg={4} xl={3} key={index}>
                <OrderCard order={order} setOrders={setOrders} />
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
              <Grid xs={12} sm={5} md={5} lg={4} xl={3} key={index}>
                <OrderCard order={order} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default OrderPage;

import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { mainColors } from "../../configs/colorConfigs";
import { setCartFoodItemsState } from "../../redux/features/appStateSlice";

const PaymentPage = () => {
  const defaultValues = {
    name: "",
    address: "",
    city: "",
    province: "",
    card: "",
    ccv: "",
    pickupTime: "",
  };
  const [paymentstate, setPaymentState]: any = useState(defaultValues);
  const [error, setError] = useState(false);

  const cartItems = useSelector((state: any) => state.appState.cartFoodItems);
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPaymentState({ ...paymentstate, [name]: value });
  };

  const handleSumbit = (e: any) => {
    if (
      paymentstate.name &&
      paymentstate.card &&
      paymentstate.address &&
      paymentstate.ccv &&
      paymentstate.city &&
      paymentstate.province &&
      paymentstate.pickupTime
    ) {
      let totalCost = 0;
      const foodItems: any = [];
      cartItems.map((item: any) => {
        totalCost += item.foodItem.price * item.quantity;
        foodItems.push({
          foodItem: item.foodItem._id,
          quantity: item.quantity,
        });
      });
      console.log(cartItems);
      axios
        .post("http://localhost:5000/orders", {
          totalCost,
          foodItems,
          store: cartItems[0].foodItem.store,
          client: userInfo._id,
          pickupTime: paymentstate.pickupTime,
        })
        .then((result: any) => {
          console.log(userInfo.shoppingCart);
          axios
            .put("http://localhost:5000/shopping-carts/empty", {
              _id: userInfo.shoppingCart,
            })
            .then((result: any) => {
              const emptyArray: any = [];
              dispatch(setCartFoodItemsState(emptyArray));
              navigate("/cart");
            })
            .catch((e: any) => {
              console.log(e);
            });
        })
        .catch((e: any) => {
          console.log(e);
        });

      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        pt: 4,
        minWidth: 200,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="client-name"
        label="Name"
        name="name"
        color="warning"
        value={paymentstate.name}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-address"
        label="Address"
        name="address"
        sx={{ width: "60%" }}
        color="warning"
        value={paymentstate.address}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-city"
        label="City"
        name="city"
        color="warning"
        value={paymentstate.city}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-province"
        label="Province"
        color="warning"
        name="province"
        value={paymentstate.province}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-card"
        label="Card Number"
        sx={{ width: "60%" }}
        name="card"
        color="warning"
        value={paymentstate.card}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-card-ccv"
        label="CCV"
        color="warning"
        name="ccv"
        value={paymentstate.ccv}
        onChange={handleChange}
      />
      <TextField
        required
        id="client-pickup-time"
        label="Pickup Time"
        color="warning"
        name="pickupTime"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        value={paymentstate.pickupTime}
        onChange={handleChange}
      />

      {error && (
        <Typography color={"red"}>Please fill all required forms.</Typography>
      )}
      <Box
        display={"flex"}
        sx={{
          justifyContent: "center",
          marginY: "2rem",
        }}
      >
        <Button
          size="large"
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            minWidth: 200,
          }}
          onClick={handleSumbit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentPage;

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingCartItem from "../../components/shoppingCart/ShoppingCartItem";
import { mainColors } from "../../configs/colorConfigs";
import { setFoodItemsState } from "../../redux/features/appStateSlice";

const CartPage = () => {
  const [foodItems, setFoodItems]: any = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const storeFoodItems = useSelector(
    (state: any) => state.appState.cartFoodItems
  );

  const userInfo = useSelector((state: any) => state.appState.userInfo);

  useEffect(() => {
    if (storeFoodItems.length > 0) {
      setFoodItems(storeFoodItems);
    } else {
      if (userInfo.shoppingCart) {
        axios
          .get(
            `http://localhost:5000/shopping-carts/${userInfo.shoppingCart}/food-items`
          )
          .then((result: any) => {
            console.log(result.data);
            if (result.data.length > 0) {
              dispatch(setFoodItemsState(result.data));
            }
          });
      }
    }
  }, [dispatch, storeFoodItems, userInfo]);

  useEffect(() => {
    let cost = 0;
    let storeID = "";
    let foundDuplicateStore = false;
    if (foodItems.length > 0) {
      storeID = foodItems[0].foodItem.store;
    }
    foodItems.map((item: any) => {
      cost += item.foodItem.price * item.quantity;
      if (item.foodItem.store !== storeID) {
        setError(true);
        foundDuplicateStore = true;
      }
      return cost;
    });
    if (!foundDuplicateStore) {
      setError(false);
    }
    setTotalCost(cost);
  }, [foodItems]);

  const updateCartItemQuantity = (itemID: string, quantity: string) => {
    axios
      .put("http://localhost:5000/shopping-carts/quantity/food-item", {
        _id: userInfo.shoppingCart,
        foodItem: itemID,
        quantity: quantity,
      })
      .then((result: any) => {
        console.log(result.data);
        dispatch(setFoodItemsState(result.data));
      });
  };

  const deleteCartItem = (itemID: string) => {
    axios
      .put("http://localhost:5000/shopping-carts/remove/food-item", {
        _id: userInfo.shoppingCart,
        foodItem: itemID,
      })
      .then((result: any) => {
        console.log(result.data);
        dispatch(setFoodItemsState(result.data));
      });
  };

  return (
    <Box display="flex" flexDirection="column">
      {foodItems.map((item: any) => (
        <ShoppingCartItem
          cartItem={item.foodItem}
          currentQuantity={item.quantity}
          deleteCartItem={deleteCartItem}
          updateCartItemQuantity={updateCartItemQuantity}
          key={item._id}
        />
      ))}
      <Box
        display="flex"
        flexDirection="row"
        sx={{ marginY: "1rem" }}
        justifyContent="center"
      >
        <Typography
          display="flex"
          alignItems={"center"}
          variant="h5"
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 200,
          }}
        >
          Total Cost: ${totalCost}
        </Typography>

        <Button
          size="large"
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginX: "2rem",
            minWidth: 200,
          }}
          disabled={foodItems.length <= 0}
          onClick={() => {
            navigate("/payment");
          }}
        >
          Create Order
        </Button>
      </Box>
      {error && (
        <Typography color={"red"}>
          Found items from different stores. Please remove those items
        </Typography>
      )}
    </Box>
  );
};

export default CartPage;

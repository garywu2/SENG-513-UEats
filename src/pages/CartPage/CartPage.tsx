import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartItem from "../../components/shoppingCart/ShoppingCartItem";
import { mainColors } from "../../configs/colorConfigs";
import { setFoodItemsState } from "../../redux/features/appStateSlice";

const CartPage = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const mockCartID = "639164155b9cb5cac4179495";

  const dispatch = useDispatch();
  const storeFoodItems = useSelector(
    (state: any) => state.appState.cartFoodItems
  );

  useEffect(() => {
    if (storeFoodItems.length > 0) {
      console.log(storeFoodItems);
      setFoodItems(storeFoodItems);
    } else {
      axios
        .get(`http://localhost:5000/shopping-carts/${mockCartID}/food-items`)
        .then((result: any) => {
          console.log(result.data);
          dispatch(setFoodItemsState(result.data));
        });
    }
  }, [dispatch, storeFoodItems]);

  useEffect(() => {
    let cost = 0;
    foodItems.map((item: any) => {
      cost += item.foodItem.price * item.quantity;
      return cost;
    });
    setTotalCost(cost);
  }, [foodItems]);

  const updateCartItemQuantity = (itemID: string, quantity: string) => {
    axios
      .put("http://localhost:5000/shopping-carts/quantity/food-item", {
        _id: mockCartID,
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
        _id: mockCartID,
        foodItem: itemID,
      })
      .then((result: any) => {
        console.log(result.data);
        dispatch(setFoodItemsState(result.data));
      });
  };

  return (
    <Box display='flex' flexDirection='column'>
      {foodItems.map((item: any) => (
        <ShoppingCartItem
          cartItem={item.foodItem}
          currentQuantity={item.quantity}
          deleteCartItem={deleteCartItem}
          updateCartItemQuantity={updateCartItemQuantity}
        />
      ))}
      <Box
        display='flex'
        flexDirection='row'
        sx={{ marginY: "1rem" }}
        justifyContent='center'
      >
        <Typography
          display='flex'
          alignItems={"center"}
          variant='h5'
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
          size='large'
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginX: "2rem",
            minWidth: 200,
          }}
        >
          Create Order
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;

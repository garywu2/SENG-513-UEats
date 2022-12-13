import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { mainColors } from "../../configs/colorConfigs";
import { setCartFoodItemsState } from "../../redux/features/appStateSlice";

const RestaurantDetailPage = (props: any) => {
  const [foodItems, setFoodItems] = useState([]);

  const { restaurantID } = useParams();

  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stores/${restaurantID}/food-items`)
      .then((result: any) => {
        console.log(result);
        setFoodItems(result.data);
      });
  }, [restaurantID]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {foodItems.length > 0 ? (
          foodItems.map((item: any) => {
            return (
              <Grid sx={{ margin: "1rem" }} key={item._id}>
                <Card sx={{ minWidth: "250px", color: mainColors.darkGray }}>
                  <CardHeader title={item.name}></CardHeader>
                  <CardMedia
                    component="img"
                    height="194"
                    image={`data:image/png;base64, ${item.image.data}`}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      color={"black"}
                      sx={{ fontSize: "1.5rem", textAlign: "center" }}
                    >
                      Price: ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {!props.approvalStatus && (
                      <Button
                        size="small"
                        sx={{
                          backgroundColor: mainColors.darkGray,
                          color: mainColors.lightOrange,
                          margin: "auto",
                          paddingX: "1rem",
                        }}
                        onClick={() => {
                          axios
                            .put(
                              "http://localhost:5000/shopping-carts/add/food-item",
                              {
                                _id: userInfo.shoppingCart,
                                foodItem: item._id,
                                quantity: 1,
                              }
                            )
                            .then((result: any) => {
                              console.log(result);
                              if (result.data) {
                                dispatch(setCartFoodItemsState(result.data));
                              }
                            })
                            .catch((e: any) => {
                              console.log(e);
                            });
                        }}
                      >
                        Add To Cart
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            );
          })
        ) : (
          <h3>No food items available</h3>
        )}
      </Grid>
    </Box>
  );
};

export default RestaurantDetailPage;

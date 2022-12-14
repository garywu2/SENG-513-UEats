import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ClientReview from "../../components/reviews/ClientReview";
import { mainColors } from "../../configs/colorConfigs";
import { setCartFoodItemsState } from "../../redux/features/appStateSlice";

const RestaurantDetailPage = (props: any) => {
  const [foodItems, setFoodItems] = useState([]);
  const [reviews, setReviews]: any = useState([]);

  const [userReview, setUserReview] = useState("");
  const [userRating, setUserRating] = useState(5);

  const { restaurantID } = useParams();

  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const handleReviewDelete = (id: any) => {
    axios
      .delete(`http://localhost:5000/reviews`, { data: { _id: id } })
      .then((result: any) => {
        sortreviewsData(result.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const sortreviewsData = (reviewData: any) => {
    const sortedData = [];
    for (let i = 0; i < reviewData.length; i++) {
      let replyFound = false;
      if (reviewData[i].reviewType === "comment") {
        for (let j = 0; j < reviewData.length; j++) {
          if (
            reviewData[j].parent &&
            reviewData[j].parent === reviewData[i]._id
          ) {
            sortedData.push({ comment: reviewData[i], reply: reviewData[j] });
            replyFound = true;
            break;
          }
        }
        if (!replyFound) {
          sortedData.push({ comment: reviewData[i] });
        }
      }
    }
    setReviews(sortedData);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stores/${restaurantID}/food-items`)
      .then((result: any) => {
        console.log(result);
        setFoodItems(result.data);
      });

    axios
      .get(`http://localhost:5000/stores/${restaurantID}/reviews`)
      .then((result: any) => {
        console.log(result);
        sortreviewsData(result.data);
      });
  }, [restaurantID]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent={"center"} spacing={2}>
        {foodItems.length > 0 ? (
          foodItems.map((item: any, index: number) => {
            return (
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "345px",
                  color: mainColors.darkGray,
                  margin: "1rem",
                }}
                key={index}
              >
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
                  {userInfo.type === "client" && (
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
            );
          })
        ) : (
          <h3>No food items available</h3>
        )}
      </Grid>
      {reviews.length > 0 &&
        reviews[0].comment.store &&
        reviews[0].comment.store.rating && (
          <Divider sx={{ margin: "2em" }}>
            <Chip
              sx={{ fontSize: 20 }}
              label={`Store Rating:${" "}
            ${(
              reviews.reduce(function (sum: any, data: any) {
                return sum + data.comment.rating;
              }, 0) / reviews.length
            ).toFixed(1)}`}
            />
          </Divider>
        )}
      <Grid container alignItems={"center"} flexDirection={"column"}>
        {reviews.map((review: any) => {
          return (
            <ClientReview
              comment={review.comment}
              reply={review.reply}
              key={review.comment._id}
              signedUser={userInfo}
              handleDelete={handleReviewDelete}
            />
          );
        })}
        {userInfo.type === "client" && (
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
              maxWidth: "800px",
              p: 1,
            }}
          >
            <TextField
              label="Write Your Review Here!"
              value={userReview}
              onChange={(e: any) => {
                setUserReview(e.target.value);
              }}
              multiline
              sx={{ display: "flex", width: "100%" }}
            ></TextField>
            <Rating
              sx={{
                marginY: "1rem",
                justifyContent: "center",
              }}
              value={userRating}
              onChange={(e: any) => {
                setUserRating(e.target.value);
              }}
            ></Rating>
            <Button
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
              }}
              onClick={() => {
                if (userReview) {
                  axios
                    .post("http://localhost:5000/reviews", {
                      client: userInfo._id,
                      store: restaurantID,
                      reviewType: "comment",
                      comment: userReview,
                      rating: userRating,
                    })
                    .then((result: any) => {
                      sortreviewsData(result.data);
                      setUserReview("");
                      setUserRating(5);
                    })
                    .catch((e: any) => {
                      console.log(e);
                    });
                }
              }}
            >
              Submit Review
            </Button>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default RestaurantDetailPage;

import { useSelector } from "react-redux";
import Announcement from "../../components/dashboard/Announcement";
import Carousel from "react-material-ui-carousel";
import { Button, Paper, Rating } from "@mui/material";
import useRestaurantsListener from "../../hooks/use-restaurants";
import useFoodItemsListener from "../../hooks/use-food-items";
import assets from "../../assets";
import { mainColors } from "../../configs/colorConfigs";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const styles = {
  CarouselContainer: {
    display: "flex",
    justifyContent: "center",
  },
  Carousel: {
    width: "50%",
  },
  CarouselItem: {
    padding: "3%",
  },
  ViewAllButton: {
    float: "right",
    backgroundColor: mainColors.lightGray,
    color: mainColors.darkGray,
    "&:hover": {
      backgroundColor: mainColors.darkGray,
      color: mainColors.lightOrange,
    },
  },
};

const Dashboard = () => {
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const { restaurants } = useRestaurantsListener();
  const popularRestaurants = restaurants.slice(0, 3);

  const { foodItems } = useFoodItemsListener(); // TODO having issues with this

  return (
    <div>
      <h1>Hello, {userInfo.name}</h1>
      <Announcement
        title="Get Discount Voucher Up To 20%"
        text="As UEAT's beta user, you may be eligible for a discount voucher! Click the button below to learn more!"
      />
      <h2>Popular Restaurants</h2>
      <Button sx={styles.ViewAllButton} size="large" href={"/restaurants"}>
        View All
        <ArrowCircleRightIcon
          sx={{
            paddingLeft: "3%",
            fontSize: "1.8rem",
            color: mainColors.lightOrange,
          }}
        />
      </Button>
      <div style={styles.CarouselContainer}>
        <Carousel
          sx={styles.Carousel}
          navButtonsAlwaysVisible={false}
          navButtonsAlwaysInvisible={true}
          indicatorIconButtonProps={{
            style: {
              padding: "10px", // 1
              color: mainColors.darkGray, // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: mainColors.lightOrange, // 2
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "50px", // 5
            },
          }}
        >
          {popularRestaurants.map((restaurant: any, i: any) => (
            <RestaurantItem key={i} item={restaurant} />
          ))}
        </Carousel>
      </div>
      <h2>Recent Orders</h2>
    </div>
  );
};

function RestaurantItem(props: any) {
  return (
    <Paper style={styles.CarouselItem}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <Rating name="disabled" value={props.item.rating} disabled />
    </Paper>
  );
}

export default Dashboard;

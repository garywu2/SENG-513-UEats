import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import SearchBar from "../../components/common/SearchBar";
import { filterData } from "../../components/common/SearchBar";
import CustomModal from "../../components/common/CustomModal";
import axios from "axios";
import { setRestaurantsState } from "../../redux/features/appStateSlice";
import { useDispatch, useSelector } from "react-redux";
import assets from "../../assets";

const RestaurantsPage = () => {
  const RESTAURANTS_ENDPOINT = "http://localhost:5000/stores";
  const dispatch = useDispatch();
  const restaurants = useSelector((state: any) => state.appState.restaurants);

  useEffect(() => {
    axios.get(RESTAURANTS_ENDPOINT).then((result: any) => {
      console.log(result.data);
      dispatch(setRestaurantsState(result.data));
    });
  }, [dispatch, restaurants, setRestaurantsState]);

  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, restaurants);

  const [restaurantSelected, setRestaurantSelected] = useState(restaurants[0]);

  const [open, setOpen] = useState(false);
  const handleOpen = (restaurant: any) => () => {
    setRestaurantSelected(restaurant);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h1>Restaurants</h1>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}>
          <SearchBar setSearchQuery={setSearchQuery} />
        </ImageListItem>

        {dataFiltered.map((restaurant: any) => (
          <ImageListItem key={restaurant.name}>
            <img
              src={`${assets.images.logo}?w=248&fit=crop&auto=format`}
              srcSet={`${assets.images.logo}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={restaurant.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={restaurant.name}
              subtitle={restaurant.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${restaurant.name}`}
                  onClick={handleOpen(restaurant)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        <CustomModal
          title={restaurantSelected.name}
          text={restaurantSelected.description}
          open={open}
          handleClose={handleClose}
        />
      </ImageList>
    </div>
  );
};

export default RestaurantsPage;

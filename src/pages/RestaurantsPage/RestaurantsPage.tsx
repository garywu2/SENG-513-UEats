import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/common/CustomModal";
import CardMedia from "@mui/material/CardMedia";
import useRestaurantsListener from "../../hooks/use-restaurants";
import SearchBar from "../../components/common/SearchBar";

const RestaurantsPage = () => {
  const { restaurants } = useRestaurantsListener();
  const allStores = restaurants.slice(0, restaurants.length / 2);

  console.log("restaurants:" + restaurants);

  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (data: any) => {
    if (!searchQuery) {
      return data;
    } else {
      return data.filter((d: any) =>
        d.name.toLowerCase().includes(searchQuery)
      );
    }
  };

  const dataFiltered = filterData(allStores);

  const [restaurantSelected, setRestaurantSelected] = useState(allStores[0]);

  const [open, setOpen] = useState(false);
  const handleOpen = (restaurant: any) => () => {
    setRestaurantSelected(restaurant);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Restaurants</h1>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}>
          <SearchBar setSearchQuery={setSearchQuery} />
        </ImageListItem>

        {dataFiltered.map(
          (restaurant: any) =>
            restaurant && (
              <ImageListItem key={restaurant.name}>
                <CardMedia
                  component="img"
                  width="200px"
                  height="200px"
                  image={`data:image/png;base64, ${restaurant.image.data}`}
                  alt={restaurant.name}
                />
                <ImageListItemBar
                  title={restaurant.name}
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
            )
        )}

        {restaurantSelected && (
          <CustomModal
            title={restaurantSelected.name}
            text={restaurantSelected.description}
            open={open}
            handleClose={handleClose}
          />
        )}
      </ImageList>
    </div>
  );
};

export default RestaurantsPage;

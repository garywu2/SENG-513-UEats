import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import SearchBar from "../../components/common/SearchBar";
import CustomModal from "../../components/common/CustomModal";
import useRestaurantsListener from "../../hooks/use-restaurants";

const RestaurantsPage = () => {
  const { restaurants } = useRestaurantsListener();

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

  const dataFiltered = filterData(restaurants);

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

        {dataFiltered.length > 0 &&
          dataFiltered[0] &&
          dataFiltered.map(
            (restaurant: any) =>
              restaurant && (
                <ImageListItem key={restaurant.name}>
                  <img
                    src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format`}
                    srcSet={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={restaurant.name}
                    loading="lazy"
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

import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StorePageItem from "../../components/store/StorePageItem";

const StorePage = () => {
  const [storeFoodItems, setStoreFoodItems] = useState([]);
  const [error, setError] = useState("");

  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const handleEdit = (data: any) => {
    axios
      .put("http://localhost:5000/food-items", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((result: any) => {
        console.log(result);
        setStoreFoodItems(result.data);
        setError("");
      })
      .catch((e: any) => {
        console.log(e);
        setError(e.response.data.msg);
      });
  };

  const handleDelete = (id: any) => {
    axios
      .delete("http://localhost:5000/food-items", {
        data: { _id: id },
      })
      .then((result: any) => {
        setStoreFoodItems(result.data);
        setError("");
      })
      .catch((e) => {
        console.log(e);
        setError(e.response.data.msg);
      });
  };

  useEffect(() => {
    if (userInfo.store) {
      axios
        .get(`http://localhost:5000/stores/${userInfo.store}/food-items`)
        .then((result: any) => {
          console.log(result);
          setStoreFoodItems(result.data);
        })
        .catch((e: any) => {
          console.log(e);
        });
    }
  }, [userInfo]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {storeFoodItems.length > 0 ? (
          storeFoodItems.map((item: any) => {
            return (
              <StorePageItem
                {...item}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                key={item._id}
              />
            );
          })
        ) : (
          <h3>No food items available</h3>
        )}
      </Grid>
      <Typography color="red">{error}</Typography>
    </Box>
  );
};

export default StorePage;

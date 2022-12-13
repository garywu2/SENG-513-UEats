import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StoreAddFoodItem from "../../components/store/StoreAddFoodItem";
import StorePageItem from "../../components/store/StorePageItem";
import { mainColors } from "../../configs/colorConfigs";
import CreateStoreForm from "../../components/store/CreateStoreForm";

const StorePage = () => {
  const [storeFoodItems, setStoreFoodItems] = useState([]);
  const [error, setError] = useState("");

  const [opeModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

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

  const handleCreate = (data: any) => {
    data.append("store", userInfo.store);
    data.append("availability", true);

    axios
      .post("http://localhost:5000/food-items", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
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
    <>
      <h1>Store Page</h1>
      {userInfo.store ? (
        <Box sx={{ flexGrow: 1 }}>
          {userInfo.store ? (
            <div>
              {storeFoodItems.length > 0 ? (
                <Grid container spacing={2}>
                  {storeFoodItems.map((item: any) => {
                    return (
                      <StorePageItem
                        {...item}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        key={item._id}
                      />
                    );
                  })}
                </Grid>
              ) : (
                <h3>No food items available</h3>
              )}
              <Button
                startIcon={<AddIcon />}
                sx={{
                  backgroundColor: mainColors.darkGray,
                  color: mainColors.lightOrange,
                  marginTop: "2rem",
                  paddingY: "0.5rem",
                  paddingX: "1rem",
                }}
                onClick={() => [setOpenModal(true)]}
              >
                Add Food Item
              </Button>
              <StoreAddFoodItem
                openModal={opeModal}
                handleClose={handleClose}
                handleCreate={handleCreate}
              />
            </div>
          ) : (
            <h3>Please add store</h3>
          )}
          <Typography color="red">{error}</Typography>
        </Box>
      ) : (
        <CreateStoreForm />
      )}
    </>
  );
};

export default StorePage;

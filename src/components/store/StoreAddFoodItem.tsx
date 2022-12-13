import { Box, Button, Modal, TextField } from "@mui/material";
import { useState } from "react";
import { mainColors } from "../../configs/colorConfigs";

const StoreAddFoodItem = (props: any) => {
  const [storestate, setStoreState]: any = useState({
    name: "",
    price: "",
    description: "",
  });

  const [storeImage, setStoreImage]: any = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStoreState({ ...storestate, [name]: value });
  };

  const handleFileChange = (e: any) => {
    setStoreImage(e.target.files[0]);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={props.openModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        onClose={props.handleClose}
      >
        <Box
          sx={{
            ...style,
            width: "400px",
            "& .MuiTextField-root": { m: 1 },
            "& label.Mui-focused": {
              color: mainColors.darkGray,
            },

            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: mainColors.lightOrange,
              },
            },
          }}
        >
          <TextField
            label="name"
            name="name"
            onChange={handleChange}
            value={storestate.name}
          ></TextField>
          <TextField
            label="description"
            name="description"
            onChange={handleChange}
            value={storestate.description}
          ></TextField>
          <TextField
            label="price"
            name="price"
            onChange={handleChange}
            value={storestate.price}
          ></TextField>
          <TextField
            type="file"
            name="image"
            onChange={handleFileChange}
          ></TextField>
          <Button
            sx={{
              backgroundColor: mainColors.darkGray,
              color: mainColors.lightOrange,
              margin: "auto",
              paddingX: "1rem",
            }}
            onClick={() => {
              if (
                storeImage &&
                setStoreState.name &&
                storestate.price &&
                storestate.description
              ) {
                const formData = new FormData();
                formData.append("image", storeImage);
                formData.append("name", storestate.name);
                formData.append("price", storestate.price);
                formData.append("description", storestate.description);

                props.handleCreate(formData);
              }
              props.handleClose();
            }}
          >
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
export default StoreAddFoodItem;

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../configs/colorConfigs";

const StorePageItem = (props: any) => {
  const [storestate, setStoreState]: any = useState({
    name: props.name,
    price: props.price,
  });
  const [storeImage, setStoreImage]: any = useState();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setStoreState({ ...storestate, [name]: value });
  };

  const handleFileChange = (e: any) => {
    setStoreImage(e.target.files[0]);
  };

  useEffect(() => {
    setStoreState({
      name: props.name,
      price: props.price,
    });
  }, [props]);

  const handleClick = () => {
    if (storeImage || setStoreState.name || storestate.price) {
      const formData = new FormData();
      formData.append("_id", props._id);
      if (storeImage) formData.append("image", storeImage);
      if (storestate.name) formData.append("name", storestate.name);
      if (storestate.price) formData.append("price", storestate.price);

      props.handleEdit(formData);
    }
    handleClose();
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

  const [opeModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Grid sx={{ margin: "1rem" }} key={props._id}>
      <div>
        <Modal
          open={opeModal}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          closeAfterTransition
          onClose={handleClose}
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
            >
              name
            </TextField>
            <TextField
              label="price"
              name="price"
              onChange={handleChange}
              value={storestate.price}
            >
              price
            </TextField>
            <TextField type="file" name="image" onChange={handleFileChange}>
              file
            </TextField>
            <Button
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
                margin: "auto",
                paddingX: "1rem",
              }}
              onClick={handleClick}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </div>
      <Card sx={{ minWidth: "250px", color: mainColors.darkGray }}>
        <CardHeader title={props.name}></CardHeader>
        <CardMedia
          component="img"
          height="194"
          image={`data:image/png;base64, ${props.image.data}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            color={"black"}
            sx={{ fontSize: "1.5rem", textAlign: "center" }}
          >
            Price: ${props.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={<EditIcon />}
            sx={{
              backgroundColor: mainColors.darkGray,
              color: mainColors.lightOrange,
              margin: "auto",
              paddingX: "1rem",
            }}
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Edit
          </Button>
          <Button
            size="small"
            startIcon={<DeleteIcon />}
            sx={{
              backgroundColor: mainColors.darkGray,
              color: mainColors.lightOrange,
              margin: "auto",
              paddingX: "1rem",
            }}
            onClick={() => {
              props.handleDelete(props._id);
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default StorePageItem;

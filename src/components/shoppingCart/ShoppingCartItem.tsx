import { Delete } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { mainColors } from "../../configs/colorConfigs";

const ShoppingCartItem = (props: any) => {
  const { cartItem, currentQuantity, deleteCartItem, updateCartItemQuantity } =
    props;
  const [quantity, setQuantity] = useState(currentQuantity);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCartItemQuantity(cartItem._id, e.target.value);
  };

  useEffect(() => {
    setQuantity(currentQuantity);
  }, [currentQuantity]);

  return (
    <Box
      flexDirection={"column"}
      sx={{
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 300,
        marginTop: "1rem",
      }}
    >
      <Box
        display="flex"
        flexDirection={"row"}
        alignContent="start"
        justifyContent="space-evenly"
        margin="auto"
      >
        {!!cartItem.image ? (
          <Avatar
            src={`data:image/png;base64, ${cartItem.image.data}`}
          ></Avatar>
        ) : (
          <Avatar src="/" alt={cartItem.name}></Avatar>
        )}

        <Typography display="flex" alignItems={"center"} variant="h5" px={4}>
          {cartItem.name}
        </Typography>
        <Typography display="flex" alignItems={"center"} variant="h5">
          ${cartItem.price}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={"row"}
        alignContent="start"
        justifyContent="center"
        margin="auto"
        marginTop={"1rem"}
        marginRight="3rem"
      >
        <TextField
          size="small"
          variant="outlined"
          select
          label="Quant"
          value={quantity}
          onChange={handleQuantityChange}
          sx={{ width: "10ch", marginRight: "2rem" }}
        >
          {Array(9)
            .fill(0)
            .map((_, i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
        </TextField>

        <Fab
          aria-label="delete"
          size="small"
          sx={{
            color: mainColors.lightOrange,
            backgroundColor: mainColors.darkGray,
            marginLeft: "2rem",
          }}
          onClick={() => {
            deleteCartItem(cartItem._id);
          }}
        >
          <Delete />
        </Fab>
      </Box>
    </Box>
  );
};

export default ShoppingCartItem;

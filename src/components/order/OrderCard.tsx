import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Collapse,
  IconButton,
  IconButtonProps,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import {
  useGetOrderFoodItemsQuery,
  useGetStoreQuery,
} from "../../redux/features/apiSlice";
import CheckIcon from "@mui/icons-material/Check";
import colorConfigs from "../../configs/colorConfigs";
import { useDispatch, useSelector } from "react-redux";
import { setOrdersState } from "../../redux/features/appStateSlice";
import axios from "axios";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const OrderCard = (props: any) => {
  const userInfo = useSelector((state: any) => state.appState.userInfo);
  const storeOrders = useSelector((state: any) => state.appState.orders);
  const dispatch = useDispatch();
  const { data: storeData } = useGetStoreQuery(props.order.store);
  const { data: foodItemsData } = useGetOrderFoodItemsQuery(props.order._id);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleProcessClick = (orderId: any) => {
    axios
      .put(`http://localhost:5000/orders/process/`, { _id: orderId })
      .then((result: any) => {
        const newOrders = storeOrders.map((o: any) =>
          o._id === orderId ? result.data : o
        );
        dispatch(setOrdersState(newOrders));
        props.setOrders(newOrders);
      });
  };

  return (
    <>
      {storeData && (
        <Card
          sx={{
            maxWidth: 345,
          }}
        >
          <CardMedia
            component="img"
            width="250px"
            height="250px"
            image={`data:image/png;base64, ${storeData.image.data}`}
            alt={storeData.name}
          />
          <CardContent sx={{ paddingBottom: 0 }}>
            <Typography gutterBottom variant="h5" component="div">
              {storeData.name}
            </Typography>
            <Typography component="div">
              Pick-up:{" "}
              {new Date(props.order.pickupTime).toLocaleString("en-GB", {
                minute: "numeric",
                hour: "numeric",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Typography>

            <Typography variant="body1">
              Price: ${props.order.totalCost}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ paddingBottom: 0, marginBottom: "1em" }}
          >
            <Typography variant="body2" marginLeft="0.5rem" component="div">
              Food Items
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
            {userInfo.type === "vendor" && props.order.status === "active" && (
              <Button
                onClick={() => {
                  handleProcessClick(props.order._id);
                }}
                size="small"
                startIcon={<CheckIcon />}
                variant="contained"
                sx={{
                  "&: hover": {
                    backgroundColor: colorConfigs.sidebar.activeBg,
                  },
                  backgroundColor: colorConfigs.sidebar.hoverBg,
                  color: colorConfigs.sidebar.color,
                  marginLeft: "0.2em",
                }}
              >
                Process
              </Button>
            )}
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{ padding: "0px" }}>
              <List dense={true} sx={{ listStyleType: "disc", pl: 4 }}>
                {foodItemsData &&
                  foodItemsData.map((foodItem: any, index: number) => (
                    <ListItem
                      key={index}
                      sx={{ display: "list-item", padding: "0px" }}
                    >
                      <ListItemText
                        primary={
                          foodItem.foodItem.name +
                          " " +
                          foodItem.quantity +
                          "x: $" +
                          foodItem.foodItem.price
                        }
                      />
                    </ListItem>
                  ))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </>
  );
};

export default OrderCard;

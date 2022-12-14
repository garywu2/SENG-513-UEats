import { Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Fab,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { mainColors } from "../../configs/colorConfigs";
import ReplyIcon from "@mui/icons-material/Reply";
import axios from "axios";

const ClientReview = (props: any) => {
  const [rating, setRating] = useState(props.comment.rating);
  const [vendorResponse, setVendorResponse] = useState("");
  const [reply, setReply] = useState(props.reply);
  const handleChange = (e: any) => {
    setRating(e.target.value);
  };

  const getDateFormat = (date: any) => {
    try {
      const dateObj = new Date(date);
      return `${dateObj.getUTCFullYear()}-${
        dateObj.getMonth() + 1
      }-${dateObj.getUTCDate()}`;
    } catch (e) {
      return "";
    }
  };

  return (
    <Grid
      sx={{
        margin: "1rem",
        bgcolor: "transparent",
        width: "100%",
        display: "flex",
        maxWidth: "800px",
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
        }}
      >
        <Container
          sx={{
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            p: 2,
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              padding: "0",
              margin: "0 0 0 1rem ",
              fontWeight: "fontWeightBold",
            }}
          >
            {props.comment.client.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={handleChange}
                readOnly
                size="small"
                sx={{ marginLeft: "0.9rem" }}
              />
              <Typography fontSize={"14px"} sx={{ marginLeft: "0.9rem" }}>
                {getDateFormat(props.comment.date)}
              </Typography>
            </Box>
            {(props.signedUser._id === props.comment.client._id ||
              props.signedUser.type === "admin") && (
              <Fab
                aria-label="delete"
                size="small"
                sx={{
                  color: mainColors.lightOrange,
                  backgroundColor: mainColors.darkGray,
                  marginLeft: "auto",
                }}
                onClick={() => {
                  props.handleDelete(props.comment._id);
                }}
              >
                <Delete />
              </Fab>
            )}
          </Box>

          <Typography
            sx={{ display: "inline-block", margin: "0.5rem 0 0 1rem " }}
          >
            {props.comment.comment}
          </Typography>
          {!reply &&
            props.signedUser.type === "vendor" &&
            props.comment.store._id === props.signedUser.store && (
              <>
                <TextField
                  label="Write Your Response Here!"
                  value={vendorResponse}
                  onChange={(e: any) => {
                    setVendorResponse(e.target.value);
                  }}
                  multiline
                  sx={{ display: "flex", width: "100%", marginY: "1rem" }}
                ></TextField>
                <Button
                  sx={{
                    backgroundColor: mainColors.darkGray,
                    color: mainColors.lightOrange,
                  }}
                  onClick={() => {
                    if (vendorResponse) {
                      axios
                        .post("http://localhost:5000/reviews", {
                          client: props.signedUser._id,
                          store: props.comment.store._id,
                          reviewType: "reply",
                          comment: vendorResponse,
                          parent: props.comment._id,
                        })
                        .then((result: any) => {
                          setVendorResponse("");
                          setReply(result.data[0]);
                        })
                        .catch((e: any) => {
                          console.log(e);
                        });
                    }
                  }}
                >
                  Submit Reply
                </Button>
              </>
            )}
          {reply && (
            <>
              <Container sx={{ display: "flex", marginTop: "1em" }}>
                <ReplyIcon
                  sx={{ marginRight: "0.75rem", transform: "rotate(180deg)" }}
                ></ReplyIcon>
                <Typography
                  sx={{
                    fontWeight: "fontWeightBold",
                    marginRight: "0.75rem",
                  }}
                >
                  Owner Reply:
                </Typography>
              </Container>
              <Typography
                sx={{ display: "inline-block", marginLeft: "3.75rem" }}
              >
                {reply.comment}
              </Typography>
            </>
          )}
        </Container>
      </Stack>
    </Grid>
  );
};

export default ClientReview;

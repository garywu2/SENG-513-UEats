import { Delete } from "@mui/icons-material";
import { Box, Container, Fab, Grid, Rating, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { mainColors } from "../../configs/colorConfigs";

const ClientReview = (props: any) => {
  const [rating, setRating] = useState(props.comment.rating);

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
        bgcolor: "background.paper",
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <Stack spacing={2}>
        <Container
          sx={{
            margin: "1rem",
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 1,
            p: 1,
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            sx={{ marginY: "0.5rem" }}
          >
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={handleChange}
              readOnly
            />
            <Typography
              sx={{ marginLeft: "1rem", fontWeight: "fontWeightBold" }}
            >
              {props.comment.client.name}
            </Typography>
            <Typography
              sx={{ marginLeft: "1rem", fontWeight: "fontWeightBold" }}
            >
              {getDateFormat(props.comment.date)}
            </Typography>
            {(props.signedUser._id === props.comment.client._id ||
              props.signedUser.type === "admin") && (
              <Fab
                aria-label="delete"
                size="small"
                sx={{
                  color: mainColors.lightOrange,
                  backgroundColor: mainColors.darkGray,
                  marginLeft: "2rem",
                }}
                onClick={() => {
                  props.handleDelete(props.comment._id);
                }}
              >
                <Delete />
              </Fab>
            )}
          </Box>
          <Typography sx={{ display: "inline-block" }}>
            {props.comment.comment}
          </Typography>
        </Container>
        {props.reply && (
          <Container
            sx={{
              margin: "1rem",
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 1,
              p: 1,
              width: "100%",
              marginTop: "1rem",
            }}
          >
            <Typography
              sx={{
                display: "inline-block",
                fontWeight: "fontWeightBold",
                marginRight: "0.5rem",
              }}
            >
              Owner Reply:
            </Typography>
            <Typography sx={{ display: "inline-block" }}>
              {props.reply.comment}
            </Typography>
          </Container>
        )}
      </Stack>
    </Grid>
  );
};

export default ClientReview;

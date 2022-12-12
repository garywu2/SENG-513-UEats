import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import assets from "../../assets";
import CustomModal from "../common/CustomModal";
import { mainColors } from "../../configs/colorConfigs";

const styles = {
  Container: {
    backgroundSize: "cover",
    backgroundImage: `url(${assets.images.orange_background})`,
    color: "white",
  },
  LearnMoreButton: {
    backgroundColor: mainColors.lightGray,
    color: mainColors.darkGray,
    "&:hover": {
      backgroundColor: mainColors.darkGray,
      color: mainColors.lightOrange,
    },
  },
};

type AnnouncementProps = {
  title: string;
  text: string;
};

const Announcement = ({ title, text }: AnnouncementProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Card style={styles.Container}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={styles.LearnMoreButton} size="large" onClick={handleOpen}>
          Learn More
        </Button>
      </CardActions>
      <CustomModal
        title="Want a discount?"
        text={"Give us an A and it's yours ;)"}
        open={open}
        handleClose={handleClose}
      />
    </Card>
  );
};

export default Announcement;

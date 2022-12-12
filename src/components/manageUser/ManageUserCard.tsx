import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { mainColors } from "../../configs/colorConfigs";

const ManageUserCard = (props: any) => {
  return (
    <Grid sx={{ margin: "1rem" }}>
      <Card sx={{ minWidth: "250px", color: mainColors.darkGray }}>
        <CardHeader title={props.name}></CardHeader>
        <CardContent>
          <Typography>Phone Num: {props.phoneNum}</Typography>
          <Typography>Email: {props.email}</Typography>
          <Typography color={props.approvalStatus ? "green" : "red"}>
            Approval Status
          </Typography>
        </CardContent>
        <CardActions>
          {!props.approvalStatus && (
            <Button
              size='small'
              startIcon={<HowToRegIcon />}
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
                marginY: "1rem",
                marginX: "0.5rem",
              }}
              onClick={() => {
                props.handleApprove(props._id);
              }}
            >
              Approve
            </Button>
          )}
          <Button
            size='small'
            startIcon={<PersonRemoveIcon />}
            sx={{
              backgroundColor: mainColors.darkGray,
              color: mainColors.lightOrange,
              marginY: "1rem",
              marginX: "0.5rem",
            }}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default ManageUserCard;

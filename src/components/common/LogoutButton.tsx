import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemButton, ListItemIcon } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";

const LogoutButton = (props: any) => {
  return (
    <ListItemButton
      onClick={props.handleClick}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        paddingY: "12px",
        paddingX: "24px",
      }}
    >
      <ListItemIcon
        sx={{
          color: colorConfigs.sidebar.color,
        }}
      >
        {<LogoutIcon />}
      </ListItemIcon>
      Log Out
    </ListItemButton>
  );
};
export default LogoutButton;

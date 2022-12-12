import LogoutIcon from "@mui/icons-material/Logout";
import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";

const LogoutButton = (props: any) => {
  const isMobile = useMediaQuery("(max-width:800px)");

  return (
    <ListItemButton
      onClick={props.handleClick}
      sx={{
        "&: hover": {
          backgroundColor: colorConfigs.sidebar.hoverBg,
        },
        width: "100%",
      }}
    >
      {!isMobile && (
        <ListItemIcon
          sx={{
            color: colorConfigs.sidebar.color,
            paddingY: "10px",
            paddingX: "10px",
          }}
        >
          {<LogoutIcon />}
        </ListItemIcon>
      )}
      {isMobile ? <LogoutIcon sx={{ marginLeft: "10px" }} /> : "Logout"}
    </ListItemButton>
  );
};
export default LogoutButton;

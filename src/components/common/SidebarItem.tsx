import { ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import { RootState } from "../../redux/store";
import { RouteType } from "../../routes/config";

type Props = {
  item: RouteType;
};

const SidebarItem = ({ item }: Props) => {
  const { appState } = useSelector((state: RootState) => state.appState);
  const isMobile = useMediaQuery("(max-width:800px)");

  return item.sidebarProps && item.path ? (
    <ListItemButton
      component={Link}
      to={item.path}
      sx={[
        appState !== item.state
          ? {
              "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg,
                color: colorConfigs.sidebar.color,
              },
            }
          : appState === item.state && {
              "&: hover": {
                backgroundColor: colorConfigs.sidebar.activeBg,
                color: colorConfigs.sidebar.activeColor,
              },
            },
        {
          width: "100%",
          backgroundColor:
            appState === item.state ? colorConfigs.sidebar.activeBg : "unset",
          color:
            appState === item.state
              ? colorConfigs.sidebar.activeColor
              : colorConfigs.sidebar.color,
        },
      ]}
    >
      <ListItemIcon
        sx={{
          paddingY: "10px",
          paddingX: "10px",
          color:
            appState === item.state
              ? colorConfigs.sidebar.activeColor
              : colorConfigs.sidebar.color,
        }}
      >
        {item.sidebarProps.icon && item.sidebarProps.icon}
      </ListItemIcon>
      {!isMobile && item.sidebarProps.displayText}
    </ListItemButton>
  ) : null;
};

export default SidebarItem;

import {
  Avatar,
  Button,
  Drawer,
  List,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isMobile
          ? sizeConfigs.mobileSideBar.width
          : sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isMobile
            ? sizeConfigs.mobileSideBar.width
            : sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
          overflow: "hidden",
        },
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        disablePadding
      >
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar
              src={assets.images.logo}
              sx={{ width: isMobile ? 70 : 100, height: isMobile ? 70 : 100 }}
            />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
        )}
        {!!user && (
          <Button
            sx={{
              backgroundColor: colorConfigs.sidebar.bg,
              color: colorConfigs.sidebar.color,
              "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg,
              },
              margin: "10px",
            }}
            variant="contained"
            onClick={() => {
              signOut(auth);
            }}
          >
            {isMobile ? <LogoutIcon /> : "Logout"}
          </Button>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

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
import { useDispatch, useSelector } from "react-redux";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import { resetState } from "../../redux/features/appStateSlice";
import appRoutes from "../../routes/appRoutes";
import LogoutButton from "./LogoutButton";
import SidebarItem from "./SidebarItem";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  const isMobile = useMediaQuery("(max-width:800px)");
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const dispatch = useDispatch();

  const handleSignout = async () => {
    await signOut(auth);
    dispatch(resetState());
  };

  const checkUserBasedDisplay = (displayText: string) => {
    const lcText = displayText.toLowerCase();
    if (userInfo.type && userInfo.type === "client") {
      if (lcText === "store" || lcText === "manage users") {
        return false;
      }
    } else if (userInfo.type && userInfo.type === "vendor") {
      if (
        lcText === "restaurants" ||
        lcText === "shopping cart" ||
        lcText === "manage users"
      ) {
        return false;
      }
    } else if (userInfo.type && userInfo.type === "admin") {
      if (lcText === "shopping cart" || lcText === "orders") {
        return false;
      }
    }
    return true;
  };
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
          route.sidebarProps ? (
            checkUserBasedDisplay(route.sidebarProps.displayText) ? (
              <SidebarItem item={route} key={index} />
            ) : null
          ) : null
        )}
        {!!user && <LogoutButton handleClick={handleSignout} />}
      </List>
    </Drawer>
  );
};

export default Sidebar;

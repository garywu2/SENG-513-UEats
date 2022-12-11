import { Avatar, Button, Drawer, List, Stack, Toolbar } from "@mui/material";
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
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  const dispatch = useDispatch();

  const checkUserBasedDisplay = (displayText: string) => {
    const lcText = displayText.toLowerCase();
    if (userInfo.type && userInfo.type === "client") {
      if (lcText === "store") {
        return false;
      }
    } else if (userInfo.type && userInfo.type === "vendor") {
      if (lcText === "restaurants" || lcText === "shopping cart") {
        return false;
      }
    } else if (userInfo.type && userInfo.type === "admin") {
      if (lcText === "shopping cart") {
        return false;
      }
    }
    return true;
  };
  return (
    <Drawer
      variant='permanent'
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction='row' justifyContent='center'>
            <Avatar src={assets.images.logo} sx={{ width: 100, height: 100 }} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            checkUserBasedDisplay(route.sidebarProps.displayText) ? (
              <SidebarItem item={route} key={index} />
            ) : null
          ) : null
        )}
        {!!user && (
          <Button
            variant='contained'
            onClick={async () => {
              await signOut(auth);
              dispatch(resetState());
            }}
          >
            Logout
          </Button>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;

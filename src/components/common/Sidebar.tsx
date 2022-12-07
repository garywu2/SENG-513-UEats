import { Avatar, Button, Drawer, List, Stack, Toolbar } from "@mui/material";
import { signOut } from "firebase/auth";
import { useContext } from "react";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { user } = useContext(UserContext);
  const { auth } = useContext(FirebaseContext);
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
          route.sidebarProps ? <SidebarItem item={route} key={index} /> : null
        )}
        {!!user && (
          <Button
            variant='contained'
            onClick={() => {
              signOut(auth);
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

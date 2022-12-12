import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Collapse,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";

type Props = {
  user?: string;
};

const MainLayout = (props: Props) => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width:800px)");
  return (
    <Box sx={{ display: "flex" }}>
      {!!props.user && (
        <Collapse in={open || isMobile} orientation="horizontal">
          <Box
            component="nav"
            sx={{
              width: isMobile
                ? sizeConfigs.mobileSideBar.width
                : sizeConfigs.sidebar.width,
              flexShrink: 0,
            }}
          >
            <Sidebar />
          </Box>
        </Collapse>
      )}

      {!isMobile && (
        <div style={{ zIndex: "10000", height: "50px" }}>
          <IconButton
            area-label="collapse"
            onClick={() => setOpen((state) => !state)}
          >
            <MenuIcon />
          </IconButton>
        </div>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;

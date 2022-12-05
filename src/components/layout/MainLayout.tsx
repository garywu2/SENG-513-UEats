import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, IconButton, Collapse, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <Collapse in={open} orientation="horizontal">
        <Box
          component="nav"
          sx={{
            width: sizeConfigs.sidebar.width,
            flexShrink: 0,
          }}
        >
          <Sidebar />
        </Box>
      </Collapse>
      <div style={{ zIndex: "10000" }}>
        <IconButton
          area-label="collapse"
          onClick={() => setOpen((state) => !open)}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
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

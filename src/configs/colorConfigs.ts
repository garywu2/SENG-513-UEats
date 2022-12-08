import { colors } from "@mui/material";

export const mainColors = {
  darkGray: "#43423E",
  lightGray: colors.grey["100"],
  lightOrange: "#FDC566",
};

const colorConfigs = {
  sidebar: {
    bg: "white",
    color: mainColors.darkGray,
    activeColor: "white",
    hoverBg: mainColors.lightGray,
    activeBg: mainColors.lightOrange,
  },
  mainBg: mainColors.lightGray,
};
export default colorConfigs;

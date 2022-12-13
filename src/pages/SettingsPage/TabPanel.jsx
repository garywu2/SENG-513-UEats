
import { Box, Typography } from "@mui/material";
import { mainColors } from "../../configs/colorConfigs";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  return (
    <div 
      hidden={value !== index}
      role="tabpanel"
    >
        <Box component='form'
        display={"flex"}
        flexDirection='column'
        sx={{
          "& .MuiTextField-root": { m: 1 },
          "& label.Mui-focused": {
            color: mainColors.darkGray,
          },

          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: mainColors.lightOrange,
            },
          },
          borderBottom: 1, 
          borderColor: 'divider',
          maxWidth: "600px",
          margin: "auto",
        }}
        noValidate
        autoComplete='off'>
          <Typography>{children}</Typography>
        </Box>
    </div>
  );
};

export default TabPanel;

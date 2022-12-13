import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../../context/user";
import { Box, Button, TextField, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { mainColors } from "../../configs/colorConfigs";
import { updateEmail } from "firebase/auth";
import { auth } from "../../lib/firebase"
import {
  setUserInfoState,
  setRestaurantsState,
} from "../../redux/features/appStateSlice";
import Tb from "./TabPanel";

const SettingPage = () => {
  const { user } = useContext(UserContext);
  const [tabValue, setTabValue] = useState(0);
  let userInfo = useSelector((state: any) => state.appState.userInfo);
  let settingFields = {
    name: userInfo.name,
    email: userInfo.email,
    username: userInfo.username,
    phoneNumber: userInfo.phoneNum,
  };

  let resturantFields = {
    name: "",
    description: "",
    bankAccountNum: "",
    pickupLocation: ""
  };

  const [updateState, setupdateState] = useState(settingFields);
  const [updateStateRes, setupdateStateRes] = useState(resturantFields);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setupdateState({ ...updateState, [name]: value });
  };
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    
  };
  const handleResChange = (e: any) => {
    const { name, value } = e.target;
    setupdateStateRes({ ...updateStateRes, [name]: value });
  };

  useEffect(() => {
    if(userInfo._id && userInfo.type === "vendor" && userInfo.store) {
      axios.get(`http://localhost:5000/stores/${userInfo.store}`).then((result: any) => {
        setupdateStateRes(result.data);
      }).catch((e: any) => {
        setError(e.message);
      });
    }
  }, [userInfo._id, userInfo.store]);

  const updateUserInfo = (e: any) => {
    if (
      updateState.name &&
      updateState.email &&
      updateState.phoneNumber &&
      updateState.username &&
      user
    ) {
      if(auth.currentUser != null) {
      updateEmail(auth.currentUser, updateState.email).then(() => {
        axios.put("http://localhost:5000/users", {
          _id: userInfo._id,
          name: updateState.name,
          email: updateState.email,
          phoneNum: updateState.phoneNumber,
          username: updateState.username,
      }).then((servResult: any) => {
        console.log(servResult);
        setError("");
        dispatch(setUserInfoState(servResult.data));
      })
      .catch((e: any) => {
        setError(e.response.data.msg);
      });
      }).catch((e: any) => {
        setError(e.message);
      });
    }
    } else {
      setError("All required fields must have a value");
    }
  };

  const updateResturantInfo = (e: any) => {
    if (
      updateStateRes.name &&
      updateStateRes.description &&
      updateStateRes.pickupLocation &&
      updateStateRes.bankAccountNum &&
      user
    ) {
      if(auth.currentUser != null) {
        axios.put("http://localhost:5000/stores", {
          _id: userInfo.store,
          name: updateStateRes.name,
          bankAccountNum: updateStateRes.bankAccountNum,
          description: updateStateRes.description,
          pickupLocation: updateStateRes.pickupLocation,
      }).then((servResult: any) => {
        console.log(servResult);
        setError("");
        dispatch(setRestaurantsState(servResult.data));
      })
      .catch((e: any) => {
        setError(e.message);
      });
    }
    } else {
      setError("All required fields must have a value");
    }
  };

  return (
    <div>
    <h1 style={{display:'flex', textAlign:'center', justifyContent:'center'}}>Current Account Information</h1>
    <p style={{display:'flex', textAlign:'center', justifyContent:'center'}}>Click Update Button to update values to values currently set</p>
    {userInfo.type !== "vendor" || !userInfo.store ? (
        <Box
        component='form'
        display={"flex"}
        justifyContent={'center'}
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
          maxWidth: "600px",
          margin: "auto",
        }}
        noValidate
        autoComplete='off'
      >
          <TextField
            required
            id='signup-name'
            label='Name'
            name='name'
            fullWidth
            defaultValue={updateState.name}
            onChange={handleChange}

          />
          <TextField
            required
            type='email'
            id='signup-email'
            label='Email'
            name='email'
            fullWidth
            defaultValue={updateState.email}
            onChange={handleChange}
          />
          <TextField
            required
            id='signup-username'
            label='Username'
            name='username'
            fullWidth
            defaultValue={updateState.username}
            onChange={handleChange}
          />
          <TextField
            required
            id='signup-phone-number'
            label='Phone Number'
            type='tel'
            fullWidth
            name='phoneNumber'
            defaultValue={updateState.phoneNumber}
            onChange={handleChange}
          />
        {error && <Typography color='red'>{error}</Typography>}
        <Button
          size='large'
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginY: "1rem",
          }}
          onClick={updateUserInfo}
        >
          Update User Information
        </Button>
      </Box>
      ) : (
      <Box
        display={"flex"}
        flexDirection='column'
        justifyContent={'center'}
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
        }}>
        <Box
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
      >
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="ExTabs">
          <Tab label="Client" />
          <Tab label="Resturant" />
        </Tabs>
        </Box>
        <Tb value={tabValue} index={0}>
          <TextField
            required
            id='signup-name'
            label='Name'
            name='name'
            fullWidth
            defaultValue={updateState.name}
            onChange={handleChange}
          />
          <TextField
            required
            type='email'
            id='signup-email'
            label='Email'
            name='email'
            fullWidth
            defaultValue={updateState.email}
            onChange={handleChange}
          />
          <TextField
            required
            id='signup-username'
            label='Username'
            name='username'
            fullWidth
            defaultValue={updateState.username}
            onChange={handleChange}
          />
          <TextField
            required
            id='signup-phone-number'
            label='Phone Number'
            type='tel'
            fullWidth
            name='phoneNumber'
            defaultValue={updateState.phoneNumber}
            onChange={handleChange}
          />
        {error && <Typography color='red'>{error}</Typography>}
        <Button
          size='large'
          fullWidth
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginY: "1rem",
          }}
          onClick={updateUserInfo}
        >
          Update User Information
        </Button>
        </Tb>
        <Tb value={tabValue} index={1}>
          <TextField
            required
            id='setting-name'
            label='Name'
            name='name'
            fullWidth
            value={updateStateRes.name}
            onChange={handleResChange}
          />
          <TextField
            required
            id='setting-description'
            label='description'
            name='description'
            fullWidth
            value={updateStateRes.description}
            onChange={handleResChange}
          />
          <TextField
            required
            id='setting-bankAccountNum'
            label='Bankaccountnum'
            name='bankAccountNum'
            fullWidth
            value={updateStateRes.bankAccountNum}
            onChange={handleResChange}
          />
          <TextField
            required
            id='setting-pickupLocation'
            label='Pickup Location'
            fullWidth
            name='pickupLocation'
            value={updateStateRes.pickupLocation}
            onChange={handleResChange}
          />
        {error && <Typography color='red'>{error}</Typography>}
        <Button
          size='large'
          fullWidth
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginY: "1rem",
            justifyContent: "center",
            display: "flex",
            flexDirection: 'column'
          }}
          onClick={updateResturantInfo}
        >
          Update Store Information
        </Button>
      </Tb>
      </Box>
      )}
    </div>
  );
};

export default SettingPage;

import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserContext from "../../context/user";
import { Box, Button, TextField, Typography, Tabs } from "@mui/material";
import { mainColors } from "../../configs/colorConfigs";
import { useNavigate } from "react-router-dom";
import { updateEmail } from "firebase/auth";
import { auth } from "../../lib/firebase"


const SettingPage = () => {
  const { user } = useContext(UserContext);
  let userInfo = useSelector((state: any) => state.appState.userInfo);
  let settingFields = {
    name: userInfo.name,
    email: userInfo.email,
    username: userInfo.username,
    phoneNumber: userInfo.phoneNum,
  };
  const navigate = useNavigate();
  const [updateState, setupdateState] = useState(settingFields);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setupdateState({ ...updateState, [name]: value });
  };
  const [error, setError] = useState("");

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

  return (
    <div>
    {updateState.name !== "" ? (
    <div>
      <h1 style={{display:'flex', textAlign:'center', justifyContent:'center'}}>Current Account Information</h1>
      <p style={{display:'flex', textAlign:'center', justifyContent:'center'}}>Click Update Button to update values to values currently set</p>
        <Box
        component='form'
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
          maxWidth: "600px",
          margin: "auto",
        }}
        noValidate
        autoComplete='off'
      >
        <div>
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
        </div>
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
      </div>
      ) : (
        <span> Loading.... </span>
      )}
    </div>
  );
};

export default SettingPage;

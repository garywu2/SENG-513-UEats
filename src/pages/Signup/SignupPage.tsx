import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mainColors } from "../../configs/colorConfigs";
import FirebaseContext from "../../context/firebase";

const SignupPage = () => {
  const { auth } = useContext(FirebaseContext);
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    username: "",
    phoneNumber: "",
    type: "",
  };
  const [signupState, setSignupState] = useState(defaultValues);
  const [error, setError] = useState("");
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignupState({ ...signupState, [name]: value });
  };

  const navigate = useNavigate();

  const handleSumbit = (e: any) => {
    if (
      signupState.name &&
      signupState.email &&
      signupState.phoneNumber &&
      signupState.password &&
      signupState.username &&
      signupState.type
    ) {
      console.log(signupState);
      createUserWithEmailAndPassword(
        auth,
        signupState.email,
        signupState.password
      )
        .then((result: any) => {
          axios
            .post("http://localhost:5000/users", {
              name: signupState.name,
              email: signupState.email,
              phoneNum: signupState.phoneNumber,
              type: signupState.type,
              username: signupState.username,
            })
            .then((servResult: any) => {
              console.log(servResult);
              setError("");
              setSignupState(defaultValues);
              navigate("/dashboard");
            })
            .catch((e: any) => {
              setError(e.response.data.msg);
            });
        })
        .catch((e: any) => {
          setError(e.message);
        });
    } else {
      setError("One of the required fields is missing!");
    }
  };

  return (
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
          onChange={handleChange}
          fullWidth
        />
        <TextField
          required
          type='email'
          id='signup-email'
          label='Email'
          name='email'
          fullWidth
          value={signupState.email}
          onChange={handleChange}
        />
        <TextField
          required
          id='signup-username'
          label='Username'
          name='username'
          value={signupState.username}
          onChange={handleChange}
        />
        <TextField
          required
          id='signup-password'
          label='Password'
          type='password'
          name='password'
          value={signupState.password}
          onChange={handleChange}
        />

        <TextField
          required
          id='signup-phone-number'
          label='Phone Number'
          type='tel'
          value={signupState.phoneNumber}
          onChange={handleChange}
          name='phoneNumber'
        />
        <TextField
          required
          id='signup-type'
          label='User Type'
          name='type'
          select
          value={signupState.type}
          sx={{ minWidth: "15ch" }}
          onChange={handleChange}
        >
          <MenuItem value='vendor'>Vendor</MenuItem>
          <MenuItem value='client'>Client</MenuItem>
        </TextField>
      </div>
      {error && <Typography color='red'>{error}</Typography>}
      <Button
        size='large'
        sx={{
          backgroundColor: mainColors.darkGray,
          color: mainColors.lightOrange,
          marginY: "1rem",
        }}
        onClick={handleSumbit}
      >
        Create User
      </Button>
    </Box>
  );
};
export default SignupPage;

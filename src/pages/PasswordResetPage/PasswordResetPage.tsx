import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import { mainColors } from "../../configs/colorConfigs";
import { sendPasswordResetEmail } from "firebase/auth";
import FirebaseContext from "../../context/firebase";


const PasswordResetPage = () => {
  const { auth } = useContext(FirebaseContext);
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState("");
  const handleChange = (e: any) => {
    setUserEmail(e.target.value);
  };
  const navigate = useNavigate();

  const resetPassword = (e: any) => {
    sendPasswordResetEmail(auth, userEmail).then((e: any) => {
      setEmailSent("Email Sucessfully Sent!");
    }).catch((e: any) => {
      setError(e.message);
    });
  };

  const returnToLoginPage = () => {
    navigate("/");
  }

  return (
    <div>
      <h1 style={{display:'flex', textAlign:'center', justifyContent:'center'}}>Password Reset</h1>
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
              type='email'
              id='signup-email'
              label='Email'
              name='email'
              fullWidth
              defaultValue={userEmail}
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
            onClick={resetPassword}
          >
            Reset Email
          </Button>
          <Button
            size='large'
            sx={{
              backgroundColor: mainColors.darkGray,
              color: mainColors.lightOrange,
              marginY: "1rem",
            }}
            onClick={returnToLoginPage}
          >
            Return to login page
          </Button>
          {emailSent && <Typography color='green'>{emailSent}</Typography>}
        </Box>
    </div>
  );
};
export default PasswordResetPage;

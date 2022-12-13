// TODO display Sidebar only if user is logged in
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { LockReset } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { mainColors } from "../../configs/colorConfigs";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";

const HomePage = () => {
  const { auth } = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("One of the req. field is missing");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((e: any) => {
          console.log(e);
          setError("");
          return navigate("/dashboard");
        })
        .catch((e: any) => {
          console.log(e);
          setError(e.message);
        });
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handlePasswordReset = () => {
    navigate("/passwordreset");
  }

  return (
    <div>
      {!user ? (
        <div>
          <Box
            component='form'
            display={"flex"}
            flexDirection='column'
            justifyContent={"center"}
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
              maxWidth: "500px",
              margin: "auto",
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='outlined-error'
              label='email'
              error={!!error}
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              onChange={handlePasswordChange}
              error={!!error}
              id='outlined-error-helper-text'
              label='password'
              type='password'
              value={password}
            />

            <Button
              onClick={handleSignIn}
              size='large'
              startIcon={<PersonIcon />}
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
                marginY: "1rem",
              }}
            >
              Sign in
            </Button>

            <Button
              onClick={handleSignUp}
              size='large'
              startIcon={<PersonAddIcon />}
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
                marginY: "1rem",
              }}
            >
              Register
            </Button>
            <Button
              onClick={handlePasswordReset}
              size='large'
              startIcon={<LockReset />}
              sx={{
                backgroundColor: mainColors.darkGray,
                color: mainColors.lightOrange,
                marginY: "1rem",
              }}
            >
              Forgot Password
            </Button>
          </Box>
        </div>
      ) : (
        <Navigate to='/dashboard' />
      )}
    </div>
  );
};

export default HomePage;

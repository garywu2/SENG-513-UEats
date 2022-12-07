// TODO display Sidebar only if user is logged in
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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

  return (
    <div>
      {!user ? (
        <div>
          <Box
            component='form'
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete='off'
          >
            <div>
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
            </div>
          </Box>

          <Button
            variant='contained'
            onClick={() => {
              if (!email || !password) {
                setError("error");
              } else {
                setError("");
                signInWithEmailAndPassword(auth, email, password)
                  .then((e: any) => {
                    console.log(e);
                    return navigate("/dashboard");
                  })
                  .catch((e: any) => console.log(e));
              }
            }}
          >
            Sign in
          </Button>
        </div>
      ) : (
        <Navigate to='/dashboard' />
      )}
    </div>
  );
};

export default HomePage;

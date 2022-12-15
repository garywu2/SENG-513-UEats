import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { mainColors } from "../../configs/colorConfigs";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoState } from "../../redux/features/appStateSlice";

const CreateStoreForm = (props: any) => {
  const userInfo = useSelector((state: any) => state.appState.userInfo);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const defaultValues = {
    name: "",
    description: "",
    bankAccountNum: "",
    vendor: "",
    openTime: new Date(0),
    closeTime: new Date(0),
    pickupLocation: "",
    image: "",
  };
  const [signupState, setSignupState] = useState(defaultValues);

  const handleChangeInTimeField = (e: any, name: string) => {
    setSignupState({ ...signupState, [name]: new Date(e) });
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignupState({ ...signupState, [name]: value });
  };
  const handleImageChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
    setSignupState({ ...signupState, image: e.target.files[0].name });
  };

  const handleSumbit = (e: any) => {
    if (
      signupState.name &&
      signupState.description &&
      signupState.bankAccountNum &&
      signupState.openTime &&
      signupState.closeTime &&
      signupState.pickupLocation &&
      signupState.image
    ) {
      if (
        signupState.openTime.getSeconds() !== 0 ||
        signupState.openTime.getMinutes() !== 0 ||
        signupState.closeTime.getSeconds() !== 0 ||
        signupState.closeTime.getMinutes() !== 0
      ) {
        setError("Times must be set to the nearest hour");
        return;
      }
      if (signupState.openTime >= signupState.closeTime) {
        setError("Open time must be before close time");
        return;
      }
      setError("");

      axios
        .post(
          "http://localhost:5000/stores",
          {
            name: signupState.name,
            description: signupState.description,
            vendor: userInfo._id,
            bankAccountNum: signupState.bankAccountNum,
            availabilityTime: {
              startTime: signupState.openTime.getHours(),
              endTime: signupState.closeTime.getHours(),
            },
            pickupLocation: signupState.pickupLocation,
            image: selectedFile,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((result: any) => {
          dispatch(setUserInfoState(result.data));
          setError("");
          setSignupState(defaultValues);
        })
        .catch((e: any) => {
          setError(e.response.data.msg);
        });
    } else {
      setError("One of the required fields is missing!");
    }
  };

  return (
    <div>
      <Box
        component="form"
        display={"flex"}
        flexDirection="column"
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
        autoComplete="off"
      >
        <div>
          <Typography textAlign={"center"} variant="h6">
            Submit a request to create a store!
          </Typography>
          <TextField
            required
            id="signup-name"
            label="Store Name"
            name="name"
            onChange={handleChange}
            value={signupState.name}
            fullWidth
          />
          <TextField
            required
            id="signup-description"
            label="Description"
            name="description"
            fullWidth
            value={signupState.description}
            onChange={handleChange}
          />
          <TextField
            required
            id="signup-bankAccountNum"
            label="Bank Account Number"
            name="bankAccountNum"
            value={signupState.bankAccountNum}
            onChange={handleChange}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Open Time"
              value={signupState.openTime}
              onChange={(e) => handleChangeInTimeField(e, "openTime")}
              views={["hours"]}
              renderInput={(params) => <TextField {...params} />}
              minutesStep={60}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Close Time"
              value={signupState.closeTime}
              onChange={(e) => handleChangeInTimeField(e, "closeTime")}
              views={["hours"]}
              renderInput={(params) => <TextField {...params} />}
              minutesStep={60}
            />
          </LocalizationProvider>
          <TextField
            required
            id="signup-pickupLocation"
            label="Pickup Location"
            name="pickupLocation"
            value={signupState.pickupLocation}
            onChange={handleChange}
          />
          <TextField
            required
            id="signup-image"
            label="Store Image"
            name="image"
            value={signupState.image}
            InputProps={{
              endAdornment: (
                <Button variant="contained" component="label">
                  Upload
                  <input
                    hidden
                    onChange={handleImageChange}
                    accept="image/*"
                    type="file"
                  />
                </Button>
              ),
              readOnly: true,
            }}
            sx={{ input: { cursor: "auto" } }}
          />
        </div>
        {error && <Typography color="red">{error}</Typography>}
        <Button
          size="large"
          sx={{
            backgroundColor: mainColors.darkGray,
            color: mainColors.lightOrange,
            marginY: "1rem",
          }}
          onClick={handleSumbit}
        >
          Create Store
        </Button>
      </Box>
    </div>
  );
};
export default CreateStoreForm;

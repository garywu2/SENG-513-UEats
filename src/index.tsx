import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { auth } from "./lib/firebase";
import { store } from "./redux/store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseContext.Provider value={{ auth }}>
        <CssBaseline />
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </React.StrictMode>
);

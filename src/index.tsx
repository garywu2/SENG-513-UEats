import { CssBaseline } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { auth } from "./lib/firebase";
import { store } from "./redux/store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./redux/features/apiSlice";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApiProvider api={apiSlice}>
    <Provider store={store}>
      <FirebaseContext.Provider value={{ auth }}>
        <CssBaseline />
        <App />
      </FirebaseContext.Provider>
    </Provider>
  </ApiProvider>
);

import axios from "axios";
import { ReactNode, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/user";
import {
  setAppState,
  setUserInfoState,
} from "../../redux/features/appStateSlice";

type Props = {
  state?: string;
  children: ReactNode;
};

const PageWrapper = (props: Props) => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const userInfo = useSelector((state: any) => state.appState.userInfo);

  useEffect(() => {
    if (props.state) {
      dispatch(setAppState(props.state));
    }
    if (!userInfo._id) {
      const data = JSON.parse(localStorage.getItem("firebaseAuthUser")!);
      if (data) {
        axios
          .get(`http://localhost:5000/users/email/${data.email}`)
          .then((result: any) => {
            console.log(result);
            dispatch(setUserInfoState(result.data));
          });
      }
    }
  }, [dispatch, props, userInfo]);

  return (
    <>
      {!!user || props.state === "home" ? props.children : <Navigate to='/' />}{" "}
    </>
  );
};

export default PageWrapper;

import { ReactNode, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/user";
import { setAppState } from "../../redux/features/appStateSlice";

type Props = {
  state?: string;
  children: ReactNode;
};

const PageWrapper = (props: Props) => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.state) {
      dispatch(setAppState(props.state));
    }
  }, [dispatch, props]);

  return (
    <>
      {!!user || props.state === "home" ? props.children : <Navigate to='/' />}{" "}
    </>
  );
};

export default PageWrapper;

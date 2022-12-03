import { ReactNode } from "react";
import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./appRoutes";
import { RouteType } from "./config";

const generateRoute = (routes: RouteType[]): ReactNode => {
  return routes.map((route, index) => (
    <Route
      index
      path={route.path}
      element={<PageWrapper state={route.state}>{route.element}</PageWrapper>}
      key={index}
    />
  ));
};

export const routes: ReactNode = generateRoute(appRoutes);

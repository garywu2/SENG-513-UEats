import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PageWrapper from "./components/layout/PageWrapper";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth";
import RestaurantDetailPage from "./pages/RestaurantDetailsPage/RestaurantDetailPage";
import { routes } from "./routes";

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout user={user} />}>
            {routes}
            <Route
              path={"restaurant/:restaurantID"}
              element={
                <PageWrapper state={"restaurantDetailPage"}>
                  {<RestaurantDetailPage />}
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

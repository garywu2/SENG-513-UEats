import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import UserContext from "./context/user";
import useAuthListener from "./hooks/use-auth";
import { routes } from "./routes";

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout user={user} />}>
            {routes}
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartPage from "../pages/CartPage/CartPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import RestaurantsPage from "../pages/RestaurantsPage/RestaurantsPage";
import SettingPage from "../pages/Settings/SettingPage";
import { RouteType } from "./config";

// TODO include/exclude certain options based on the user type (admin shouldn't see Orders and Shopping Cart in the Sidebar)

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/dashboard",
    element: <Dashboard name='User' />, // TODO grab username from db
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    path: "/restaurants",
    element: <RestaurantsPage />,
    state: "restaurants",
    sidebarProps: {
      displayText: "Restaurants",
      icon: <RestaurantIcon />,
    },
  },
  {
    path: "/orders",
    element: <OrderPage />,
    state: "orders",
    sidebarProps: {
      displayText: "Orders",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/cart",
    element: <CartPage />,
    state: "cart",
    sidebarProps: {
      displayText: "Shopping Cart",
      icon: <ShoppingCartIcon />,
    },
  },
  {
    path: "/settings",
    element: <SettingPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings Page",
      icon: <SettingsIcon />,
    },
  },
];

export default appRoutes;

import HomePage from "../pages/HomePage/HomePage";
import { RouteType } from "./config";
import OrderPage from "../pages/OrderPage/OrderPage";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CartPage from "../pages/CartPage/CartPage";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingPage from "../pages/Settings/SettingPage";
import SettingsIcon from "@mui/icons-material/Settings";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import RestaurantsPage from "../pages/RestaurantsPage/RestaurantsPage";

// TODO include/exclude certain options based on the user type (admin shouldn't see Orders and Shopping Cart in the Sidebar)

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    index: false,
    path: "/dashboard",
    element: <Dashboard name="User" />, // TODO grab username from db
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
  },
  {
    index: false,
    path: "/restaurants",
    element: <RestaurantsPage />,
    state: "restaurants",
    sidebarProps: {
      displayText: "Restaurants",
      icon: <RestaurantIcon />,
    },
  },
  {
    index: false,
    path: "/orders",
    element: <OrderPage />,
    state: "orders",
    sidebarProps: {
      displayText: "Orders",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    index: false,
    path: "/cart",
    element: <CartPage />,
    state: "cart",
    sidebarProps: {
      displayText: "Shopping Cart",
      icon: <ShoppingCartIcon />,
    },
  },
  {
    index: false,
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

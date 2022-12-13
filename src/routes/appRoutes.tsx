import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import CartPage from "../pages/CartPage/CartPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import HomePage from "../pages/HomePage/HomePage";
import ManageUsersPage from "../pages/ManageUsersPage/ManageUsersPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import RestaurantsPage from "../pages/RestaurantsPage/RestaurantsPage";
import SettingPage from "../pages/SettingsPage/SettingPage";
import SignupPage from "../pages/Signup/SignupPage";
import StorePage from "../pages/StorePage/StorePage";
import PasswordResetPage from "../pages/PasswordResetPage/PasswordResetPage";
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
    path: "/manage-users",
    element: <ManageUsersPage />,
    state: "manageUsers",
    sidebarProps: {
      displayText: "Manage Users",
      icon: <ManageAccountsIcon />,
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
    path: "/store",
    element: <StorePage />,
    state: "store",
    sidebarProps: {
      displayText: "Store",
      icon: <StoreMallDirectoryIcon />,
    },
  },
  {
    path: "/settings",
    element: <SettingPage />,
    state: "settings",
    sidebarProps: {
      displayText: "Settings",
      icon: <SettingsIcon />,
    },
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    state: "payment",
  },
  {
    path: "/signup",
    element: <SignupPage />,
    state: "signup",
  },
  {
    path: "/passwordreset",
    element: <PasswordResetPage />,
    state: "passwordreset"
  }
];

export default appRoutes;

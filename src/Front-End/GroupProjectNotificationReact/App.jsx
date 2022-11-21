import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Notification from "./components/Notification";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|notification)">
          <Notification {...notificationData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-6@2x.png",
    spanText: "Dashboard",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-6@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-6@2x.png",
    spanText: "Favorite",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/order-discussion-12@2x.png",
    spanText: "Message",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-6@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-9@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-12@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenuData = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-25@2x.png",
    spanText3: "Upgrade",
    vector: "/img/vector-6@2x.png",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    dashboard3Props: dashboard3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
};

const icon1Data = {
    src: "/img/bill-6@2x.png",
    className: "",
};

const x0131Data = {
    spanText1: "Order #1",
    spanText2: "Order Accepted",
    spanText4: "by restaurant.",
    iconProps: icon1Data,
};

const icon2Data = {
    src: "/img/coupon-2@2x.png",
    className: "icon-1",
};

const x0132Data = {
    spanText1: "Offer",
    spanText2: "Get voucher up to 20%",
    spanText4: "by restaurant. Get Now!",
    className: "items-item",
    iconProps: icon2Data,
};

const icon3Data = {
    src: "/img/notification-6@2x.png",
    className: "icon-2",
};

const icon4Data = {
    src: "/img/bill-7@2x.png",
    className: "icon-3",
};

const x0133Data = {
    spanText1: "Order #1",
    spanText2: "Order Accepted",
    spanText4: "by restaurant.",
    className: "items-item",
    iconProps: icon4Data,
};

const icon5Data = {
    src: "/img/bill-8@2x.png",
    className: "",
};

const x0134Data = {
    spanText1: "Order #1",
    spanText2: "Order Accepted",
    spanText4: "by restaurant.",
    iconProps: icon5Data,
};

const icon6Data = {
    src: "/img/coupon-3@2x.png",
    className: "icon-1",
};

const x0135Data = {
    spanText1: "Offer",
    spanText2: "Get voucher up to 20%",
    spanText4: "by restaurant. Get Now!",
    className: "x02",
    iconProps: icon6Data,
};

const notificationData = {
    spanText1: "Notification",
    orderDiscussion: "/img/order-discussion-11@2x.png",
    overlapGroup: "/img/notification-7@2x.png",
    setting: "/img/setting-11@2x.png",
    spanText2: "Activity",
    spanText3: "Notifications",
    spanText4: "Recently",
    chevronDown: "/img/chevron-down-10@2x.png",
    dots: "/img/dots-9@2x.png",
    spanText5: "Today",
    spanText6: "Update",
    spanText7: "Weekly maintenance schedule",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    spanText9: "Monday, June 31 2020",
    spanText10: "Yesterday",
    sideMenuProps: sideMenuData,
    x0131Props: x0131Data,
    x0132Props: x0132Data,
    iconProps: icon3Data,
    x0133Props: x0133Data,
    x0134Props: x0134Data,
    x0135Props: x0135Data,
};


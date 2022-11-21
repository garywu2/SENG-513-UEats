import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|settings-1)">
          <Settings {...settingsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-8@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-8@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-8@2x.png",
    spanText: "Favorite",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/order-discussion-16@2x.png",
    spanText: "Message",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-8@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-11@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-16@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenuData = {
    dashboard3Props: dashboard3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
};

const x0151Data = {
    icon: "/img/icon-1@2x.png",
    spanText1: "Account",
};

const x0152Data = {
    icon: "/img/icon-2@2x.png",
    spanText1: "Notification",
    className: "items-item",
};

const x0153Data = {
    icon: "/img/icon-3@2x.png",
    spanText1: "Security",
    className: "items-item",
};

const x0154Data = {
    icon: "/img/icon-4@2x.png",
    spanText1: "Payment",
    className: "items-item",
};

const x0155Data = {
    icon: "/img/icon-5@2x.png",
    spanText1: "Help",
    className: "items-item",
};

const x0156Data = {
    icon: "/img/icon-6@2x.png",
    spanText1: "Privacy Policy",
    className: "items-item",
};

const itemsData = {
    x0151Props: x0151Data,
    x0152Props: x0152Data,
    x0153Props: x0153Data,
    x0154Props: x0154Data,
    x0155Props: x0155Data,
    x0156Props: x0156Data,
};

const iD1Data = {
    spanText1: "Username",
    spanText2: "Jordan Nico",
};

const iD2Data = {
    spanText1: "Phone",
    spanText2: "+123456789",
    className: "phone",
};

const iD3Data = {
    spanText1: "Email",
    spanText2: "ordanico@mail.com",
    className: "email-1",
};

const location1Data = {
    src: "/img/location@1x.png",
};

const location2Data = {
    src: "/img/coordinate-1@2x.png",
    className: "current-location",
};

const settingsData = {
    spanText1: "Settings",
    orderDiscussion: "/img/order-discussion-15@2x.png",
    overlapGroup: "/img/notification-9@2x.png",
    setting: "/img/setting-15@2x.png",
    spanText2: "Account",
    spanText3: "Photo Profile",
    spanText4: "Change photo",
    spanText5: "Remove",
    spanText6: "Password",
    spanText7: "••••••••",
    spanText8: "Your Locatiom",
    form: "/img/form-1@2x.png",
    sideMenuProps: sideMenuData,
    itemsProps: itemsData,
    iD1Props: iD1Data,
    iD2Props: iD2Data,
    iD3Props: iD3Data,
    location1Props: location1Data,
    location2Props: location2Data,
};


import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Settings2 from "./components/Settings2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|settings)">
          <Settings2 {...settings2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-13@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/bill-16@2x.png",
    spanText: "Menu",
};

const foodOrder2Data = {
    deliveryScooter: "/img/delivery-scooter-13@2x.png",
    spanText: "Food Order",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-13@2x.png",
    spanText: "Reviews",
    className: "list-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/setting-26@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenu2Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder4Props: foodOrder4Data,
};

const backgroundData = {
    src: "/img/border-45@2x.png",
};

const x0151Data = {
    icon: "/img/icon-7@2x.png",
    spanText1: "Retaurant Profile",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
};

const x0152Data = {
    icon: "/img/icon-8@2x.png",
    spanText1: "Notification",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    className: "items-1-item",
};

const x0153Data = {
    icon: "/img/icon-9@2x.png",
    spanText1: "Security",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    className: "items-1-item",
};

const x0154Data = {
    icon: "/img/icon-10@2x.png",
    spanText1: "Payment",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    className: "items-1-item",
};

const x0155Data = {
    icon: "/img/icon-11@2x.png",
    spanText1: "Help",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    className: "items-1-item",
};

const x0156Data = {
    icon: "/img/icon-12@2x.png",
    spanText1: "Privacy Policy",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    className: "items-1-item",
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
    spanText1: "Restaurant Name",
    spanText2: "Fast Food Restaurant",
};

const iD2Data = {
    spanText1: "Phone",
    spanText2: "+123456789",
    className: "phone",
};

const iD3Data = {
    spanText1: "Owner",
    spanText2: "Jordan Nico",
    className: "owner",
};

const iD4Data = {
    spanText1: "Restaurant Permit ID",
    spanText2: "321457",
    className: "id",
};

const location1Data = {
    src: "/img/location@1x.png",
};

const location2Data = {
    src: "/img/coordinate-2@2x.png",
    className: "current-location",
};

const detailsData = {
    spanText1: "Address Details",
    spanText2: <React.Fragment>Franklin Avenue Street <br />New York, ABC 5562<br />United State</React.Fragment>,
};

const iD5Data = {
    spanText1: "Email",
    spanText2: "ordanico@mail.com",
    className: "email",
};

const saveSettingData = {
    children: "Save Setting",
};

const on1Data = {
    bxBxRadioCircleMarked: "/img/bx-bx-radio-circle-marked-1@2x.png",
    spanText: "On",
};

const on2Data = {
    bxBxRadioCircleMarked: "/img/bx-bx-radio-circle-1@2x.png",
    spanText: "Off",
};

const settings2Data = {
    spanText1: "Settings",
    orderDiscussion: "/img/order-discussion-21@2x.png",
    overlapGroup: "/img/notification-14@2x.png",
    setting: "/img/setting-25@2x.png",
    spanText2: "Restaurant Profile",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText4: "Restaurant Logo",
    spanText5: "Change photo",
    spanText6: "Remove",
    spanText7: "Company Permit Document",
    spanText8: <React.Fragment>Drop File<br />Here</React.Fragment>,
    spanText9: "Upload",
    spanText10: "Location",
    form: "/img/form-2@2x.png",
    spanText11: "Password",
    spanText12: "••••••••",
    spanText13: "Preference",
    spanText14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText15: "Languange",
    united: "/img/united-1@2x.png",
    spanText16: "English (US)",
    chevronDown: "/img/chevron-down-21@2x.png",
    spanText17: "Dark Mode",
    spanText18: "Notification",
    spanText19: "Face ID Login",
    sideMenu2Props: sideMenu2Data,
    backgroundProps: backgroundData,
    itemsProps: itemsData,
    iD1Props: iD1Data,
    iD2Props: iD2Data,
    iD3Props: iD3Data,
    iD4Props: iD4Data,
    location1Props: location1Data,
    location2Props: location2Data,
    iD4Props2: detailsData,
    iD5Props: iD5Data,
    saveSettingProps: saveSettingData,
    on1Props: on1Data,
    on2Props: on2Data,
};


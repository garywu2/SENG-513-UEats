import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Orders from "./components/Orders";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|orders-1)">
          <Orders {...ordersData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-11@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/bill-14@2x.png",
    spanText: "Menu",
};

const foodOrder2Data = {
    deliveryScooter: "/img/delivery-scooter-11@2x.png",
    spanText: "Food Order",
    className: "list-1-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-11@2x.png",
    spanText: "Reviews",
    className: "list-1-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/setting-21@2x.png",
    spanText: "Setting",
    className: "list-1-item",
};

const sideMenu2Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder4Props: foodOrder4Data,
};

const user1Data = {
    spanText1: "Order #1",
};

const user2Data = {
    spanText1: "Order #2",
    className: "user",
};

const user3Data = {
    spanText1: "Order #3",
    className: "user",
};

const user4Data = {
    spanText1: "Order #4",
    className: "user",
};

const user5Data = {
    spanText1: "Order #5",
    className: "user",
};

const user6Data = {
    spanText1: "Order #1",
};

const user7Data = {
    spanText1: "Order #1",
    className: "user",
};

const user22Data = {
    spanText1: "Ruby Roben",
};

const ordersData = {
    spanText1: "Orders",
    spanText2: "Order in",
    spanText3: "Order in",
    spanText4: "Prepared",
    spanText5: "Delivered",
    overlapGroup: "/img/border-30@2x.png",
    spanText6: "$",
    spanText7: "202.00",
    dropdown1: "/img/dropdown-5@2x.png",
    overlapGroup1: "/img/border-31@2x.png",
    spanText8: "$",
    spanText9: "202.00",
    dropdown2: "/img/dropdown-6@2x.png",
    overlapGroup2: "/img/border-32@2x.png",
    spanText10: "$",
    spanText11: "202.00",
    dropdown3: "/img/dropdown-7@2x.png",
    overlapGroup3: "/img/border-33@2x.png",
    spanText12: "$",
    spanText13: "202.00",
    dropdown4: "/img/dropdown-8@2x.png",
    overlapGroup4: "/img/border-34@2x.png",
    spanText14: "$",
    spanText15: "202.00",
    dropdown5: "/img/dropdown-9@2x.png",
    overlapGroup5: "/img/border-35@2x.png",
    spanText16: "$",
    spanText17: "202.00",
    dropdown6: "/img/dropdown-10@2x.png",
    orderDiscussion: "/img/order-discussion-19@2x.png",
    overlapGroup6: "/img/notification-12@2x.png",
    setting: "/img/setting-22@2x.png",
    spanText18: "Order Details",
    maskGroup1: "/img/mask-group-34@2x.png",
    spanText19: "+",
    spanText20: "$",
    spanText21: "5.59",
    maskGroup2: "/img/mask-group-33@2x.png",
    spanText22: "+",
    spanText23: "$",
    spanText24: "5.59",
    line1: "/img/line-50@2x.png",
    line2: "/img/line-51@2x.png",
    line3: "/img/line-52@2x.png",
    spanText25: "Total",
    spanText26: "$",
    spanText27: "12.59",
    spanText28: "Estimation Time",
    spanText29: "10 Min",
    spanText30: "Distance",
    spanText31: "2.5 Km",
    spanText32: "Payment",
    spanText33: "E-Wallet",
    spanText34: "Payment Status",
    spanText35: "Completed",
    overlapGroup7: "/img/border-36@2x.png",
    spanText36: "Reject Order",
    spanText37: "Accept Order",
    sideMenu2Props: sideMenu2Data,
    user1Props: user1Data,
    user2Props: user2Data,
    user3Props: user3Data,
    user4Props: user4Data,
    user5Props: user5Data,
    user6Props: user6Data,
    user7Props: user7Data,
    user2Props2: user22Data,
};


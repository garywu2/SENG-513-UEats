import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Orders2 from "./components/Orders2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|orders)">
          <Orders2 {...orders2Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-15@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-15@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-15@2x.png",
    spanText: "Feedback",
    className: "list-1-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/setting-29@2x.png",
    spanText: "Setting",
    className: "list-1-item",
};

const sideMenu3Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
};

const user21Data = {
    spanText1: "Ruby Roben",
};

const user1Data = {
    spanText1: "Order #1",
    className: "",
};

const user22Data = {
    spanText1: "Ruby Roben",
    className: "user-1",
};

const x01101Data = {
    userProps: user1Data,
    user2Props: user22Data,
};

const user3Data = {
    spanText1: "Order #2",
    className: "order-number-1",
};

const user23Data = {
    spanText1: "Samantha W.",
    className: "user-1",
};

const user4Data = {
    spanText1: "Order #3",
    className: "order-number-1",
};

const user24Data = {
    spanText1: "Jack Jock",
    className: "user-1",
};

const x01102Data = {
    className: "x03",
    userProps: user4Data,
    user2Props: user24Data,
};

const user5Data = {
    spanText1: "Order #4",
    className: "order-number-1",
};

const user25Data = {
    spanText1: "Karen Hope",
    className: "user-1",
};

const orders2Data = {
    spanText1: "Orders",
    orderDiscussion: "/img/order-discussion-23@2x.png",
    overlapGroup: "/img/notification-16@2x.png",
    setting: "/img/setting-30@2x.png",
    spanText2: "Ongoing Order",
    dots: "/img/dots-23@2x.png",
    spanText3: "Order #1",
    spanText4: "June 1, 2020, 08:22 AM",
    line1: "/img/line-62@2x.png",
    spanText5: "Order Menu",
    line2: "/img/line-63@2x.png",
    spanText6: "Fast Food Resto",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    line3: "/img/line-64@2x.png",
    spanText8: "Payment Method",
    spanText9: "Cash",
    spanText10: "Total",
    spanText11: "$",
    spanText12: "202.00",
    spanText13: "Order History",
    x02: "/img/border-48@2x.png",
    dropdown1: "/img/dropdown-13@2x.png",
    x04: "/img/border-50@2x.png",
    dropdown2: "/img/dropdown-15@2x.png",
    sideMenu3Props: sideMenu3Data,
    user21Props: user21Data,
    x01101Props: x01101Data,
    user1Props: user3Data,
    user22Props: user23Data,
    x01102Props: x01102Data,
    user2Props: user5Data,
    user23Props: user25Data,
};


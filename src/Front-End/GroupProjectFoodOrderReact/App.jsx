import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FoodOrder2 from "./components/FoodOrder2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|food-order)">
          <FoodOrder2 {...foodOrder22Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-2@2x.png",
    spanText: "Dashboard",
};

const foodOrder3Data = {
    deliveryScooter: "/img/delivery-scooter-2@2x.png",
    spanText: "Food Order",
};

const foodOrder1Data = {
    deliveryScooter: "/img/review-2@2x.png",
    spanText: "Favorite",
};

const foodOrder2Data = {
    deliveryScooter: "/img/order-discussion-3@2x.png",
    spanText: "Message",
    className: "list-item-2",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-2@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-2@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-3@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const rate23Data = {
    className: "rate-1",
};

const foodOrder22Data = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-6@2x.png",
    spanText3: "Upgrade",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    spanText5: "Food Order",
    magnifier: "/img/magnifier-2@2x.png",
    spanText6: "Search order",
    spanText7: "Order #1",
    spanText8: "Nov 11, 2021 , 18:38 PM",
    line1: "/img/line-2@2x.png",
    spanText9: "Fast Food Resto",
    line2: "/img/line-3@2x.png",
    line3: "/img/line-4@2x.png",
    line4: "/img/line-5@2x.png",
    spanText10: "Order #4",
    spanText11: "Nov 11, 2021 , 18:38 PM",
    line5: "/img/line-14@2x.png",
    spanText12: "Fast Food Resto",
    line6: "/img/line-15@2x.png",
    line7: "/img/line-16@2x.png",
    line8: "/img/line-17@2x.png",
    spanText13: "Order #2",
    spanText14: "Nov 11, 2021 , 18:38 PM",
    line9: "/img/line-6@2x.png",
    spanText15: "Fast Food Resto",
    line10: "/img/line-7@2x.png",
    line11: "/img/line-8@2x.png",
    line12: "/img/line-9@2x.png",
    spanText16: "Delivering to you",
    spanText17: "Order #5",
    spanText18: "Nov 11, 2021 , 18:38 PM",
    line13: "/img/line-18@2x.png",
    spanText19: "Fast Food Resto",
    line14: "/img/line-19@2x.png",
    line15: "/img/line-20@2x.png",
    line16: "/img/line-21@2x.png",
    spanText20: "Order #3",
    spanText21: "Nov 11, 2021 , 18:38 PM",
    line17: "/img/line-10@2x.png",
    spanText22: "Fast Food Resto",
    line18: "/img/line-11@2x.png",
    line19: "/img/line-12@2x.png",
    line20: "/img/line-13@2x.png",
    spanText23: "Order being prepared",
    spanText24: "Order #6",
    spanText25: "Nov 11, 2021 , 18:38 PM",
    line21: "/img/line-22@2x.png",
    spanText26: "Fast Food Resto",
    line22: "/img/line-23@2x.png",
    line23: "/img/line-24@2x.png",
    line24: "/img/line-25@2x.png",
    spanText27: "Order Tracker",
    overlapGroup2: "/img/maps-1@1x.png",
    line25: "/img/line-27@2x.png",
    cursor: "/img/cursor-1@2x.png",
    spanText28: "Your Address",
    spanText29: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    line26: "/img/line-26@2x.png",
    spanText30: "Delivering to you",
    dashboard3Props: dashboard3Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
    rate2Props: rate23Data,
};


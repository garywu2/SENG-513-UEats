import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|dashboard-2)">
          <Dashboard {...dashboardData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-1@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-1@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-1@2x.png",
    spanText: "Favorite",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/order-discussion-1@2x.png",
    spanText: "Message",
    className: "list-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-1@2x.png",
    spanText: "Order History",
    className: "list-item-4",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-1@2x.png",
    spanText: "Bills",
    className: "list-item-5",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-1@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const title1Data = {
    spanText1: "Category",
};

const x011Data = {
    baked: "/img/baked-1@2x.png",
    spanText: "Bakery",
};

const x012Data = {
    baked: "/img/burger-1@2x.png",
    spanText: "Burger",
};

const x013Data = {
    baked: "/img/coffee-1@2x.png",
    spanText: "Beverage",
};

const x014Data = {
    baked: "/img/chicken-1@2x.png",
    spanText: "Chicken",
};

const x015Data = {
    baked: "/img/fast-1@2x.png",
    spanText: "Pizza",
};

const x016Data = {
    baked: "/img/fish-1@2x.png",
    spanText: "Seafood",
};

const title2Data = {
    spanText1: "Popular Dishes",
    className: "title-2",
};

const rate2Data = {
    className: "rate-1",
};

const rate3Data = {
    className: "rate-1",
};

const title3Data = {
    spanText1: "Recent Order",
    className: "title-1",
};

const dashboardData = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-1@2x.png",
    spanText3: "Upgrade",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    spanText5: "Hello, Samantha",
    magnifier: "/img/magnifier-1@2x.png",
    spanText6: "What do you want eat today...",
    banner: "/img/mask-group-2@2x.png",
    spanText7: <React.Fragment>Get Discount Voucher<br />Up To 20%</React.Fragment>,
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    border: "/img/border-1@2x.png",
    image1: "/img/image-1@2x.png",
    button1: "/img/button-1@2x.png",
    love1: "/img/love@1x.png",
    spanText9: "15% Off",
    x021: "/img/border-2@2x.png",
    image2: "/img/image-2@2x.png",
    spanText10: "15% Off",
    love2: "/img/love@1x.png",
    button2: "/img/button-2@2x.png",
    x031: "/img/border-3@2x.png",
    image3: "/img/image-3@2x.png",
    spanText11: "15% Off",
    love3: "/img/love@1x.png",
    button3: "/img/button-3@2x.png",
    x01: "/img/border-4@2x.png",
    image4: "/img/image-4@2x.png",
    spanText12: "Fish Burger",
    spanText13: "$",
    spanText14: "5.59",
    spanText15: "4.97 km",
    spanText16: "21 min",
    love4: "/img/love@1x.png",
    x022: "/img/border-5@2x.png",
    image5: "/img/image-5@2x.png",
    spanText17: "Japan Ramen",
    spanText18: "$",
    spanText19: "5.59",
    spanText20: "4.97 km",
    spanText21: "21 min",
    love5: "/img/love@1x.png",
    x032: "/img/border-6@2x.png",
    image6: "/img/image-6@2x.png",
    spanText22: "Fried Rice",
    spanText23: "$",
    spanText24: "5.59",
    spanText25: "4.97 km",
    spanText26: "21 min",
    love6: "/img/love@1x.png",
    spanText27: "Your Balance",
    overlapGroup: "/img/background-1@2x.png",
    spanText28: "Balance",
    spanText29: "$12.000",
    income: "/img/income-1@2x.png",
    spanText30: "Top Up",
    profit: "/img/profit-1@2x.png",
    spanText31: "Transfer",
    spanText32: "Your Address",
    spanText33: "Change",
    spanText34: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    spanText35: "Add Details",
    spanText36: "Add Note",
    line: "/img/line-1@2x.png",
    spanText37: "Service",
    spanText38: "+",
    spanText39: "$",
    spanText40: "1.00",
    coupon: "/img/coupon-1@2x.png",
    spanText41: "Have a coupon code?",
    chevronDown: "/img/chevron-down@1x.png",
    spanText42: "Checkout",
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder4Props: foodOrder4Data,
    foodOrder5Props: foodOrder5Data,
    foodOrder6Props: foodOrder6Data,
    title1Props: title1Data,
    x011Props: x011Data,
    x012Props: x012Data,
    x013Props: x013Data,
    x014Props: x014Data,
    x015Props: x015Data,
    x016Props: x016Data,
    title2Props: title2Data,
    rate1Props: rate2Data,
    rate2Props: rate3Data,
    title3Props: title3Data,
};


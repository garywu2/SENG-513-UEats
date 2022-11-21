import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|customer-reviews)">
          <CustomerReviews {...customerReviewsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-12@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/bill-15@2x.png",
    spanText: "Menu",
};

const foodOrder2Data = {
    deliveryScooter: "/img/delivery-scooter-12@2x.png",
    spanText: "Food Order",
    className: "list-2-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-12@2x.png",
    spanText: "Reviews",
    className: "list-2-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/setting-23@2x.png",
    spanText: "Setting",
    className: "list-2-item",
};

const sideMenu2Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder4Props: foodOrder4Data,
};

const gridData = {
    src: "/img/grid-2@2x.png",
};

const user31Data = {
    spanText1: "Ruby Roben",
};

const item1Data = {
    spanText: "Fish Burger",
};

const user41Data = {
    spanText1: "Cynthia Hope",
};

const user42Data = {
    spanText1: "Samantha W.",
};

const item2Data = {
    spanText: "Beef Burger",
    className: "item-4",
};

const item3Data = {
    spanText: "Vegan Pizza",
    className: "item-4",
};

const user32Data = {
    spanText1: "Jack Jock",
    className: "user-4",
};

const item4Data = {
    spanText: "Fried Rice",
    className: "item-4",
};

const customerReviewsData = {
    spanText1: "Customer Reviews",
    spanText2: "Positive Review",
    spanText3: "June 1, 2020, 08:22 AM",
    spanText4: "This Month",
    spanText5: "3.678",
    spanText6: "Reviews",
    spanText7: "487",
    spanText8: "Reviews",
    polygon31: "/img/polygon-3-1@2x.png",
    arrow1: "/img/arrow-10@2x.png",
    spanText9: "+ 15%",
    spanText10: "Mon",
    spanText11: "Tue",
    spanText12: "Wed",
    spanText13: "Thu",
    spanText14: "Fri",
    spanText15: "Sat",
    spanText16: "Sun",
    orderDiscussion: "/img/order-discussion-20@2x.png",
    overlapGroup: "/img/notification-13@2x.png",
    setting: "/img/setting-24@2x.png",
    spanText17: "Negative Review",
    spanText18: "June 1, 2020, 08:22 AM",
    spanText19: "This Month",
    spanText20: "1.678",
    spanText21: "Reviews",
    spanText22: "186",
    spanText23: "Reviews",
    polygon32: "/img/polygon-3-2@2x.png",
    arrow2: "/img/arrow-11@2x.png",
    spanText24: "+ 15%",
    spanText25: "Mon",
    spanText26: "Tue",
    spanText27: "Wed",
    spanText28: "Thu",
    spanText29: "Fri",
    spanText30: "Sat",
    spanText31: "Sun",
    spanText32: "Recent Reviews",
    magnifier: "/img/magnifier-9@2x.png",
    spanText33: "Search",
    list: "/img/list-2@2x.png",
    overlapGroup2: "/img/border-37@2x.png",
    line1: "/img/line-53@2x.png",
    spanText34: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText35: "Ordered June 21, 2020",
    overlapGroup4: "/img/border-41@2x.png",
    line2: "/img/line-57@2x.png",
    image1: "/img/image-39@2x.png",
    spanText36: "Pepperoni Pizza",
    spanText37: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText38: "Ordered June 21, 2020",
    overlapGroup1: "/img/border-38@2x.png",
    line3: "/img/line-54@2x.png",
    spanText39: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText40: "Ordered June 21, 2020",
    overlapGroup5: "/img/border-42@2x.png",
    spanText41: "Dani Ahmad",
    spanText42: "User since 2020",
    line4: "/img/line-58@2x.png",
    spanText43: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText44: "Ordered June 21, 2020",
    overlapGroup22: "/img/border-39@2x.png",
    line5: "/img/line-55@2x.png",
    image2: "/img/image-37@2x.png",
    spanText45: "Cheese Burger",
    spanText46: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText47: "Ordered June 21, 2020",
    overlapGroup6: "/img/border-43@2x.png",
    spanText48: "Jordan Nico",
    spanText49: "User since 2020",
    line6: "/img/line-59@2x.png",
    spanText50: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText51: "Ordered June 21, 2020",
    overlapGroup3: "/img/border-40@2x.png",
    spanText52: "David Bengkong",
    spanText53: "User since 2020",
    line7: "/img/line-56@2x.png",
    image3: "/img/image-38@2x.png",
    spanText54: "Double Burger",
    spanText55: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText56: "Ordered June 21, 2020",
    overlapGroup7: "/img/border-44@2x.png",
    spanText57: "Salsabile Tango",
    spanText58: "User since 2020",
    line8: "/img/line-60@2x.png",
    image4: "/img/image-42@2x.png",
    spanText59: "Japanese Ramen",
    spanText60: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    spanText61: "Ordered June 21, 2020",
    sideMenu2Props: sideMenu2Data,
    gridProps: gridData,
    user31Props: user31Data,
    item1Props: item1Data,
    user41Props: user41Data,
    user42Props: user42Data,
    item2Props: item2Data,
    item3Props: item3Data,
    user32Props: user32Data,
    item4Props: item4Data,
};


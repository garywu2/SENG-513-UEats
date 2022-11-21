import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Feedback from "./components/Feedback";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|feedback)">
          <Feedback {...feedbackData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-16@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-16@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-16@2x.png",
    spanText: "Feedback",
    className: "list-1-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/setting-31@2x.png",
    spanText: "Setting",
    className: "list-1-item",
};

const sideMenu3Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
};

const x032Data = {
    className: "x04",
};

const feedbackData = {
    spanText1: "Feedback",
    orderDiscussion: "/img/order-discussion-24@2x.png",
    overlapGroup: "/img/notification-17@2x.png",
    setting: "/img/setting-32@2x.png",
    spanText2: "Statistic",
    spanText3: "125",
    spanText4: "100",
    spanText5: "75",
    spanText6: "50",
    spanText7: "25",
    spanText8: "0",
    spanText9: "Jan",
    spanText10: "Feb",
    spanText11: "Mar",
    spanText12: "Apr",
    spanText13: "May",
    spanText14: "Jun",
    spanText15: "Jul",
    spanText16: "Aug",
    spanText17: "Sep",
    spanText18: "Oct",
    spanText19: "Nov",
    spanText20: "Dec",
    polygon2: "/img/polygon-2-1@2x.png",
    polygon1: "/img/polygon-1-2@2x.png",
    spanText21: "July",
    spanText22: "1.702",
    spanText23: "Positive",
    spanText24: "Bad",
    spanText25: "Positive Feedback",
    spanText26: "3.456",
    arrow1: "/img/arrow-12@2x.png",
    spanText27: "+15%",
    spanText28: "From last month",
    spanText29: "Bad Feedback",
    spanText30: "1.236",
    arrow2: "/img/arrow-13@2x.png",
    spanText31: "+15%",
    spanText32: "From last month",
    dots: "/img/dots-24@2x.png",
    spanText33: "Recent Feedback",
    overlapGroup2: "/img/border-51@2x.png",
    spanText34: "Lorem ipsum dolor sit amet.",
    spanText35: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    line1: "/img/line-65@2x.png",
    spanText36: "Ruby Roben",
    spanText37: "Ordered June 21, 2020",
    overlapGroup22: "/img/border-53@2x.png",
    spanText38: "Lorem ipsum dolor sit amet.",
    spanText39: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    line2: "/img/line-67@2x.png",
    spanText40: "Jack Jock",
    spanText41: "Ordered June 21, 2020",
    overlapGroup1: "/img/border-52@2x.png",
    spanText42: "Lorem ipsum dolor sit amet.",
    spanText43: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    line3: "/img/line-66@2x.png",
    spanText44: "Danny Ahmad",
    spanText45: "Ordered June 21, 2020",
    overlapGroup3: "/img/border-54@2x.png",
    spanText46: "Lorem ipsum dolor sit amet.",
    spanText47: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    line4: "/img/line-68@2x.png",
    spanText48: "Clara Hope",
    spanText49: "Ordered June 21, 2020",
    sideMenu3Props: sideMenu3Data,
    x03Props: x032Data,
};


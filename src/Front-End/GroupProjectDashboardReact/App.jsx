import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard5 from "./components/Dashboard5";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|dashboard)">
          <Dashboard5 {...dashboard5Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-14@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-14@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-14@2x.png",
    spanText: "Feedback",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/setting-27@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenu3Data = {
    dashboard2Props: dashboard2Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
};

const grid1Data = {
    src: "/img/income-2@2x.png",
};

const grid2Data = {
    src: "/img/profit-2@2x.png",
    className: "grid-1",
};

const grid3Data = {
    src: "/img/coins-1@2x.png",
    className: "grid-2",
};

const icon31Data = {
    src: "/img/performance-1@2x.png",
};

const icon32Data = {
    src: "/img/business-1@2x.png",
};

const x0191Data = {
    spanText1: "This Week",
    spanText2: "75%",
};

const x0192Data = {
    spanText1: "Last Week",
    spanText2: "69%",
    className: "hint-item",
};

const dashboard5Data = {
    spanText1: "Hello, Driver",
    spanText2: "Profile",
    spanText3: "Jordan Nico",
    star1: "/img/star-1-35@2x.png",
    spanText4: "5.0",
    spanText5: "1k+ Reviews",
    spanText6: "Join June 2020",
    spanText7: "Edit Profile",
    dots1: "/img/dots-22@2x.png",
    doubleCheck: "/img/double-check-4@2x.png",
    spanText8: "932",
    spanText9: "Finished Order",
    icon: "/img/icon-13@2x.png",
    spanText10: "1,032",
    spanText11: "Order Delivered",
    alert: "/img/alert-2@2x.png",
    spanText12: "102",
    spanText13: "Order Canceled",
    spanText14: "Today Earnings",
    spanText15: "$11.240",
    spanText16: "Target Earnings",
    spanText17: "$15.000",
    line: "/img/line-61@2x.png",
    spanText18: "Total Trip",
    spanText19: "15",
    spanText20: "Total Distance",
    spanText21: "15 Km",
    spanText22: "Total Time",
    spanText23: "90 Min",
    overlapGroup1: "/img/border-46@2x.png",
    spanText24: "My Points",
    spanText25: "3456",
    spanText26: "See Reward",
    dropdown: "/img/dropdown-11@2x.png",
    orderDiscussion: "/img/order-discussion-22@2x.png",
    overlapGroup: "/img/notification-15@2x.png",
    setting: "/img/setting-28@2x.png",
    spanText27: "50%",
    spanText28: "Performance",
    spanText29: "80%",
    spanText30: "Min. Performance",
    averageStatistic: "/img/average-statistic-1@2x.png",
    spanText31: "75%",
    spanText32: "Avg. Performance",
    spanText33: "Performance Statistic",
    dots2: "/img/dots-21@2x.png",
    spanText34: "Avg. Performance",
    spanText35: "77%",
    overlapGroup2: "/img/vector-18@2x.png",
    spanText36: "Mon",
    spanText37: "Tue",
    spanText38: "Wed",
    spanText39: "Thu",
    spanText40: "Fri",
    spanText41: "Sat",
    spanText42: "Sun",
    polygon1: "/img/polygon-1-1@2x.png",
    spanText43: "24%",
    spanText44: "82 Order",
    spanText45: "100",
    spanText46: "80",
    spanText47: "60",
    spanText48: "40",
    spanText49: "20",
    spanText50: "0",
    sideMenu3Props: sideMenu3Data,
    grid1Props: grid1Data,
    grid2Props: grid2Data,
    grid3Props: grid3Data,
    icon31Props: icon31Data,
    icon32Props: icon32Data,
    x0191Props: x0191Data,
    x0192Props: x0192Data,
};


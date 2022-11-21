import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard4 from "./components/Dashboard4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|dashboard)">
          <Dashboard4 {...dashboard4Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-9@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/bill-12@2x.png",
    spanText: "Menu",
};

const foodOrder2Data = {
    deliveryScooter: "/img/delivery-scooter-9@2x.png",
    spanText: "Food Order",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-9@2x.png",
    spanText: "Reviews",
    className: "list-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/setting-17@2x.png",
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

const icon21Data = {
    src: "/img/double-check-3@2x.png",
};

const icon22Data = {
    src: "/img/check-1@2x.png",
    className: "icon",
};

const icon23Data = {
    src: "/img/alert-1@2x.png",
    className: "icon",
};

const icon24Data = {
    src: "/img/help-1@2x.png",
    className: "icon",
};

const x0162Data = {
    className: "chart-4-item-2",
};

const x0163Data = {
    className: "chart-4-item",
};

const completed1Data = {
    spanText1: "Completed Order",
    spanText2: "932 Task",
};

const completed2Data = {
    spanText1: "Order Delivered",
    spanText2: "932",
    className: "performance-1-item",
};

const dashboard4Data = {
    spanText1: "Dashboard",
    magnifier: "/img/magnifier-7@2x.png",
    spanText2: "Search",
    orderDiscussion: "/img/order-discussion-17@2x.png",
    overlapGroup: "/img/notification-10@2x.png",
    setting: "/img/setting-18@2x.png",
    spanText3: "Total Income",
    spanText4: "$12,890,00",
    separator: "/img/separator-1@2x.png",
    spanText5: "Income",
    spanText6: "$4345,00",
    arrow1: "/img/arrow-1@2x.png",
    spanText7: "+15%",
    spanText8: "Expense",
    spanText9: "$2890,00",
    arrow2: "/img/arrow-2@2x.png",
    spanText10: "-10%",
    spanText11: "Withdraw",
    sent: "/img/sent-2@2x.png",
    chart1: "/img/chart-1@2x.png",
    spanText12: "00:00",
    spanText13: "23:59",
    spanText14: "Performance",
    arrow3: "/img/arrow-3@2x.png",
    spanText15: "+15%",
    ellipse35: "/img/ellipse-35-1@2x.png",
    ellipse36: "/img/ellipse-36-1@2x.png",
    spanText16: "Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor",
    spanText17: "Order Rate",
    spanText18: "Month",
    chevronDown: "/img/chevron-down-14@2x.png",
    user: "/img/user-1@2x.png",
    spanText19: "Order Total",
    spanText20: "25.307",
    spanText21: "Target",
    spanText22: "3.982",
    spanText23: "This Month",
    spanText24: "1324",
    spanText25: "Last Month",
    spanText26: "1324",
    spanText27: "100",
    spanText28: "75",
    spanText29: "50",
    spanText30: "25",
    spanText31: "0",
    chart2: "/img/line-47@2x.png",
    line1: "/img/line-48@2x.png",
    line2: "/img/line-49@2x.png",
    chartChocolate: "/img/chart-chocolate-1@2x.png",
    overlapGroup2: "/img/union-1@2x.png",
    spanText32: "July",
    spanText33: "1.702",
    spanText34: "Jan",
    spanText35: "Feb",
    spanText36: "Mar",
    spanText37: "Apr",
    spanText38: "May",
    spanText39: "Jun",
    spanText40: "Jul",
    spanText41: "Aug",
    spanText42: "Sep",
    spanText43: "Oct",
    spanText44: "Nov",
    spanText45: "Dec",
    spanText46: "Total Order Complete",
    spanText47: "2.678",
    spanText48: "Total Order Delivered",
    spanText49: "1.234",
    spanText50: "Total Order Canceled",
    spanText51: "123",
    spanText52: "Order Pending",
    spanText53: "432",
    spanText54: "Popular Food",
    dots: "/img/dots-10@2x.png",
    spanText55: "Legend",
    spanText56: "Asian Food (27%)",
    spanText57: "763",
    spanText58: "Fast Food (50%)",
    spanText59: "321",
    spanText60: "Western Food (23%)",
    spanText61: "69",
    spanText62: "Activity",
    spanText63: "100",
    spanText64: "80",
    spanText65: "60",
    spanText66: "40",
    spanText67: "20",
    spanText68: "0",
    spanText69: "58",
    spanText70: "Task",
    spanText71: "Jan",
    spanText72: "Feb",
    spanText73: "Mar",
    spanText74: "Apr",
    spanText75: "May",
    spanText76: "Jun",
    spanText77: "Jul",
    spanText78: "Aug",
    spanText79: "Sep",
    spanText80: "Oct",
    spanText81: "Nov",
    spanText82: "Dec",
    sideMenu2Props: sideMenu2Data,
    icon21Props: icon21Data,
    icon22Props: icon22Data,
    icon23Props: icon23Data,
    icon24Props: icon24Data,
    x0161Props: x0162Data,
    x0162Props: x0163Data,
    completed1Props: completed1Data,
    completed2Props: completed2Data,
};


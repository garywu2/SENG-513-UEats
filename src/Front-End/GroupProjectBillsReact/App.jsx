import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Bills from "./components/Bills";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|bills)">
          <Bills {...billsData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-7@2x.png",
    spanText: "Dashboard",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-7@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-7@2x.png",
    spanText: "Favorite",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/order-discussion-14@2x.png",
    spanText: "Message",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-7@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-10@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-14@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenuData = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-26@2x.png",
    spanText3: "Upgrade",
    vector: "/img/vector-7@2x.png",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    dashboard3Props: dashboard3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
};

const x041Data = {
    spanText1: "Date",
};

const x042Data = {
    spanText1: "Date Paid",
    className: "flex-col-4-item",
};

const billsData = {
    spanText1: "Bills",
    magnifier: "/img/magnifier-6@2x.png",
    spanText2: "Search Bills",
    orderDiscussion: "/img/order-discussion-13@2x.png",
    overlapGroup: "/img/notification-8@2x.png",
    setting: "/img/setting-13@2x.png",
    spanText3: "Recently",
    chevronDown: "/img/chevron-down-13@2x.png",
    spanText4: "Menu",
    spanText5: "Status",
    spanText6: "Date",
    spanText7: "Address",
    spanText8: "Total",
    spanText9: "Payment Method",
    spanText10: "Order #1",
    spanText11: "June 1, 2020, 08:22 AM",
    location1: "/img/location@1x.png",
    spanText12: "Elm Street, 23 Yogyakarta",
    spanText13: "$",
    spanText14: " ",
    spanText15: "5.59",
    spanText16: "Cash",
    dropdown1: "/img/dropdown-1@2x.png",
    spanText17: "Order #1",
    spanText18: "Completed",
    spanText19: "June 1, 2020, 08:22 AM",
    location2: "/img/location@1x.png",
    spanText20: "Elm Street, 23 Yogyakarta",
    spanText21: "$",
    spanText22: " ",
    spanText23: "5.59",
    spanText24: "Cash",
    dropdown2: "/img/dropdown-4@2x.png",
    spanText25: "Order Menu",
    line1: "/img/line-46@2x.png",
    spanText26: "Fast Food Resto",
    line2: "/img/line-44@2x.png",
    spanText27: "Status",
    spanText28: "Completed",
    spanText29: "Bills",
    spanText30: "Order #1",
    line3: "/img/line-45@2x.png",
    spanText31: "Total",
    spanText32: "$",
    spanText33: "202.00",
    spanText34: "Order #1",
    spanText35: "June 1, 2020, 08:22 AM",
    location3: "/img/location@1x.png",
    spanText36: "Elm Street, 23 Yogyakarta",
    spanText37: "$",
    spanText38: " ",
    spanText39: "5.59",
    spanText40: "Cash",
    dropdown3: "/img/dropdown-2@2x.png",
    spanText41: "Order #1",
    spanText42: "June 1, 2020, 08:22 AM",
    location4: "/img/location@1x.png",
    spanText43: "Elm Street, 23 Yogyakarta",
    spanText44: "$",
    spanText45: " ",
    spanText46: "5.59",
    spanText47: "Cash",
    dropdown4: "/img/dropdown-3@2x.png",
    sideMenuProps: sideMenuData,
    x041Props: x041Data,
    x042Props: x042Data,
};


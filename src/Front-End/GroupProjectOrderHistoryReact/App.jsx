import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import OrderHistory from "./components/OrderHistory";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|order-history)">
          <OrderHistory {...orderHistoryData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-5@2x.png",
    spanText: "Dashboard",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-5@2x.png",
    spanText: "Food Order",
};

const foodOrder2Data = {
    deliveryScooter: "/img/review-5@2x.png",
    spanText: "Favorite",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/order-discussion-10@2x.png",
    spanText: "Message",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-5@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-5@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-10@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const sideMenuData = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-24@2x.png",
    spanText3: "Upgrade",
    vector: "/img/vector-5@2x.png",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    dashboard3Props: dashboard3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
};

const name41Data = {
    spanText1: "Fish Burger",
};

const name42Data = {
    spanText1: "Pepperoni Pizza",
};

const name43Data = {
    spanText1: "Double Burger",
};

const name44Data = {
    spanText1: "Beef Burger",
};

const name45Data = {
    spanText1: "Japanese Ramen",
    className: "name-3",
};

const name46Data = {
    spanText1: "Vegan Pizza",
};

const orderHistoryData = {
    spanText1: "Order History",
    magnifier: "/img/magnifier-5@2x.png",
    spanText2: "Search",
    orderDiscussion: "/img/order-discussion-9@2x.png",
    overlapGroup: "/img/notification-5@2x.png",
    setting: "/img/setting-9@2x.png",
    spanText3: "Recently",
    chevronDown: "/img/chevron-down-9@2x.png",
    spanText4: "Menu",
    spanText5: "Date",
    spanText6: "Address",
    spanText7: "Total",
    spanText8: "Status",
    image1: "/img/image-15@2x.png",
    spanText9: "June 1, 2020, 08:22 AM",
    spanText10: "$",
    spanText11: " ",
    spanText12: "5.59",
    spanText13: "Order Again",
    dots1: "/img/dots-3@2x.png",
    image2: "/img/image-16@2x.png",
    spanText14: "June 1, 2020, 08:22 AM",
    spanText15: "$",
    spanText16: " ",
    spanText17: "5.59",
    spanText18: "Order Again",
    dots2: "/img/dots-4@2x.png",
    image3: "/img/image-17@2x.png",
    spanText19: "June 1, 2020, 08:22 AM",
    spanText20: "$",
    spanText21: " ",
    spanText22: "5.59",
    spanText23: "Order Again",
    dots3: "/img/dots-5@2x.png",
    image4: "/img/image-18@2x.png",
    spanText24: "June 1, 2020, 08:22 AM",
    spanText25: "$",
    spanText26: " ",
    spanText27: "5.59",
    spanText28: "Order Again",
    dots4: "/img/dots-6@2x.png",
    image5: "/img/image-19@2x.png",
    spanText29: "June 1, 2020, 08:22 AM",
    spanText30: "$",
    spanText31: " ",
    spanText32: "5.59",
    spanText33: "Order Again",
    dots5: "/img/dots-7@2x.png",
    image6: "/img/image-20@2x.png",
    spanText34: "June 1, 2020, 08:22 AM",
    spanText35: "$",
    spanText36: " ",
    spanText37: "5.59",
    spanText38: "Order Again",
    dots6: "/img/dots-8@2x.png",
    sideMenuProps: sideMenuData,
    name41Props: name41Data,
    name42Props: name42Data,
    name43Props: name43Data,
    name44Props: name44Data,
    name45Props: name45Data,
    name46Props: name46Data,
};


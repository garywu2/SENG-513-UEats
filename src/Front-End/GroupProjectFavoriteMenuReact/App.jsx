import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FavoriteMenu from "./components/FavoriteMenu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|favorite-menu)">
          <FavoriteMenu {...favoriteMenuData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard3Data = {
    restaurantLocation: "/img/restaurant-location-3@2x.png",
    spanText: "Dashboard",
};

const foodOrder1Data = {
    deliveryScooter: "/img/delivery-scooter-3@2x.png",
    spanText: "Food Order",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-3@2x.png",
    spanText: "Favorite",
};

const foodOrder2Data = {
    deliveryScooter: "/img/order-discussion-5@2x.png",
    spanText: "Message",
    className: "list-item-2",
};

const foodOrder4Data = {
    deliveryScooter: "/img/24-hour-food-delivery-3@2x.png",
    spanText: "Order History",
    className: "list-item-3",
};

const foodOrder5Data = {
    deliveryScooter: "/img/bill-3@2x.png",
    spanText: "Bills",
    className: "list-item-4",
};

const foodOrder6Data = {
    deliveryScooter: "/img/setting-5@2x.png",
    spanText: "Setting",
    className: "list-item",
};

const gridData = {
    src: "/img/grid-1@2x.png",
};

const favoriteMenuData = {
    spanText1: "GoMeal",
    spanText2: ".",
    maskGroup: "/img/mask-group-22@2x.png",
    spanText3: "Upgrade",
    spanText4: <React.Fragment>Upgrade your<br />Account to Get Free Voucher</React.Fragment>,
    spanText5: "Favorite Menu",
    magnifier: "/img/magnifier-3@2x.png",
    spanText6: "What do you want eat today...",
    orderDiscussion: "/img/order-discussion-6@2x.png",
    overlapGroup: "/img/notification-3@2x.png",
    setting: "/img/setting-6@2x.png",
    list: "/img/list-1@2x.png",
    overlapGroup2: "/img/border-7@2x.png",
    image1: "/img/image-7@2x.png",
    love1: "/img/love@1x.png",
    spanText7: "Fast Food Resto",
    line1: "/img/line-28@2x.png",
    button1: "/img/button-4@2x.png",
    overlapGroup4: "/img/border-11@2x.png",
    image2: "/img/image-11@2x.png",
    love2: "/img/love@1x.png",
    spanText8: "Fast Food Resto",
    line2: "/img/line-32@2x.png",
    spanText9: "Pepperoni Pizza",
    spanText10: "$",
    spanText11: "5.59",
    button2: "/img/button-8@2x.png",
    overlapGroup1: "/img/border-8@2x.png",
    image3: "/img/image-8@2x.png",
    love3: "/img/love@1x.png",
    spanText12: "Fast Food Resto",
    line3: "/img/line-29@2x.png",
    button3: "/img/button-5@2x.png",
    overlapGroup5: "/img/border-12@2x.png",
    image4: "/img/image-12@2x.png",
    love4: "/img/love@1x.png",
    spanText13: "Fast Food Resto",
    line4: "/img/line-33@2x.png",
    spanText14: "Japanese Ramen",
    spanText15: "$",
    spanText16: "5.59",
    button4: "/img/button-9@2x.png",
    overlapGroup22: "/img/border-9@2x.png",
    image5: "/img/image-9@2x.png",
    love5: "/img/love@1x.png",
    spanText17: "Fast Food Resto",
    line5: "/img/line-30@2x.png",
    button5: "/img/button-6@2x.png",
    overlapGroup6: "/img/border-13@2x.png",
    image6: "/img/image-13@2x.png",
    love6: "/img/love@1x.png",
    spanText18: "Fast Food Resto",
    line6: "/img/line-34@2x.png",
    spanText19: "Fried Rice",
    spanText20: "$",
    spanText21: "5.59",
    button6: "/img/button-10@2x.png",
    overlapGroup3: "/img/border-10@2x.png",
    image7: "/img/image-10@2x.png",
    love7: "/img/love@1x.png",
    spanText22: "Fast Food Resto",
    line7: "/img/line-31@2x.png",
    spanText23: "Double Burger",
    spanText24: "$",
    spanText25: "5.59",
    button7: "/img/button-7@2x.png",
    overlapGroup7: "/img/border-14@2x.png",
    image8: "/img/image-14@2x.png",
    love8: "/img/love@1x.png",
    spanText26: "Fast Food Resto",
    line8: "/img/line-35@2x.png",
    spanText27: "Vegan Pizza",
    spanText28: "$",
    spanText29: "5.59",
    button8: "/img/button-11@2x.png",
    dashboard3Props: dashboard3Data,
    foodOrder1Props: foodOrder1Data,
    foodOrder3Props: foodOrder3Data,
    foodOrder2Props: foodOrder2Data,
    foodOrder3Props2: foodOrder4Data,
    foodOrder4Props: foodOrder5Data,
    foodOrder5Props: foodOrder6Data,
    gridProps: gridData,
};


import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Menu4 from "./components/Menu4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|menu)">
          <Menu4 {...menu4Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const dashboard2Data = {
    restaurantLocation: "/img/restaurant-location-10@2x.png",
};

const foodOrder1Data = {
    deliveryScooter: "/img/bill-13@2x.png",
    spanText: "Menu",
};

const foodOrder2Data = {
    deliveryScooter: "/img/delivery-scooter-10@2x.png",
    spanText: "Food Order",
    className: "list-item-2",
};

const foodOrder3Data = {
    deliveryScooter: "/img/review-10@2x.png",
    spanText: "Reviews",
    className: "list-item-3",
};

const foodOrder4Data = {
    deliveryScooter: "/img/setting-19@2x.png",
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

const title21Data = {
    spanText1: "Category",
};

const x0171Data = {
    baked: "/img/baked-2@2x.png",
    spanText: "Bakery",
};

const x0172Data = {
    baked: "/img/coffee-2@2x.png",
    spanText: "Beverage",
};

const x0173Data = {
    baked: "/img/chicken-2@2x.png",
    spanText: "Chicken",
};

const x0174Data = {
    baked: "/img/fast-2@2x.png",
    spanText: "Pizza",
};

const x0175Data = {
    baked: "/img/fish-2@2x.png",
    spanText: "Seafood",
};

const x0176Data = {
    baked: "/img/dessert-1@2x.png",
    spanText: "Dessert",
};

const x0177Data = {
    baked: "/img/chinese-1@2x.png",
    spanText: "Noodle",
};

const title22Data = {
    spanText1: "Best Seller",
    className: "title-2-2",
};

const title23Data = {
    spanText1: "Promo",
    className: "title-2",
};

const x0181Data = {
    spanText2: "Fish Burger",
};

const x0182Data = {
    spanText2: "Beef Burger",
    className: "x03",
};

const menu4Data = {
    spanText1: "Menu",
    magnifier: "/img/magnifier-8@2x.png",
    spanText2: "Search",
    orderDiscussion: "/img/order-discussion-18@2x.png",
    overlapGroup: "/img/notification-11@2x.png",
    setting: "/img/setting-20@2x.png",
    spanText3: "Add New Menu",
    burger: "/img/burger-2@2x.png",
    spanText4: "Burger",
    spanText5: "Popular This Week",
    spanText6: "View all",
    chevronDown: "/img/chevron-down-16@2x.png",
    overlapGroup2: "/img/border-16@2x.png",
    image1: "/img/image-21@2x.png",
    spanText7: "Fish Burger",
    spanText8: "$",
    spanText9: "5.59",
    dots1: "/img/dots-11@2x.png",
    spanText10: "1k+ User Reviews",
    spanText11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    overlapGroup11: "/img/border-17@2x.png",
    image2: "/img/image-22@2x.png",
    spanText12: "Double Burger",
    spanText13: "$",
    spanText14: "5.59",
    dots2: "/img/dots-12@2x.png",
    spanText15: "1k+ User Reviews",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    overlapGroup22: "/img/border-18@2x.png",
    image3: "/img/image-23@2x.png",
    spanText17: "Beef Burger",
    spanText18: "$",
    spanText19: "5.59",
    dots3: "/img/dots-13@2x.png",
    spanText20: "1k+ User Reviews",
    spanText21: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    overlapGroup31: "/img/border-19@2x.png",
    image4: "/img/image-24@2x.png",
    spanText22: "Cheese Burger",
    spanText23: "$",
    spanText24: "5.59",
    dots4: "/img/dots-14@2x.png",
    spanText25: "1k+ User Reviews",
    spanText26: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    x01: "/img/border-20@2x.png",
    overlapGroup4: "/img/image-25@2x.png",
    dots5: "/img/dots-15@2x.png",
    spanText27: "Pepperoni Pizza",
    spanText28: "$",
    spanText29: "5.59",
    x021: "/img/border-21@2x.png",
    overlapGroup12: "/img/image-26@2x.png",
    dots6: "/img/dots-16@2x.png",
    spanText30: "Japanese Ramen",
    spanText31: "$",
    spanText32: "5.59",
    x03: "/img/border-22@2x.png",
    overlapGroup23: "/img/image-27@2x.png",
    dots7: "/img/dots-17@2x.png",
    spanText33: "Fried Rice",
    spanText34: "$",
    spanText35: "5.59",
    x041: "/img/border-23@2x.png",
    overlapGroup32: "/img/image-28@2x.png",
    dots8: "/img/dots-18@2x.png",
    spanText36: "Vegan Pizza",
    spanText37: "$",
    spanText38: "5.59",
    x05: "/img/border-24@2x.png",
    overlapGroup42: "/img/image-29@2x.png",
    dots9: "/img/dots-19@2x.png",
    spanText39: "Beef Burger",
    spanText40: "$",
    spanText41: "5.59",
    x06: "/img/border-25@2x.png",
    overlapGroup5: "/img/image-30@2x.png",
    dots10: "/img/dots-20@2x.png",
    spanText42: "Fish Burger",
    spanText43: "$",
    spanText44: "5.59",
    x022: "/img/border-27@2x.png",
    spanText45: "15% Off",
    spanText46: "Double Burger",
    spanText47: "$",
    spanText48: "3.59",
    spanText49: "$5.59",
    image5: "/img/image-32@2x.png",
    x042: "/img/border-29@2x.png",
    spanText50: "15% Off",
    spanText51: "Cheese Burger",
    spanText52: "$",
    spanText53: "3.59",
    spanText54: "$5.59",
    image6: "/img/image-34@2x.png",
    sideMenu2Props: sideMenu2Data,
    title21Props: title21Data,
    x0171Props: x0171Data,
    x0172Props: x0172Data,
    x0173Props: x0173Data,
    x0174Props: x0174Data,
    x0175Props: x0175Data,
    x0176Props: x0176Data,
    x0177Props: x0177Data,
    title22Props: title22Data,
    title23Props: title23Data,
    x0181Props: x0181Data,
    x0182Props: x0182Data,
};


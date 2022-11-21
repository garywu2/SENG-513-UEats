import React from "react";
import "./FoodOrder3.sass";

function FoodOrder3(props) {
  const { deliveryScooter, spanText } = props;

  return (
    <div className="food-order-2">
      <img className="delivery-scooter" src={deliveryScooter} alt="Delivery Scooter" />
      <div className="email poppins-medium-white-18px">
        <span className="poppins-medium-white-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder3;

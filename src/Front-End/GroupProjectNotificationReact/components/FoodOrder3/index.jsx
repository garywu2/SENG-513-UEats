import React from "react";
import "./FoodOrder3.sass";

function FoodOrder3(props) {
  const { deliveryScooter, spanText } = props;

  return (
    <div className="message">
      <img className="order-discussion-1" src={deliveryScooter} alt="Order Discussion" />
      <div className="contact poppins-medium-white-18px">
        <span className="poppins-medium-white-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder3;

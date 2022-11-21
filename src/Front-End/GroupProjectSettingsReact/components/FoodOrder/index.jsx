import React from "react";
import "./FoodOrder.sass";

function FoodOrder(props) {
  const { deliveryScooter, spanText, className } = props;

  return (
    <div className={`list-item-1 ${className || ""}`}>
      <img className="delivery-scooter" src={deliveryScooter} alt="Delivery Scooter" />
      <div className="email poppins-medium-amethyst-smoke-18px">
        <span className="span-2 poppins-medium-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder;

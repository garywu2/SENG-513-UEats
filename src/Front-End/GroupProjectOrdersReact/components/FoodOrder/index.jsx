import React from "react";
import "./FoodOrder.sass";

function FoodOrder(props) {
  const { deliveryScooter, spanText, className } = props;

  return (
    <div className={`list-1-item-1 ${className || ""}`}>
      <img className="delivery-scooter" src={deliveryScooter} alt="Delivery Scooter" />
      <div className="text-1 poppins-medium-amethyst-smoke-18px">
        <span className="span-2 poppins-medium-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder;

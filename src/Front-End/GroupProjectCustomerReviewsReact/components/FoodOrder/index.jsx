import React from "react";
import "./FoodOrder.sass";

function FoodOrder(props) {
  const { deliveryScooter, spanText, className } = props;

  return (
    <div className={`list-2-item-1 ${className || ""}`}>
      <img className="bill" src={deliveryScooter} alt="Bill" />
      <div className="text-4 poppins-medium-amethyst-smoke-18px">
        <span className="span-2 poppins-medium-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder;

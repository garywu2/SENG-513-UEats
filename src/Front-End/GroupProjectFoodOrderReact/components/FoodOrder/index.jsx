import React from "react";
import "./FoodOrder.sass";

function FoodOrder(props) {
  const { deliveryScooter, spanText, className } = props;

  return (
    <div className={`list-item-1 ${className || ""}`}>
      <img className="review" src={deliveryScooter} alt="Review" />
      <div className="contact poppins-medium-amethyst-smoke-18px">
        <span className="span-1 poppins-medium-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder;

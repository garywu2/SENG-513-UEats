import React from "react";
import "./FoodOrder3.sass";

function FoodOrder3(props) {
  const { deliveryScooter, spanText } = props;

  return (
    <div className="favorite">
      <img className="review" src={deliveryScooter} alt="Review" />
      <div className="contact poppins-medium-white-18px">
        <span className="poppins-medium-white-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default FoodOrder3;

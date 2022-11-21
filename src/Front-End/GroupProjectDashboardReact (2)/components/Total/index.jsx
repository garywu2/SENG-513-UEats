import React from "react";
import "./Total.sass";

function Total() {
  return (
    <div className="total">
      <div className="total-1 poppins-medium-thunder-18px">
        <span className="poppins-medium-thunder-18px">Total</span>
      </div>
      <div className="price-5 poppins-medium-mandy-24px">
        <span className="poppins-medium-selective-yellow-24px">$</span>
        <span className="poppins-medium-thunder-24px">202.00</span>
      </div>
    </div>
  );
}

export default Total;

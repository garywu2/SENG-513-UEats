import React from "react";
import Text3 from "../Text3";
import Text4 from "../Text4";
import "./Menu3.sass";

function Menu3() {
  return (
    <div className="menu">
      <div className="order-menu poppins-medium-thunder-18px">
        <span className="poppins-medium-thunder-18px">Order Menu</span>
      </div>
      <div className="x01">
        <img className="mask-group-1" src="/img/mask-group-7@2x.png" alt="Mask Group" />
        <Text3 />
        <div className="text-1 poppins-semi-bold-thunder-14px">
          <span className="poppins-semi-bold-thunder-14px">+</span>
          <span className="poppins-semi-bold-selective-yellow-14px">$</span>
          <span className="poppins-semi-bold-thunder-14px">5.59</span>
        </div>
      </div>
      <div className="x02">
        <img className="mask-group-1" src="/img/mask-group-8@2x.png" alt="Mask Group" />
        <Text4 />
        <div className="text-2 poppins-semi-bold-thunder-14px">
          <span className="poppins-semi-bold-thunder-14px">+</span>
          <span className="poppins-semi-bold-selective-yellow-14px">$</span>
          <span className="poppins-semi-bold-thunder-14px">5.59</span>
        </div>
      </div>
    </div>
  );
}

export default Menu3;

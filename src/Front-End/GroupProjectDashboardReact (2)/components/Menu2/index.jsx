import React from "react";
import Text from "../Text";
import Text2 from "../Text2";
import "./Menu2.sass";

function Menu2() {
  return (
    <div className="menu-1">
      <div className="order-menu-1 poppins-bold-thunder-24px">
        <span className="poppins-bold-thunder-24px">Order Menu</span>
      </div>
      <div className="x01">
        <img className="mask-group-1" src="/img/mask-group-3@2x.png" alt="Mask Group" />
        <Text />
        <div className="text-1 poppins-semi-bold-thunder-18px">
          <span className="poppins-semi-bold-thunder-18px">+</span>
          <span className="poppins-semi-bold-selective-yellow-18px">$</span>
          <span className="poppins-semi-bold-thunder-18px">5.59</span>
        </div>
      </div>
      <div className="x02">
        <img className="mask-group-1" src="/img/mask-group-4@2x.png" alt="Mask Group" />
        <Text2 />
        <div className="text-2 poppins-semi-bold-thunder-18px">
          <span className="poppins-semi-bold-thunder-18px">+</span>
          <span className="poppins-semi-bold-selective-yellow-18px">$</span>
          <span className="poppins-semi-bold-thunder-18px">5.59</span>
        </div>
      </div>
      <div className="x03">
        <img className="mask-group-1" src="/img/mask-group-5@2x.png" alt="Mask Group" />
        <div className="text">
          <div className="vegan-pizza poppins-semi-bold-thunder-18px">
            <span className="poppins-semi-bold-thunder-18px">Vegan Pizza</span>
          </div>
          <div className="x1 poppins-normal-amethyst-smoke-14px">
            <span className="poppins-normal-amethyst-smoke-14px">x1</span>
          </div>
        </div>
        <div className="text-3 poppins-semi-bold-thunder-18px">
          <span className="poppins-semi-bold-thunder-18px">+</span>
          <span className="poppins-semi-bold-selective-yellow-18px">$</span>
          <span className="poppins-semi-bold-thunder-18px">5.59</span>
        </div>
      </div>
    </div>
  );
}

export default Menu2;

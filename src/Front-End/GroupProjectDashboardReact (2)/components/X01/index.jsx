import React from "react";
import "./X01.sass";

function X01(props) {
  const { baked, spanText } = props;

  return (
    <div className="items-item-2">
      <img className="baked" src={baked} alt="Baked" />
      <div className="bakery poppins-normal-amethyst-smoke-18px">
        <span className="poppins-normal-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default X01;

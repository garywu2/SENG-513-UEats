import React from "react";
import "./X017.sass";

function X017(props) {
  const { baked, spanText } = props;

  return (
    <div className="items-item">
      <img className="baked" src={baked} alt="Baked" />
      <div className="bakery poppins-normal-amethyst-smoke-18px">
        <span className="poppins-normal-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default X017;

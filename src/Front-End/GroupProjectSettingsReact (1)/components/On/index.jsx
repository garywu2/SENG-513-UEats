import React from "react";
import "./On.sass";

function On(props) {
  const { bxBxRadioCircleMarked, spanText } = props;

  return (
    <div className="radio-item">
      <img className="bxbx-radio-circle" src={bxBxRadioCircleMarked} alt="bx:bx-radio-circle-marked" />
      <div className="on poppins-normal-amethyst-smoke-18px">
        <span className="poppins-normal-amethyst-smoke-18px">{spanText}</span>
      </div>
    </div>
  );
}

export default On;

import React from "react";
import Rate3 from "../Rate3";
import Wishlist from "../Wishlist";
import "./Rate2.sass";

function Rate2(props) {
  const { className } = props;

  return (
    <div className={`rate-2 ${className || ""}`}>
      <Rate3 />
      <div className="ellipse-33"></div>
      <Wishlist />
    </div>
  );
}

export default Rate2;

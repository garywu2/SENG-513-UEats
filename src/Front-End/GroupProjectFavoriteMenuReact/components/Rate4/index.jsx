import React from "react";
import Rate3 from "../Rate3";
import Wishlist from "../Wishlist";
import "./Rate4.sass";

function Rate4() {
  return (
    <div className="rate">
      <Rate3 />
      <div className="ellipse-3"></div>
      <Wishlist />
      <div className="ellipse-3"></div>
      <div className="x297km poppins-normal-amethyst-smoke-14px">
        <span className="poppins-normal-amethyst-smoke-14px">2.97km</span>
      </div>
    </div>
  );
}

export default Rate4;

import React from "react";
import Content from "../Content";
import "./Address2.sass";

function Address2() {
  return (
    <div className="address poppins-normal-amethyst-smoke-14px">
      <div className="delivery-address">
        <span className="poppins-normal-amethyst-smoke-14px">Delivery Address</span>
      </div>
      <Content />
      <p className="lorem-ipsum-dolor-si-1">
        <span className="poppins-normal-amethyst-smoke-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </span>
      </p>
    </div>
  );
}

export default Address2;

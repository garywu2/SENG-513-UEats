import React from "react";
import "./X015.sass";

function X015(props) {
  const { icon, spanText1, className } = props;

  return (
    <div className={`items-item-1 ${className || ""}`}>
      <img className="icon" src={icon} alt="icon" />
      <div className="text">
        <div className="account-1 poppins-bold-thunder-14px">
          <span className="span-3 poppins-bold-thunder-14px">{spanText1}</span>
        </div>
        <p className="lorem-ipsum-dolor-si poppins-normal-amethyst-smoke-14px">
          <span className="span-3 poppins-normal-amethyst-smoke-14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </span>
        </p>
      </div>
    </div>
  );
}

export default X015;

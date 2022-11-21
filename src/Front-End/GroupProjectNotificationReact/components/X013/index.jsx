import React from "react";
import Icon from "../Icon";
import "./X013.sass";

function X013(props) {
  const { spanText1, spanText2, spanText4, className, iconProps } = props;

  return (
    <div className={`x01 ${className || ""}`}>
      <Icon src={iconProps.src} className={iconProps.className} />
      <div className="flex-col-2">
        <div className="order-1 poppins-bold-thunder-18px">
          <span className="span-3 poppins-bold-thunder-18px">{spanText1}</span>
        </div>
        <div className="order-accepted-by-restaurant cairo-semi-bold-thunder-14px">
          <span className="span-3 poppins-bold-thunder-14px">{spanText2}</span>
          <span className="span-3 cairo-bold-thunder-14px">&nbsp;</span>
          <span className="span-3 poppins-normal-thunder-14px">{spanText4}</span>
        </div>
        <p className="lorem-ipsum-dolor-si-1 poppins-normal-amethyst-smoke-14px">
          <span className="span-3 poppins-normal-amethyst-smoke-14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </span>
        </p>
      </div>
      <div className="monday-june-31-2020-1 poppins-normal-amethyst-smoke-14px">
        <span className="span-3 poppins-normal-amethyst-smoke-14px">Monday, June 31 2020</span>
      </div>
    </div>
  );
}

export default X013;

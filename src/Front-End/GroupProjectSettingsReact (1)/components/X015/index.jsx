import React from "react";
import "./X015.sass";

function X015(props) {
  const { icon, spanText1, spanText2, className } = props;

  return (
    <div className={`items-1-item-1 ${className || ""}`}>
      <img className="icon" src={icon} alt="icon" />
      <div className="text-4">
        <div className="retaurant-profile poppins-bold-thunder-14px">
          <span className="span-3 poppins-bold-thunder-14px">{spanText1}</span>
        </div>
        <p className="lorem-ipsum-dolor-si-2 poppins-normal-amethyst-smoke-14px">
          <span className="span-3 poppins-normal-amethyst-smoke-14px">{spanText2}</span>
        </p>
      </div>
    </div>
  );
}

export default X015;

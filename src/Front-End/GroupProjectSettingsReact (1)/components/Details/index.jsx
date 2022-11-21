import React from "react";
import "./Details.sass";

function Details(props) {
  const { spanText1, spanText2 } = props;

  return (
    <div className="details">
      <div className="address-details poppins-normal-amethyst-smoke-18px">
        <span className="poppins-normal-amethyst-smoke-18px">{spanText1}</span>
      </div>
      <div className="overlap-group-8">
        <p className="name-1 poppins-medium-thunder-18px">
          <span className="poppins-medium-thunder-18px">{spanText2}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;

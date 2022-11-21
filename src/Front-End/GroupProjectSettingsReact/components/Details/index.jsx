import React from "react";
import "./Details.sass";

function Details() {
  return (
    <div className="details">
      <div className="address-details poppins-normal-amethyst-smoke-18px">
        <span className="poppins-normal-amethyst-smoke-18px">Address Details</span>
      </div>
      <div className="overlap-group-6">
        <p className="name-1 poppins-medium-thunder-18px">
          <span className="poppins-medium-thunder-18px">
            Franklin Avenue Street <br />
            New York, ABC 5562
            <br />
            United State
          </span>
        </p>
      </div>
    </div>
  );
}

export default Details;

import React from "react";
import "./Location.sass";

function Location(props) {
  const { src, className } = props;

  return (
    <div className={`location-1 ${className || ""}`}>
      <img className="location-2" src={src} alt="Location" />
    </div>
  );
}

export default Location;

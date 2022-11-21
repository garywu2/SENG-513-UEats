import React from "react";
import "./Rate.sass";

function Rate(props) {
  const { className } = props;

  return (
    <div className={`rate-2 ${className || ""}`}>
      <img className="star" src="/img/star-1-1@2x.png" alt="Star 1" />
      <img className="star" src="/img/star-2-1@2x.png" alt="Star 2" />
      <img className="star" src="/img/star-3-1@2x.png" alt="Star 3" />
      <img className="star" src="/img/star-4-1@2x.png" alt="Star 4" />
      <img className="star" src="/img/star-5-1@2x.png" alt="Star 5" />
    </div>
  );
}

export default Rate;

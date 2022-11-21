import React from "react";
import Rate6 from "../Rate6";
import "./Item.sass";

function Item(props) {
  const { spanText, className } = props;

  return (
    <div className={`item-4-1 ${className || ""}`}>
      <img className="image-1" src="/img/image-35@2x.png" alt="image" />
      <div className="rate-4">
        <div className="fish-burger poppins-medium-thunder-18px">
          <span className="span-4 poppins-medium-thunder-18px">{spanText}</span>
        </div>
        <Rate6 />
      </div>
    </div>
  );
}

export default Item;

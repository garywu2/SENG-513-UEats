import React from "react";
import Rate2 from "../Rate2";
import "./X018.sass";

function X018(props) {
  const { spanText2, className } = props;

  return (
    <div className={`x01 ${className || ""}`}>
      <div className="flex-col-9">
        <div className="overlap-group-5">
          <div className="x15-off-1 poppins-normal-white-18px">
            <span className="span-7 poppins-normal-white-18px">15% Off</span>
          </div>
        </div>
        <div className="text-6">
          <div className="name-8">
            <div className="x-burger poppins-medium-thunder-18px">
              <span className="span-7 poppins-medium-thunder-18px">{spanText2}</span>
            </div>
            <div className="price-container-1">
              <div className="price-7 poppins-bold-mandy-24px">
                <span className="span-7 poppins-bold-selective-yellow-24px">$</span>
                <span className="span-7 poppins-bold-thunder-24px">3.59</span>
              </div>
              <div className="price-8 poppins-medium-amethyst-smoke-18px">
                <span className="span-7 poppins-medium-amethyst-smoke-18px">$5.59</span>
              </div>
            </div>
          </div>
          <Rate2 />
        </div>
      </div>
      <img className="image-2" src="/img/image-31@2x.png" alt="image" />
    </div>
  );
}

export default X018;

import React from "react";
import "./Page.sass";

function Page() {
  return (
    <div className="page">
      <img className="chevron-down-1" src="/img/chevron-down-25@2x.png" alt="chevron-down" />
      <div className="overlap-group-2">
        <div className="number-1 poppins-normal-selective-yellow-18px">
          <span className="poppins-normal-selective-yellow-18px">1</span>
        </div>
      </div>
      <div className="overlap-group1-2">
        <div className="number poppins-normal-white-18px">
          <span className="poppins-normal-white-18px">2</span>
        </div>
      </div>
      <div className="overlap-group2">
        <div className="number poppins-normal-selective-yellow-18px">
          <span className="poppins-normal-selective-yellow-18px">3</span>
        </div>
      </div>
      <img className="chevron-down-1" src="/img/chevron-down-26@2x.png" alt="chevron-down" />
    </div>
  );
}

export default Page;

import React from "react";
import "./Page.sass";

function Page() {
  return (
    <div className="page">
      <img className="chevron-down" src="/img/chevron-down-19@2x.png" alt="chevron-down" />
      <div className="overlap-group-6">
        <div className="number-3 poppins-normal-selective-yellow-18px">
          <span className="poppins-normal-selective-yellow-18px">1</span>
        </div>
      </div>
      <div className="overlap-group1-4">
        <div className="number-2 poppins-normal-white-18px">
          <span className="poppins-normal-white-18px">2</span>
        </div>
      </div>
      <div className="overlap-group2">
        <div className="number-2 poppins-normal-selective-yellow-18px">
          <span className="poppins-normal-selective-yellow-18px">3</span>
        </div>
      </div>
      <img className="chevron-down" src="/img/chevron-down-20@2x.png" alt="chevron-down" />
    </div>
  );
}

export default Page;

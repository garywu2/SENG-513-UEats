import React from "react";
import "./SaveSetting.sass";

function SaveSetting(props) {
  const { children } = props;

  return (
    <div className="save-setting">
      <div className="text-5 poppins-medium-white-18px">
        <span className="poppins-medium-white-18px">{children}</span>
      </div>
    </div>
  );
}

export default SaveSetting;

import React from "react";
import "./Content.sass";

function Content() {
  return (
    <div className="content">
      <img className="location" src="/img/location@1x.png" alt="Location" />
      <div className="elm-street-23 poppins-bold-thunder-18px">
        <span className="poppins-bold-thunder-18px">Elm Street, 23</span>
      </div>
    </div>
  );
}

export default Content;

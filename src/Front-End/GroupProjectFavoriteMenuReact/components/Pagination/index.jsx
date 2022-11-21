import React from "react";
import Page from "../Page";
import "./Pagination.sass";

function Pagination() {
  return (
    <div className="pagination">
      <p className="showing-1-5-from-100-data poppins-normal-thunder-14px">
        <span className="poppins-normal-amethyst-smoke-14px">Showing </span>
        <span className="poppins-normal-thunder-14px">1-5</span>
        <span className="poppins-normal-thunder-14px">&nbsp;</span>
        <span className="poppins-normal-amethyst-smoke-14px">from</span>
        <span className="poppins-normal-thunder-14px">&nbsp;</span>
        <span className="poppins-normal-thunder-14px">100</span>
        <span className="poppins-normal-thunder-14px">&nbsp;</span>
        <span className="poppins-normal-amethyst-smoke-14px">data</span>
      </p>
      <Page />
    </div>
  );
}

export default Pagination;

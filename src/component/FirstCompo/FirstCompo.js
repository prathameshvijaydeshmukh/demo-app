import React from "react";
import "./FirstCompo.css";

function FirstCompo() {
  return (
    <div className="image-div">
      <div className="searchbar mt-2 d-flex justify-content-between m-2">
        <i class="fa fa-bars mt-3 m-3"></i>
        <text className="madras-center mt-2">IIT Madras Center</text>
        <div className="wv">
          <i className="fa fa-search"></i>
          {/* <span class="iconify" data-icon="ci:line-xl"></span> */}
          <span className="mx-2">|</span>
          <i className="fa fa-close mt-3 m-2"></i>
        </div>
      </div>
    </div>
  );
}

export default FirstCompo;

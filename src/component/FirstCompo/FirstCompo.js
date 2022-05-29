import React from "react";
import Text from "../Text/Text";
import "./FirstCompo.css";

function FirstCompo() {
  return (
    <div className="image-div">
      <div className="searchbar mt-2">
        <div className="d-flex justify-content-between">
          <i class="fa fa-bars mt-3 m-3"></i>
          <div className="wv">
            <i class="fa fa-search mt-3"></i>
            <span class="iconify" data-icon="ci:line-xl"></span>
            <i class="fa fa-close mt-3 m-2"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCompo;

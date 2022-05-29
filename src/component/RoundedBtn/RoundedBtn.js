import React from "react";
import ListCompo from "../ListCompo/ListCompo";
import "./Rounded.css";

function RoundedBtn() {
  const roundedbtndata = [
    "bxs:direction-right",
    "ri:save-2-fill",
    "material-symbols:share-location-sharp",
    "ic:outline-send-to-mobile",
    "bx:share-alt",
  ];

  return (
    <div className="d-flex jusify-content-center align-items-center gap">
      {roundedbtndata.map((icon, i) => (
        <div className="icon">
          <span className="iconify" data-icon={icon}></span>
        </div>
      ))}
    </div>
  );
}

export default RoundedBtn;

import React from "react";
import ListCompo from "../ListCompo/AddressCompo";
import "./Rounded.css";

function RoundedBtn() {
  const roundedbtndata = [
    { icon: "bxs:direction-right", text: "Directions" },
    { icon: "ri:save-2-fill", text: "Save" },
    { icon: "material-symbols:share-location-sharp", text: "Nearby" },
    { icon: "ic:outline-send-to-mobile", text: "send to phone" },
    { icon: "bx:share-alt", text: "Share" },
    //
  ];

  return (
    <div>
      <div className="d-flex justify-content-between mx-3 icon-main">
        {roundedbtndata.map((iconInfo, i) => (
          <div className="icon">
            <span className="iconify" data-icon={iconInfo.icon}></span>
            <div className=".icon-text">
              <span className="icon-text">{iconInfo.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoundedBtn;

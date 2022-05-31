import React from "react";
import "./MadrasPark.css";

function MadrasPark() {
  return (
    <div>
      <div className="m-3">
        <span className="main-text">IIT Madras Research Park</span>
        <br />
        <span>இந்திய தொழில்நுட்ப நிறுவனம</span>
        <div className="star">
          4.5 <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span class="iconify" data-icon="emojione:star"></span>
          <a className="txt-sm" href="#">
            {" "}
            897 reviews
          </a>
        </div>

        <span>University</span>
      </div>
      <hr />
    </div>
  );
}

export default MadrasPark;

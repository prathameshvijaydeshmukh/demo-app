import React from "react";
import RoundedBtn from "../RoundedBtn/RoundedBtn";
import "./Text.css";
function Text() {
  return (
    <div>
      <div className="Text mx-4 mt-3">
        <span className="main-text">IIT Madras Research Park</span>
        <br />
        <span>இந்திய தொழில்நுட்ப நிறுவனம் ஆராய்ச்சிப் பூங்கா</span>
        <div className="star">
          4.5 <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span className="iconify" data-icon="emojione:star"></span>
          <span class="iconify" data-icon="emojione:star"></span>
          <a href="#"> 897 reviews</a>
        </div>

        <span>University</span>
      </div>
      <hr />
      <RoundedBtn />
    </div>
  );
}

export default Text;

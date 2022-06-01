import React from "react";
import "./PhotosCompo.css";

function PhotosCompo() {
  return (
    <div className="m-3">
      <b>Photos</b>
      <div className="d-flex justify-content-between my-4">
        <div className="Image"></div>
        <div className="Image"></div>
        <div className="Image"></div>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className=" btn border edit-radius">
          <i className="fa fa-camera text-primary px-2"></i>Add a Photo
        </button>
      </div>
    </div>
  );
}

export default PhotosCompo;

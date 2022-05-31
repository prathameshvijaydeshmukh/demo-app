import React from "react";
import "./UpdatesCustomers.css";

export default function UpdatesCustomers() {
  return (
    <>
      <div className="m-3">
        <b>Updates For Customers</b>
        <div className="border d-flex box-radius">
          <div className="col-6 p-2 font-size">
            <p className="mb-0">Really very nice so happy here.</p>
            <span className="font-weight">a month ago</span>
          </div>
          <div className="col-6 p-2 half-image">
            {/* <img className="half-image" src="./xxx.jpg" alt="image" /> */}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

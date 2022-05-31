import React from "react";
import "./AddressCompo.css";

function AddressCompo() {
  return (
    <>
      <hr></hr>
      <div className="list-main">
        <div className="add d-flex m-3">
          <span className="iconify mt-1" data-icon="carbon:location"></span>
          <div className="txt">Your visited Yesterday</div>
        </div>
        <div className="add d-flex m-3">
          <span className="iconify mt-1 fss" data-icon="carbon:location"></span>
          <div className="txt">
            32, Kanagam Rd, Kanagam, Tharamani, Chennai, Tamil Nadu 600113
          </div>
        </div>
        <div className="add d-flex m-3">
          <span
            class="iconify mt-1"
            data-icon="ant-design:clock-circle-outlined"
          ></span>
          <div className="txt">
            Closes 6.30PM
            <span class="iconify" data-icon="dashicons:arrow-down-alt2"></span>
          </div>
        </div>
        <div className="add d-flex m-3">
          <span class="iconify mt-1" data-icon="geo:ui-earth-west"></span>
          <div className="txt">http://respark.iitm.ac.in/</div>
        </div>
        <div className="add d-flex m-3">
          <span class="iconify mt-1" data-icon="carbon:phone-filled"></span>
          <div className="txt">04466469800</div>
        </div>
        <div className="add d-flex m-3">
          <span class="iconify mt-1" data-icon="simple-icons:pluscodes"></span>
          <div className="txt">X6RV+86 Chennai, Tamil Nadu</div>
        </div>
        <div className="add d-flex m-3">
          <span class="iconify mt-1" data-icon="ci:label"></span>
          <div className="txt">Add a label</div>
        </div>
        <div className="d-flex justify-content-center">
          <button className=" btn border edit-radius">
            <i className="fa fa-pen text-primary px-2"></i>Suggest an edit{" "}
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default AddressCompo;

import React from "react";
import FirstCompo from "../FirstCompo/FirstCompo";
import AddressCompo from "../ListCompo/AddressCompo";
import RoundedBtn from "../RoundedBtn/RoundedBtn";
import MadrasPark from "../MadrasPark/MadrasPark";
import "./sidebar.css";
import UpdatesCustomers from "../UpdatesCustomer/UpdatesCustomers";
import PhotosCompo from "../PhotosCompo/PhotosCompo";
import Directory from "../DirectoryCompo/DirectoryCompo";
import ReviewSummaryCompo from "../ReviewSummaryCompo/ReviewSummaryCompo";
import ReviewCompo from "../../ReviewCompo/ReviewCompo";

function Sidebar() {
  return (
    <div>
      <button
        className="btn-edit"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        X
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header p-0">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel"></h5>
          <button
            type="button"
            className="btn-close  text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <FirstCompo />
          <MadrasPark />
          <RoundedBtn />
          <AddressCompo />
          <UpdatesCustomers />
          <PhotosCompo />
          <Directory />
          <ReviewSummaryCompo />
          <ReviewCompo />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

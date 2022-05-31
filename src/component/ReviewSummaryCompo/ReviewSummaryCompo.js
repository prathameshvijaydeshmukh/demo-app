import "./ReviewSummaryCompo.css";

function ReviewSummaryCompo() {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between ">
        <div>
          <b>ReviewSummaryCompo</b>
        </div>
        <div>
          <span
            class="iconify"
            data-icon="ant-design:question-circle-outlined"
          ></span>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <div className="edit-w">
          <div className="progress bg-white">
            5
            <div
              className="progress-bar w-100 m-1"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress bg-white">
            4
            <div
              className="progress-bar w-75 m-1"
              role="progressbar"
              //   style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress bg-white">
            3
            <div
              className="progress-bar w-50 m-1"
              role="progressbar"
              //   style="width: 50%"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="progress bg-white">
            2
            <div
              className="progress-bar w-25 m-1"
              role="progressbar"
              //   style="width: 75%"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div class="progress bg-white">
            1
            <div
              className="progress-bar w-10 m-1"
              role="progressbar"
              //   style="width: 100%"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="h1 mb-0">4.5</span>
          <div className="starr">
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star"></span>
          </div>
          <button className="review btn border">
            <span className="text-primary">899Review</span>
          </button>
        </div>
      </div>

      <div className="d-flex m-3 ">
        <div className="small-circle "></div>
        <div>
          <p className="m-3">
            "A nice place and food in the food court is also at reasonable
            price."
          </p>
        </div>
      </div>
      <div className="d-flex m-3 ">
        <div className="small-circle "></div>
        <div>
          <p className="m-3">
            "A nice place and food in the food court is also at reasonable
            price."
          </p>
        </div>
      </div>
      <div className="d-flex m-3 ">
        <div className="small-circle "></div>
        <div>
          <p className="m-3">
            "A nice place and food in the food court is also at reasonable
            price."
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center m-3">
        <button className=" btn border edit-radius">
          <span
            className="iconify text-primary p-0"
            data-icon="jam:write"
          ></span>
          Write a review
        </button>
      </div>
    </div>
  );
}

export default ReviewSummaryCompo;

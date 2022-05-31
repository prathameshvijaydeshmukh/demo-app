import "./ReviewCompo.css";

function ReviewCompo() {
  return (
    <div className="m-3">
      <div className="d-flex justify-content-between">
        <div>
          <b>Reviews</b>
        </div>
        <div>
          {/* <span class="iconify" data-icon="ant-design:search-outlined"></span> */}
          <button className=" btn border edit-radius sort-edit">
            <span class="iconify" data-icon="bx:menu-alt-left"></span>
            Sort
          </button>
        </div>
      </div>
      <div className="m-3">
        <button className=" btn border edit-radius sort-edit mx-1">All</button>
        <button className=" btn border edit-radius sort-edit mx-1">
          startups 31
        </button>
        <button className=" btn border edit-radius sort-edit my-2">
          Infrastructure 21
        </button>
        <button className=" btn border edit-radius sort-edit mx-1">
          food court 12
        </button>
        <button className=" btn border edit-radius sort-edit mx-1">
          Parking 12
        </button>
        <button className=" btn border edit-radius sort-edit mx-1">+6</button>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <span className="review-circle"></span>
          <p className="text-head">
            Lambert Winston
            <br />
            Local Guide · 143 reviews
          </p>
          <br />
        </div>
        <div>
          <span
            class="iconify"
            data-icon="carbon:overflow-menu-vertical"
          ></span>
        </div>
      </div>
      <div className="d-flex mx-3">
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span class="iconify" data-icon="emojione:star"></span>
        <p className="edit-mb"> 3 weeks ago</p>
        <br />
      </div>
      <p className="d-block">
        Attended a training session by Rotary club, District 3232 at the
        auditorium located at 7th floor of D Block. Excellent ambience with a
        seating capacity of around 900 people.
      </p>
      <div className="color d-flex">
        <div className="color1"></div>
        <div className="color2"></div>
      </div>
      <div className="color d-flex">
        <div className="color3"></div>
        <div className="color4"></div>
      </div>
      <div className="d-flex justify-content-between my-3">
        <div className="d-flex">
          <span className="review-circle"></span>
          <p className="text-head">
            Lambert Winston
            <br />
            Local Guide · 143 reviews
          </p>
          <br />
        </div>
        <div>
          <span
            class="iconify"
            data-icon="carbon:overflow-menu-vertical"
          ></span>
        </div>
      </div>
      <div className="d-flex mx-3">
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span class="iconify" data-icon="emojione:star"></span>
        <p className="edit-mb"> 3 weeks ago</p>
        <br />
      </div>
      <p className="d-block">
        Attended a training session by Rotary club, District 3232 at the
        auditorium located at 7th floor of D Block. Excellent ambience with a
        seating capacity of around 900 people.
      </p>
      <div className="color d-flex">
        <div className="color1"></div>
        <div className="color2"></div>
      </div>
      <div className="color d-flex">
        <div className="color3"></div>
        <div className="color4"></div>
      </div>{" "}
      <div className="d-flex justify-content-between my-3">
        <div className="d-flex">
          <span className="review-circle"></span>
          <p className="text-head">
            Lambert Winston
            <br />
            Local Guide · 143 reviews
          </p>
          <br />
        </div>
        <div>
          <span
            class="iconify"
            data-icon="carbon:overflow-menu-vertical"
          ></span>
        </div>
      </div>
      <div className="d-flex mx-3">
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span className="iconify" data-icon="emojione:star"></span>
        <span class="iconify" data-icon="emojione:star"></span>
        <p className="edit-mb"> 3 weeks ago</p>
        <br />
      </div>
      <p className="d-block">
        Attended a training session by Rotary club, District 3232 at the
        auditorium located at 7th floor of D Block. Excellent ambience with a
        seating capacity of around 900 people.
      </p>
      <div className="color d-flex">
        <div className="color1"></div>
        <div className="color2"></div>
      </div>
      <div className="color d-flex">
        <div className="color3"></div>
        <div className="color4"></div>
      </div>
    </div>
  );
}

export default ReviewCompo;

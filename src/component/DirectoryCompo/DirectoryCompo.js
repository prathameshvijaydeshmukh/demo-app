import "./Directory.css";

function Directory() {
  return (
    <div className="m-3">
      <b className="d-block">Directory</b>
      <input
        className="border search-edit my-3"
        type="text"
        placeholder="Search for Places"
      />
      <div className="d-flex  justify-content-between ">
        <button className=" btn border edit-radius">Services 2</button>
        <button className=" btn border edit-radius">Health & Beauty 1</button>
        <button className=" btn border edit-radius">Other 9</button>
      </div>
      <div className="d-flex my-4 justify-content-between px-2">
        <div className="d-block">
          <b>Lema Labs</b>
          <div className="d-block">
            4.9 <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star">
              (66)
            </span>
            <span className="d-block"> Training Center</span>
            <span className="d-block text-success">Open.</span>
          </div>
        </div>
        <div className="img"></div>
      </div>
      <div className="d-flex my-4 justify-content-between px-2">
        <div className="d-block">
          <b>Lema Labs</b>
          <div className="d-block">
            4.9 <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star">
              (66)
            </span>
            <span className="d-block"> Training Center</span>
            <span className="d-block  text-danger">Closed.</span>
            <span> Opens 10AM Mon </span>
          </div>
        </div>
        <div className="img"></div>
      </div>
      <div className="d-flex my-4 justify-content-between px-2">
        <div className="d-block">
          <b>Lema Labs</b>
          <div className="d-block">
            4.9 <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star">
              (66)
            </span>
            <span className="d-block"> Training Center</span>
            <span className="d-block text-success">Open.</span>
            <span> Opens 10AM Mon </span>
          </div>
        </div>
        <div className="img"></div>
      </div>
      <div className="d-flex my-4 justify-content-between px-2">
        <div className="d-block">
          <b>Lema Labs</b>
          <div className="d-block">
            4.9 <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span className="iconify" data-icon="emojione:star"></span>
            <span class="iconify" data-icon="emojione:star">
              (66)
            </span>
            <span className="d-block"> Training Center</span>
            <span className="d-block text-danger">Closed.</span>
            <span> Opens 10AM Mon </span>
          </div>
        </div>
        <div className="img"></div>
      </div>

      <div className="d-flex justify-content-center m-3">
        <button className=" btn border edit-radius">View all</button>
      </div>
    </div>
  );
}

export default Directory;

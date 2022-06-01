import "./ButtonCompo.css";

function ButtonCompo() {
  return (
    <div>
      <div className="Button-line button-edit">
        <button className="btn border edit-radius  mx-1 bg-light">
          <i className="fa fa-bed"></i>
          <span className="ms-1">Restaurants</span>
        </button>
        <button className="btn border edit-radius mx-1 bg-light">
          <i className="fa fa-spoon"></i>
          <span className="ms-1"> Hotels</span>
        </button>
        <button className="btn border edit-radius mx-1 bg-light">
          <i className="fa fa-atom"></i>
          <span className="ms-1">Attractions</span>
        </button>
        <button className="btn border edit-radius mx-1 bg-light">
          <i className="fa fa-train"></i>
          <span className="ms-1">Transit</span>
        </button>
        <button className="btn border edit-radius mx-1 bg-light">
          <i className="fa fa-hospital"></i>
          <span className="ms-1">Pharmacies</span>
        </button>
        <button className="btn border edit-radius mx-1 bg-light">
          <i className="fa fa-money-bill-alt"></i>
          <span className="ms-1">ATMs</span>
        </button>
      </div>
    </div>
  );
}

export default ButtonCompo;

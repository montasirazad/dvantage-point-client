import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, description, img, url } = props.service;
  return (
    <div>
      <div
        className="card  mx-3 my-3"
        style={{ width: "20rem", height: "500px", border: "1px solid blue" }}
      >
        <img
          src={img}
          className="card-img-top "
          style={{ width: "auto", height: "320px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>

          <Link to={`/${url}`} target="_top">
            <button
              className="button-85"
              style={{ position: "absolute", bottom: "10px" }}
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

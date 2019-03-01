import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
    <div className="smurf">
      <Link to={`smurf/${props.id}`} className="spotlight-link">
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button
        onClick={() => props.deleteSmurf(props.id)}
        className="delete-smurf-button"
      >
        Delete Smurf
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

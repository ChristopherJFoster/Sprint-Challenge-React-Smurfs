import React from "react";
// import { Link } from "react-router-dom";

// Didn't leave myself enought time to figure out how to spotlight a smurf:
// const Smurf = props => {
//   return (
//     <Link to={`smurf/${props.id}`} className="smurf">
//       <h3>{props.name}</h3>
//       <strong>{props.height} tall</strong>
//       <p>{props.age} smurf years old</p>
//       <button className="delete-smurf-button">Delete Smurf</button>
//     </Link>
//   );
// };

const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
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

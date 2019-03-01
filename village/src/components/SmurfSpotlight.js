import React from "react";
import { Link } from "react-router-dom";

let spotlightedSmurf;

// I don't know if this needs to be a class component or not. It doesn't use state, but I think it needs the render method...
class SmurfSpotlight extends React.Component {
  deleteSpotlightedSmurf = () => {
    this.props.deleteSmurf(spotlightedSmurf.id);
    this.props.history.push("/");
  };

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    spotlightedSmurf = this.props.smurfs.find(smurf => id === smurf.id);

    if (!spotlightedSmurf) {
      return <h3>Loading smurf...</h3>;
    }

    return (
      <div className="smurf spotlight">
        <h2>{spotlightedSmurf.name}</h2>
        <strong>{spotlightedSmurf.height} tall</strong>
        <p>{spotlightedSmurf.age} smurf years old</p>
        <button
          onClick={this.deleteSpotlightedSmurf}
          className="delete-smurf-button"
        >
          Delete Smurf
        </button>
        <Link
          to={`/smurf-edit-form/${spotlightedSmurf.id}`}
          className="edit-smurf-button"
        >
          Edit Smurf
        </Link>
      </div>
    );
  }
}

export default SmurfSpotlight;

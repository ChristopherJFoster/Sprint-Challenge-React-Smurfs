import React from "react";

const SmurfSpotlight = props => {
  const id = parseInt(props.match.params.id, 10);
  const spotlightedSmurf = props.smurfs.find(smurf => id === smurf.id);

  const deleteSpotlightedSmurf = () => {
    props.deleteSmurf(spotlightedSmurf.id);
    props.history.push("/");
  };

  return (
    <div className="smurf spotlight">
      <h2>{spotlightedSmurf.name}</h2>
      <strong>{spotlightedSmurf.height} tall</strong>
      <p>{spotlightedSmurf.age} smurf years old</p>
      <button onClick={deleteSpotlightedSmurf} className="delete-smurf-button">
        Delete Smurf
      </button>
    </div>
  );
};

export default SmurfSpotlight;

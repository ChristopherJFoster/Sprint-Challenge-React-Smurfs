import React, { Component } from "react";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = e => {
    e.preventDefault();
    // add code to create the smurf using the api
    this.props.submitSmurf(this.state.name, this.state.age, this.state.height);

    this.setState({
      name: "",
      age: "",
      height: ""
    });

    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="smurf-form">
        <h1>Who's the new Smurf?</h1>
        <form onSubmit={this.addSmurf} className="form-inputs">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="add-smurf-button" type="submit">
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

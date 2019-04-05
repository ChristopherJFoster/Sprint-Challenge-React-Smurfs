import React, { Component } from "react";

let smurfToEdit;

class SmurfEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10);
    smurfToEdit = this.props.smurfs.find(smurf => id === smurf.id);
    if (!smurfToEdit) {
      this.props.history.push("/");
    } else {
      this.setState({
        name: smurfToEdit.name,
        age: smurfToEdit.age,
        height: smurfToEdit.height
      });
    }
  }

  editSmurf = e => {
    e.preventDefault();
    this.props.submitSmurfEdits(
      parseInt(this.props.match.params.id, 10),
      this.state.name,
      this.state.age,
      this.state.height
    );
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
    if (this.state.name === "") {
      return <h3>Loading smurf...</h3>;
    }
    return (
      <div className="smurf-form">
        <h1>What needs updating?</h1>
        <form onSubmit={this.editSmurf} className="form-inputs">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            required
          />
          <button className="add-smurf-button" type="submit">
            Submit Updates
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfEditForm;

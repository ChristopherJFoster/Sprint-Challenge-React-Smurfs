import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import "./main.css";
import { NavBar } from "./components/NavBar";
import Smurfs from "./components/Smurfs";
import Smurf from "./components/Smurf";
import SmurfForm from "./components/SmurfForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: ""
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  submitSmurf = (name, age, height) => {
    axios
      .post("http://localhost:3333/smurfs", { name, age, height })
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  deleteSmurf = id => {
    axios
      .delete("http://localhost:3333/smurfs", { data: { id } })
      .then(res => {
        this.setState({
          smurfs: res.data
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };

  render() {
    return (
      <div className="app">
        <NavBar />
        <Route
          exact
          path="/"
          render={routeProps => (
            <Smurfs
              {...routeProps}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={routeProps => (
            <SmurfForm {...routeProps} submitSmurf={this.submitSmurf} />
          )}
        />
        <Route
          path="/smurf/:id"
          render={routeProps => (
            <Smurf {...routeProps} smurfs={this.state.smurfs} />
          )}
        />
      </div>
    );
  }
}

export default App;

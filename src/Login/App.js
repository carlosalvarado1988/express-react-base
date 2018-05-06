import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      patients: []
   };
  }

  componentDidMount() {
    axios.get('/api/message')
      .then(response => this.setState({ message: response.data }))
    axios.get('/api/patients')
      .then(response => this.setState({ patients: response.data }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <p className="App-intro">
          Welcome, these are your patients:
        </p>
        <ul>
          {this.state.patients.map(patient =>
            <li key={patient.id}>{patient.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

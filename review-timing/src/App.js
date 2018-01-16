import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    }
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <DatePicker selected={this.state.startDate} onChange={e => this.handleChange(e)} />
        </p>
      </div>
    );
  }
}

export default App;

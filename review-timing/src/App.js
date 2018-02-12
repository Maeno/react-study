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
      startDate: moment(),
      first: '',
      second: '',
      thrid: '',
      fourth: '',
      fifth: '',
      out: '',
      title: ''
    }
  }

  handleChange (date) {
    this.setState({
      startDate: date
    })
  }

  onClick (e) {
    const tmpDate = this.state.startDate
    const out = 
    '*** TODO ' + this.state.title + '\r\n' + 
    '**** TODO ' + this.state.title + ' (1st)\r\n' + 
    '     SCHEDULED: <' + moment(tmpDate).format('YYYY-MM-DD') + '> DEADLINE: <' + moment(tmpDate).format('YYYY-MM-DD') + '>\r\n' + 
    '**** TODO ' + this.state.title + ' (2nd)\r\n' + 
    '     SCHEDULED: <' + moment(tmpDate).add('days', 1).format('YYYY-MM-DD') + '> DEADLINE: <' + moment(tmpDate).add('days', 1).format('YYYY-MM-DD') + '>\r\n' + 
    '**** TODO ' + this.state.title + ' (3rd)\r\n' + 
    '     SCHEDULED: <' + moment(tmpDate).add('days', 7).format('YYYY-MM-DD') + '> DEADLINE: <' + moment(tmpDate).add('days', 7).format('YYYY-MM-DD') + '>\r\n' + 
    '**** TODO ' + this.state.title + ' (4th)\r\n' + 
    '     SCHEDULED: <' + moment(tmpDate).add('M', 1).format('YYYY-MM-DD') + '> DEADLINE: <' + moment(tmpDate).add('M', 1).format('YYYY-MM-DD') + '>\r\n' + 
    '**** TODO ' + this.state.title + ' (5th)\r\n' + 
    '     SCHEDULED: <' + moment(tmpDate).add('M', 6).format('YYYY-MM-DD') + '> DEADLINE: <' + moment(tmpDate).add('M', 6).format('YYYY-MM-DD') + '>\r\n'
    
    
    this.setState({
      first: moment(tmpDate).format('YYYY/MM/DD'),
      second: moment(tmpDate).add('days', 1).format('YYYY/MM/DD'),
      thrid: moment(tmpDate).add('days', 7).format('YYYY/MM/DD'),
      fourth: moment(tmpDate).add('M', 1).format('YYYY/MM/DD'),
      fifth: moment(tmpDate).add('M', 6).format('YYYY/MM/DD'),
      out: out
    })
  }

  input (e) {
    this.setState({
      title: e.target.value
    })
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"></p>
        <input type="text" placeholder="Input title here." value={this.state.title} onChange={e => this.input(e)}/>
        <DatePicker 
          selected={this.state.startDate} 
          onChange={e => this.handleChange(e)}
          dateFormat="YYYY/MM/DD" />
        <button onClick={e => this.onClick(e)}>calcuate</button>
        <table border="1">
          <thead>
            <tr>
              <th>Timing of review</th>
              <th>scheduled day of review</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1st</td>
              <td>{this.state.first}</td>
            </tr>
            <tr>
              <td>2nd</td>
              <td>{this.state.second}</td>
            </tr>
            <tr>
              <td>3rd</td>
              <td>{this.state.thrid}</td>
            </tr>            
            <tr>
              <td>4th</td>
              <td>{this.state.fourth}</td>
            </tr>
            <tr>
              <td>5th</td>
              <td>{this.state.fifth}</td>
            </tr>  
          </tbody>
        </table>
        <textarea value={this.state.out}/>
      </div>
    );
  }
}

export default App;

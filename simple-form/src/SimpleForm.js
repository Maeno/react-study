import React, {Component} from 'react'

export default class SimpleForm extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }

  update (e) {
    this.setState({value: e.target.value})
  }

  submit (e) {
    window.alert('Inputted value: ' + this.state.value)
    e.preventDefault()
  }

  render () {
    return (
      <form onSubmit={e => this.submit(e)}>
        <input type='text' value={this.state.value} onChange={e => this.update(e)} />
        <input type='submit' value='send' />
      </form>
    )
  }
}
import React, {Component} from 'react'

export default class NumericForm extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }

  update (e) {
    const originalValue = e.target.value
    const convertedValue = originalValue.replace(/[^0-9]/g, '')
    this.setState({value: convertedValue})
  }

  submit (e) {
    window.alert('Inputted value : ' + this.state.value)
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
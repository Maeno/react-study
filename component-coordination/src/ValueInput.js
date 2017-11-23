import React, {Component} from 'react'

export default class ValueInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  updated (e) {
    const val = e.target.value
    const newVal = val.replace(/[^0-9.]+/g, '')
    this.setState({
      value: newVal
    })
    this.props.onChange({
      target: this,
      value: newVal
    })
  }

componentWillReceiveProps (nextProps) {
  this.setState({
    value: nextProps.value
  })
}

render () {
  return (
    <div>
      <label>{this.props.title}: <br />
        <input type='text' value={this.state.value}
        onChange={e => this.updated(e)} />
      </label>
    </div>
  )
}

}
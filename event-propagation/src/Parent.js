import React, {Component} from 'react'
import Child from './Child.js'

class Parent extends Component {
  receive (data) {
    alert(data.name + ' :: ' + data.type)
  }

  render () {
    return (
      <div>
        <Child onEventCallback={e => this.receive(e)} />
      </div>
    )
  }
}

export default Parent
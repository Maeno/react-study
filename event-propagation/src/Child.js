import React, {Component} from 'react'

class Child extends Component {

  click (e) {
    this.props.onEventCallback({
      name: 'Child',
      type: 'click'
    })
  }

  render () {
    return (
      <div>
        <button onClick={e => this.click(e)}>click</button>
      </div>
      )
  }

}

export default Child
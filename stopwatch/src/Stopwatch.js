import React, {Component} from 'react'

class Stopwatch extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      isActive: false,
      currentTime: 0,
      startTime: 0
    }
    this.timerId = 0
  }

  componentWillMount () {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000)
    console.log('timerId ::: ' + this.timerId)
  }

  componentWillUnmount () {
    clearInterval(this.timerId)
  }

  tick () {
    if (this.state.isActive) {
      const now = new Date().getTime()
      this.setState({
        currentTime: now
      })
    }
  }

  click (e) {
    if (this.state.isActive) {
      this.setState({
        isActive: false
      })
      return
    }

    const now = new Date().getTime()
    this.setState({
      currentTime: now,
      startTime: now,
      isActive: true
    })
  }

  getDisplay () {
    const st = this.state
    const delta = st.currentTime - st.startTime
    console.log('delta ::: ' + delta)
    const t = Math.floor(delta / 1000)
    const ss = t % 60
    const m = Math.floor(t / 60)
    const mm = m % 60
    const hh = Math.floor(mm / 60)

    const z = (num) => {
      const s = '00' + String(num)
      return s.substr(s.length - 2, 2)
    }
    return <span>{z(hh)}:{z(mm)}:{z(ss)}</span>
  }

  render () {
    let label = 'START'
    if (this.state.isActive) {
      label = 'STOP'
    }
    const display = this.getDisplay()
    const click = (e) => this.click(e)
    return (<div>
      <div>{display}</div>
      <button onClick={click}>{label}</button>
    </div>)
  }
}

export default Stopwatch
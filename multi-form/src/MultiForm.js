import React, {Component} from 'react'

export default class MultiForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Mike',
      age: 30,
      birthplace: 'Tokyo'
    }
  }

  update (e) {
    const val = e.target.value
    const key = e.target.name
    this.setState({[key]: val})
  }

  submit (e) {
    e.preventDefault()
    window.alert(JSON.stringify(this.state))
  }

  render () {
    return (
      <form onSubmit={e => this.submit(e)}>
        <div><label>
          Name: <input name='name' type='text' value={this.state.name} onChange={e => this.update(e)} />
        </label></div>
        <div><label>
          Age: <input name='age' type='text' value={this.state.age} onChange={e => this.update(e)} />
        </label></div>
        <div><label>
          Birthplace: <input name='birthplace' type='text' value={this.state.birthplace} onChange={e => this.update(e)} />
        </label></div>
        <input type='submit' value='send' />
      </form>
    )
  }

}
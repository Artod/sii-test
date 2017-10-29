import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import stl from './index.css'

class FormAddScreenName extends Component {
  constructor(props) {
    super()

    this.state = {
      name: '',
    }

    this.inputName = null
  }

  componentDidMount() {
    this.inputName.focus()
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault()
    const {name} = this.state

    if (name.trim() === '') {
      this.inputName.focus()
      return
    }

    this.props.onSubmit(name)
  }

  render() {

    return (
      <section className="FormAddScreenName">
        <header>
          <h1>Add new twitter account</h1>
        </header>
        <form onSubmit={this.onSubmit.bind(this)}>
          <TextField
            name="name"
            placeholder="Screen name"
            ref={input => this.inputName = input}
            value={this.state.name}
            onChange={this.onChange.bind(this)}
          />
          <RaisedButton primary={true} onClick={this.onSubmit.bind(this)} label="Submit"></RaisedButton>
        </form>
      </section>
    )
  }

}

export default FormAddScreenName

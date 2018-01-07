import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Header extends Component {
  constructor () {
    super()
    this.state = {
      logo: logo,
      title: 'React Learning'
    }
  }

  render () {
    return (
      <header className="App-header">
        <img src={this.state.logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.state.title}</h1>
      </header>
    )
  }
  
}

export default Header

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  sayhi (name) {
    return `Hi,${name}`
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Learning</h1>
        </header>
        <p className="App-intro">Let's learn JSX. <span>{this.sayhi('you')}</span></p>
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      home: 'luoyang'
    }
  }

  // 箭头函数this指向外层，不需要bind(this)
  changeHome = () => {
    this.setState({
      home: 'beijing'
    })
  }

  // 需要bind(this)
  // changeHome () {
  //   this.setState({
  //     home: 'beijing'
  //   })
  // }
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
        <p className="App-intro">Let's learn JSX. <span>{this.sayhi('sunhaoxiang')}</span></p>
        {/* <p className="App-intro">Let's learn JSX. <span>{this.sayhi('sunhaoxiang').bind(this)}</span></p> */}
        <p className="App-intro"onClick={this.changeHome}>home:{this.state.home}</p>
      </div>
    )
  }
}

export default App

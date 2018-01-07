import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import List from './List'
import Header from './Header'

let data = [
  {text : 'text1'},
  {text : 'text2'},
  {text : 'text3'}
]

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      home: 'luoyang'
    }
    this.changeHome = this.changeHome.bind(this)
    this.log = this.log.bind(this)
  }

  getChildContext() {
    return {title: 'this is title'}
  }

  // 箭头函数this指向外层，不需要bind(this)
  // changeHome = () => {
  //   this.setState({
  //     home: 'beijing'
  //   })
  // }

  // 需要bind(this)
  changeHome (text) {
    this.setState({
      home: 'beijing'
    })
    console.log(text)
  }

  sayhi (name) {
    return `Hi,${name}`
  }

  log (text) {
    console.log(this.state.home, text)
  }

  render () {
    let list = data.map( (e ,i) => {
      return (
        <List log={this.log} key={i} {...e}/>
      )
    })
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">Let's learn React. <span>{this.sayhi('sunhaoxiang')}</span></p>
        <p className="App-intro"onClick={() => {this.changeHome('change')}}>home:{this.state.home}</p>
        {list}
      </div>
    )
  }
}

App.childContextTypes = {
  title: PropTypes.string
}

export default App

import React, { Component } from 'react'

class Nav extends Component {
  constructor () {
    super()
    this.state = {
      home: 'home',
      list: 'list',
      about: 'about' 
    }
  }

  render () {
    return (
      <div>
        <ul>
          <li>{this.state.home}</li>
          <li>{this.state.list}</li>
          <li>{this.state.about}</li>
        </ul>
      </div>
    )
  }
}

export default Nav

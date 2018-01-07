import React, { Component } from 'react'

class List extends Component {
  render () {
    return (
      <div>
        <ul>
          <li>{this.props.home}</li>
          <li>{this.props.list}</li>
          <li>{this.props.about}</li>
        </ul>
      </div>
    )
  }
}

export default List

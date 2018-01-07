import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListTitle extends Component {
  render () {
    return (
      <h4>{this.context.title}</h4>
    )
  }
}

ListTitle.contextTypes = {
  title: PropTypes.string
}

export default ListTitle

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
  render () {
    return (
      <div>{this.props.text}</div>
    )
  }
}

List.defaultProps = {
  text: 'default'
}

List.propTypes = {
  text: PropTypes.string.isRequired
}

export default List

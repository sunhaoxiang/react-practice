import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListTitle from './ListTitle'

class List extends Component {
  render () {
    return (
      <div>
        <ListTitle/>
        <div>{this.props.text}</div>
      </div>
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

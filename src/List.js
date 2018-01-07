import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ListTitle from './ListTitle'

class List extends Component {
  render () {
    let {log} = this.props
    return (
      <div>
        <ListTitle/>
        <div onClick = {() =>{ log('123') }}>{this.props.text}</div>
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

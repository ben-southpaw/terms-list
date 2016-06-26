import React from 'react'

var Linkify = require('react-linkify')

export default (props) => {
  if (props.term) {
    return (
      <div>
        <h2>Link</h2>
        <p>{props.term.name}: {' '}
          <Linkify>{props.term.link}</Linkify></p>
        <a href="#" onClick={props.hideDetails}>hide link</a>
      </div>
    )
  }
  return null
}

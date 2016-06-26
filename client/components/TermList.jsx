import React from 'react'

export default (props) => {
  return (
    <div className="termslist">
      <h2>List</h2>
      
      <ul>
        {props.terms.map((term) => {
          return (
            <li key={term.id}>
              {term.name} {' '}
              <a href="#" onClick={() => props.showDetails(term.id)}>(show link)</a>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

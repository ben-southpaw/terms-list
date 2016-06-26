import React from 'react'

import TermListContainer from '../containers/TermlistContainer'
import TermDetailContainer from '../containers/TermDetailContainer'
import QuoteApp from '../containers/QuoteApp'

export default () => {
  return (
    <div>
      <h1>Phase Zero concepts to learn</h1>
      <TermListContainer />
      <TermDetailContainer />
      <QuoteApp />
    </div>
  )
}

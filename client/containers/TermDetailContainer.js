import { connect } from 'react-redux'

import TermDetail from '../components/TermDetail'
import { hideDetails } from '../actions'

const mapStateToProps = (state) => {
  const termDetails = state.terms.filter((term) => {
    if (term.id === state.selectedTerm) {
      return term
    }
  })[0] 

  return {
    term: termDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetails: () => {
      dispatch(hideDetails())
    }
  }
}

const TermDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TermDetail)

export default TermDetailContainer

import { connect } from 'react-redux'

import TermList from '../components/TermList'
import { showDetails } from '../actions'

const mapStateToProps = (state) => {
  return {
    terms: state.terms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDetails: (id) => {
      dispatch(showDetails(id))
       }

  }
}

const TermListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TermList)

export default TermListContainer

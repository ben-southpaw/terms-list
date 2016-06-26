import { SHOW_DETAILS, HIDE_DETAILS } from './actions'




const INITIAL_STATE = {
  selectedThing: null,
  terms: [{
    id: 1,
    name: 'API',
    link: 'https://github.com/dev-academy-programme/concepts/blob/master/api/intro.md'
  }, {
    id: 2,
    name: 'Git',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/git-basics'
  }, {
    id: 3,
    name: 'HTML',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/html-basics-1'
  }, {
    id: 4,
    name: 'JavaScript',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/js-basics'
  }, {
    id: 5,
    name: 'TDD',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/test-driven-development'
  }, {
    id: 6,
    name: 'Command Line',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/command-line-basics'
  }, {
    id: 7,
    name: 'JS Event',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/events'
  }, {
    id: 8,
    name: 'Process over product',
    link: 'https://github.com/dev-academy-programme/curriculum/tree/master/concepts/process-over-product'
  }, {
    id: 9,
    name: 'Dev for mobile',
    link: 'https://github.com/dev-academy-programme/concepts/blob/master/mobile/debugging.md'
  }]
}



export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return Object.assign({}, state, {
        selectedTerm: action.id
      })
    case HIDE_DETAILS:
      return Object.assign({}, state, {
        selectedTerm: null
      })

    //   // create copy of existing state
      const newState = Object.assign({}, state)
      newState.terms = state.terms.slice()

      return newState
    default:
      return state
  }
}

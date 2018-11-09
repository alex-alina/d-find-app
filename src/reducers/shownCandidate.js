import { candidatesDatabase } from '../data/candidatesDatabase'
import { SET_SHOWN_CANDIDATE } from '../actions/setShownCandidate';

const reducer = (state = candidatesDatabase[0], action = {}) => {
  switch (action.type) {
    case SET_SHOWN_CANDIDATE:
      return {...state} = candidatesDatabase[action.payload];
    default:
      return state
  }
}

export default reducer
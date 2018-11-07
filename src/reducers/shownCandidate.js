import { candidatesDatabase } from '../data/candidatesDatabase'
import { SET_SHOWN_CANDIDATE } from '../actions/setShownCandidate';

const profileSelector =  () => {
  return candidatesDatabase[Math.floor(Math.random() * (candidatesDatabase.length))]
}

const reducer = (state = profileSelector(), action = {}) => {
  switch (action.type) {
    case SET_SHOWN_CANDIDATE:
      return {...state = action.payload};
    default:
      return state
  }
}

export default reducer
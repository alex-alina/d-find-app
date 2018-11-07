import { combineReducers } from 'redux'
import candidates from './candidates';
import shownCandidate from './shownCandidate';
import currentUser from './currentUser';
import liked from './liked'
import matched from './matched'

export default combineReducers({
  candidates,
  shownCandidate,
  currentUser,
  liked,
  matched,
})

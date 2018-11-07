import { combineReducers } from 'redux'
import candidates from './candidates'
import shownCandidate from './shownCandidate'
import currentUser from './currentUser'

export default combineReducers({
  candidates,
  currentUser,
  shownCandidate,
})

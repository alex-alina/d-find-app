import { combineReducers } from 'redux'
import candidates from './candidates'
import shownCandidate from './shownCandidate'

export default combineReducers({
  candidates,
  shownCandidate,
})

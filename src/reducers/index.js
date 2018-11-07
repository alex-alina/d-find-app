import { combineReducers } from 'redux'
import candidates from './candidates'
import currentUser from './currentUser'
import liked from './liked'
import matches from './matches'
import passed from './passed'

export default combineReducers({
  candidates,
  currentUser,
  liked,
  matches,
  passed,
})

import { combineReducers } from 'redux'
import userProfiles from './userProfiles'
import currentUser from './currentUser'
import liked from './liked'
import matches from './matches'

export default combineReducers({
  userProfiles,
  currentUser,
  liked,
  matches,
})

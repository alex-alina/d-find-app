import { combineReducers } from 'redux'
import candidates from './candidates'
import currentUser from './currentUser'

export default combineReducers({
  candidates,
  currentUser
  
})
